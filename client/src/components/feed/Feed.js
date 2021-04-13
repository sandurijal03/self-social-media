import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Posts } from '../../dummydata';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
