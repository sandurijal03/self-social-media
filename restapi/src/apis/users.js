import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

const router = Router();

// update user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { _id, isAdmin, password } = req.body;

  if (_id === id || isAdmin) {
    if (password) {
      try {
        const salt = await bcrypt.genSalt(12);
        password = await bcrypt.hash(password, salt);
      } catch (err) {
        return res.status(500).json({ success: false, message: err });
      }
    }
    try {
      await User.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res
        .status(200)
        .json({ success: true, message: 'Account has been updated.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err });
    }
  } else {
    return res
      .status(403)
      .json({ success: false, message: 'you can update only your account.' });
  }
});

// delete user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { _id, isAdmin } = req.body;

  if (_id === id || isAdmin) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: 'Account has been deleted successfully.',
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err });
    }
  } else {
    return res
      .status(403)
      .json({ success: false, message: 'you can delete only your account.' });
  }
});

// get a user
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json({ success: true, other });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// follow a user
router.put('/:id/follow', async (req, res) => {
  const { id } = req.params;
  const { _id } = req.body;

  if (_id !== id) {
    try {
      const user = await User.findById(id);
      const currentUser = await User.findById(_id);
      if (!user.followers.includes(_id)) {
        await user.updateOne({
          $push: {
            followers: _id,
          },
        });
        await currentUser.updateOne({
          $push: {
            followings: id,
          },
        });
        res
          .status(200)
          .json({ success: true, message: 'successfully followed' });
      } else {
        res.status(403).json({
          success: false,
          message: 'you have already followed this user',
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  } else {
    res
      .status(403)
      .json({ success: false, message: 'you cant follow yourself' });
  }
});

// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
  const { id } = req.params;
  const { _id } = req.body;

  if (_id !== id) {
    try {
      const user = await User.findById(id);
      const currentUser = await User.findById(_id);
      if (!user.followers.includes(_id)) {
        await user.updateOne({
          $pull: {
            followers: _id,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followings: id,
          },
        });
        res
          .status(200)
          .json({ success: true, message: 'successfully unfollowed' });
      } else {
        res.status(403).json({
          success: false,
          message: 'you dont follow this user',
        });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  } else {
    res
      .status(403)
      .json({ success: false, message: 'you cant unfollow yourself' });
  }
});

export default router;
