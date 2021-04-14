import React, { useState } from 'react';
import { MoreVert } from '@material-ui/icons';

import './post.css';
import { Users } from '../../dummydata';

const Post = ({ comment, date, desc, like, photo, userId }) => {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = (e) => {
    e.preventDefault();
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={
                publicFolder +
                Users.filter((user) => user.id === userId)[0].profilePicture
              }
              alt=''
            />
            <span className='postUsername'>
              {Users.filter((user) => user.id === userId)[0].username}
            </span>
            <div className='postDate'>{date}</div>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{desc}</span>
          <img className='postImg' src={publicFolder + photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft' onClick={likeHandler}>
            <img className='likeIcon' src={`${publicFolder}like.png`} alt='' />
            <img className='likeIcon' src={`${publicFolder}heart.png`} alt='' />
            <span className='postLikeCounter'>{likes}</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
