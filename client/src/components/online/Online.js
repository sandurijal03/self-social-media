import React from 'react';
import './online.css';

const Online = ({ profilePicture, username }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='rightbarFriend'>
      <div className='rightbarImgContainer'>
        <img
          className='rightbarProfileImg'
          src={publicFolder + profilePicture}
          alt=''
        />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>{username}</span>
    </div>
  );
};

export default Online;
