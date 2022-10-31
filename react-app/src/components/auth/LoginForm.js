import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { getAllUsersThunk } from '../../store/users';
import image from './loginImage.jpeg'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersThunk())
  }, [])

  useEffect (() => {
    let errors = []

    const emailCheck = Object.values(users).filter(user => user.email !== email)
    // const userCheck = Object.values(users).filter(user => user.username !== username)

    // if (emailCheck.length==0){errors.push("Email does not exist in our records")}
    setErrors(errors)

  }, [email])


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
          <div key={ind} className='login-errors'>{error.slice(error.indexOf(':')+ 1)}</div>
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
        required
        onChange={updateEmail}
        />
      </div>
      <div className='login-input-container'>
        <label htmlFor='password' className="form-label">Password</label>
        <input
          className='form-field'
          required
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          />
        <button type='submit' className='login_button'>Login</button>
        <button onClick={() => dispatch(login('demo@aa.io', 'password'))} className='demo_user_button'>Demo User</button>
      </div>
      <Link to='/sign-up' className='signup-link'>No Account? Sign Up Here</Link>
      </div>
    <img src={image}
    className='login-image'
    alt='login-pic'
    />
        </div>
    </form>
    </div>
  );
};

export default LoginForm;
