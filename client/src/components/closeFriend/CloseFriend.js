import React from 'react';
import './closeFriend.css';

const CloseFriend = ({ profilePicture, username }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className='sidebarFriend'>
      <img
        src={publicFolder + profilePicture}
        alt=''
        className='sidebarFriendImg'
      />
      <span className='sidebarFriendName'>{username}</span>
    </li>
  );
};

export default CloseFriend;
