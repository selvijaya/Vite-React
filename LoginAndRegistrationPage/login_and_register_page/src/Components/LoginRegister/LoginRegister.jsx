import React from 'react';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './LoginRegister.css';

function LoginRegister({showPassword,toggleShowPassword}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className='LoginWrapper' >
      <div className='LoginForm-box Login'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='Logininput-box'>
            <input
              type='text'
              placeholder='Username'
              required
            />
            <FaUser className='LoginIcon' />
          </div>
          <div className='Logininput-box'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              required
            />
            <span onClick={toggleShowPassword} className='LoginIcon'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='Loginremember-forgot'>
            <label>
              <input type='checkbox' /> Remember me
            </label>
            <Link to='#'>Forgot Password</Link>
          </div>
          <button type='submit'>Login</button>
          <div className='Login'>
            <p>
              Don't Have an Account
              <Link to='/'>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
