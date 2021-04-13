import React from 'react';
import './online.css';

const Online = ({ profilePicture, username }) => {
  return (
    <div className='rightbarFriend'>
      <div className='rightbarImgContainer'>
        <img className='rightbarProfileImg' src={profilePicture} alt='' />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>{username}</span>
    </div>
  );
};

export default Online;
