import React from 'react';

import { Users } from '../../dummydata';
import Online from '../online/Online';
import './rightbar.css';

const Rightbar = ({ profile }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Hello world </b>and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user) => (
            <Online key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfo'>City:</span>
          <span className='rightbarInfoValue'>Kathmandu</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfo'>From:</span>
          <span className='rightbarInfoValue'>Jhapa</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfo'>RelationShip:</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/1.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/2.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/3.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/4.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/5.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
          <div className='rightbarFollowing'>
            <img
              src={`${publicFolder}/person/6.jpeg`}
              alt=''
              className='rightbarFollowingImg'
            />
            <div className='rightbarFollowingName'>John Carter</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
