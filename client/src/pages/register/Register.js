import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>SANDY</h3>
          <span className='loginDesc'>
            Connect with friends and world around with sandy.
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='username' className='loginInput' />
            <input placeholder='email' className='loginInput' />
            <input placeholder='password' className='loginInput' />
            <input placeholder='confirm password' className='loginInput' />
            <button className='loginButton'>signup</button>
            <button className='loginRegister'>log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
