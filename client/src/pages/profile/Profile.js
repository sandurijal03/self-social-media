import React from 'react';
import './profile.css';

import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={`${publicFolder}/post/3.jpeg`}
                alt=''
              />
              <img
                className='profileUserImg'
                src={`${publicFolder}/person/7.jpeg`}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Sandy</h4>
              <span className='profileInfoDesc'>Sandip Rijal</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
