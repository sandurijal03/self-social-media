import React from 'react';
import './closeFriend.css';

const CloseFriend = ({ profilePicture, username }) => {
  return (
    <li className='sidebarFriend'>
      <img src={profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFriendName'>{username}</span>
    </li>
  );
};

export default CloseFriend;
