import React from 'react';

import { Users } from '../../dummydata';
import Online from '../online/Online';
import './rightbar.css';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
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
      </div>
    </div>
  );
};

export default Rightbar;
