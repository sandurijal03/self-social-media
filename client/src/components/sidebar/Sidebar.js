import React from 'react';
import {
  Bookmark,
  PlayCircleFilledOutlined,
  Chat,
  Event,
  Group,
  HelpOutline,
  RssFeed,
  School,
  WorkOutline,
} from '@material-ui/icons';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>{' '}
          <li className='sidebarListItem'>
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Help</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Work</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Calander</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Education</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
