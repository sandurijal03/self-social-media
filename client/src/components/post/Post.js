import React from 'react';
import { MoreVert } from '@material-ui/icons';

import './post.css';
import { Users } from '../../dummydata';

const Post = ({ comment, date, desc, like, photo, userId }) => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={Users.filter((user) => user.id === userId)[0].profilePicture}
              alt=''
            />
            <span className='postUsername'>
              {Users.filter((user) => user.id === userId)[0].username}
            </span>
            <div className='postDate'>{date}</div>
          </div>
          <div classNam e='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{desc}</span>
          <img className='postImg' src={photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png' alt='' />
            <img className='likeIcon' src='/assets/heart.png' alt='' />
            <span className='postLikeCounter'>{like}</span>
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
