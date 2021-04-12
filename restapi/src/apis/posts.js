import { Router } from 'express';
import Post from '../models/Post';
import User from '../models/User';

const router = Router();

// create post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res
      .status(200)
      .json({ success: true, message: 'Post created Successfully' });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
});

// update post
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (post.user._id.toString() === req.body.user) {
      await post.updateOne({ $set: req.body });
      res
        .status(200)
        .json({ success: true, message: 'post updated successfully.' });
    } else {
      res
        .status(403)
        .json({ success: false, message: 'you can update only your post.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// delete post
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (post.user._id.toString() === req.body.user) {
      await post.deleteOne();
      res
        .status(200)
        .json({ success: true, message: 'post deleted successfully.' });
    } else {
      res
        .status(403)
        .json({ success: false, message: 'you can delete only your post.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// like post
router.put('/:id/like', async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(user)) {
      await post.updateOne({ $push: { likes: user } });
      res.status(200).json({ success: true, message: 'successfully liked' });
    } else {
      await post.updateOne({ $pull: { likes: user } });
      res.status(200).json({ success: true, message: 'successfully disliked' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// get a post

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.status(200).json({ success: true, post });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// get all posts
router.get('/timeline/all', async (req, res) => {
  const { user } = req.body;
  try {
    const currentUser = await User.findById(user);
    const userPosts = await Post.find({ user: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friend) => {
        return Post.find({ user: friend });
      }),
    );
    return res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

export default router;
