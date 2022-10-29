import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { getAllUsersThunk } from '../../store/users';
// import "./SignUpForm.css"
import image from './loginImage.jpeg'
// import "../..//index.css"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const users = useSelector(state => state.users)


  useEffect(() => {
    dispatch(getAllUsersThunk())
  },[])


  const emailRegX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  useEffect(() => {
    let errors = [];

    if (first_name.length < 2 || first_name.length > 50) {
      errors.push("first name: First Name must be between 2 and 50 characters.")
    }
    if (last_name.length < 2 || last_name.length > 50) {
      errors.push("last name: Last Name must be between 2 and 50 characters.")
    }
    if (username.length < 2 || username.length > 50) {
      errors.push("username: Username must be between 2 and 50 characters.")
    }
    if (!email.match(emailRegX)) {
      errors.push("email: Email must be valid email address ( example@ex.com ).")
    }
    if (email.length < 2 || email.length > 50) {
      errors.push("email: Email must be between 2 and 50 characters.")
    }
    if (password.length < 6 || password.length > 50) {
      errors.push('password: Password must be between 6 and 50 characters.');
    }
    if (password !== confirmPassword) {
      errors.push('password: Passwords must match.');
    }
    const emailCheck = Object.values(users).filter(user => user.email === email)

    if (emailCheck.length > 0) errors.push("email: Email address already in use")

    const userCheck = Object.values(users).filter(user => user.username === username)

    if ( userCheck.length > 0) errors.push("username: Username already in use")

    setErrors(errors);
  }, [first_name, last_name, email, username, password, confirmPassword]);

console.log("this is filtering", Object.values(users).filter(user => user.email === email))


  const onSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);


    if (errors.length > 0) return
    console.log(username,email,password,first_name,last_name)

    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name));
      if (data) {
        setErrors(Object.values(data));
        console.log(Object.values(data))
      }
    }
  };

  const updateFirstname = (e) => {
    setFirst_Name(e.target.value);
  };

  const updateLastname = (e) => {
    setLast_Name(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-form-outer-container'>
      <div className='signup-form-inputs-and-submit'>
      <form onSubmit={onSignUp}>
        <div className='signup-form-container'></div>
        <div className='signup-form-header'>Sign Up and Host Your Next Event on eventBass</div>
        <div className='form-input-container'>
          <div className='sign_create_errors'>
            {submitted && errors.map((error, ind) => (
              <div className="signup-error-message-container" key={ind}>
                <div className="error-message">{error.slice(error.indexOf(':') + 1)}</div>
              </div>
            ))}
          </div>
          <div className='signup-input-container'>
            <label className='form-label'>First Name:</label>
            <input
              type='text'
              className="form-field"
              name='first_name'
              onChange={updateFirstname}
              value={first_name}
              required
            ></input>
          </div>
          <div className='signup-input-container'>
            <label className='form-label'>Last Name:</label>
            <input
              type='text'
              className="form-field"
              name='last_name'
              onChange={updateLastname}
              value={last_name}
              required
            ></input>
          </div>
          <div className='signup-input-container'>
            <label className='form-label'>Username:</label>
            <input
              type='text'
              className="form-field"
              name='username'
              onChange={updateUsername}
              value={username}
              required
            ></input>
          </div>
          <div  className='signup-input-container'>
            <label className='form-label'>Email:</label>
            <input
              type='text'
              className="form-field"
              name='email'
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div  className='signup-input-container'>
            <label className='form-label'>Password:</label>
            <input
              type='password'
              className="form-field"
              name='password'
              onChange={updatePassword}
              value={password}
              required
            ></input>
          </div>
          <div  className='signup-input-container'>
            <label className='form-label'>Confirm Password:</label>
            <input
              type='password'
              className="form-field"
              name='confirm_password'
              onChange={updateConfirmPassword}
              value={confirmPassword}
              required
            ></input>
          </div>
          </div>
          <button type='submit' className='signup_button'>Sign Up</button>
          <Link to='/login' className='login-link'>Have An Account? Log In Here</Link>
          </form>
          </div>
          <img src={image}
          className='signup-image'
          alt='signup-pic'
          />
    </div>
  );
};

export default SignUpForm;
