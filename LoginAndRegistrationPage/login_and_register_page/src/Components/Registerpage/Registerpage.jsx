import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link,  useNavigate } from 'react-router-dom';
import './Registerpage.css';

function Registerpage({password,username,showPassword,handlePasswordChange,handleUsernameChange,toggleShowPassword}) {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const Navigate =  useNavigate();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setShowError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      Navigate('/login');
    } else {
      setShowError(true);
    }
    if (!isValidPassword(password)) {
      alert('Password must contain at least 12 characters including at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and should not contain the word "username".');
      return;
    }
  };
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/~.])[A-Za-z\d@$!%*?&#/~.]{10,}$/;
    const isPasswordValid = passwordRegex.test(password) && !password.toLowerCase().includes(username.toLowerCase());
    return isPasswordValid;
  };
  return (
    <>
    <div className='Wrapper'>
      <div className='Form-box Login'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='email'
              placeholder='Email'
              required
            />
            
            <MdEmail className='icon' />
          </div>
          <div className='input-box'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              required
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.])[A-Za-z\d@$!%*?&#/~.]{10,}$'
              title='Password must contain at least 12 characters including at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and should not contain the word "username".'
            />
          
            <span onClick={toggleShowPassword} className='icon'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='remember-forgot'>
            <label>
              <input type='checkbox' onChange={handleCheckboxChange} /> Accepts all Terms and conditions
            </label>
            {showError && <div style={{ color: 'red' }}>Please accept all terms and conditions</div>}
            <Link to ='#'>Forgot Password</Link>
          </div>
          <button type='submit'>Register</button>
          <div className='Register'>
            <p>
              Don't Have an Account
              <Link to='/login'>Login</Link>
            </p>
          </div>
        </form>
      </div>   
    </div>
    </>
  );
}

export default Registerpage;

