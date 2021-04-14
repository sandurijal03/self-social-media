import React from 'react';
import './login.css';

const Login = () => {
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
            <input placeholder='email' className='loginInput' />
            <input placeholder='password' className='loginInput' />
            <button className='loginButton'>login</button>
            <span className='loginForgot'>Forgot Password</span>
            <button className='loginRegister'>Create a new account?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
