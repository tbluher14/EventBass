import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-outer-container'>
    <form onSubmit={onLogin}>
    <div className='login-form-container'>
   <div className='login-form'>
    <div className='login-form-header'>Log In</div>
      <div className='create_errors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
          ))}
      </div>
      <div className='login-input-container'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input
        className='form-field'
        name='email'
        type='text'
        placeholder='Email'
        value={email}
        onChange={updateEmail}
        />
      </div>
      <div className='login-input-container'>
        <label htmlFor='password' className="form-label">Password</label>
        <input
          className='form-field'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          />
        <button type='submit' className='login_button'>Login</button>
      </div>
      </div>
    <img src='https://media2.westword.com/den/imager/u/original/11506458/img_3696.jpg'
    className='login-image'
    alt='login-pic'
    />
        </div>
    </form>
    </div>
  );
};

export default LoginForm;
