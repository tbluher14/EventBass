import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
// import "./SignUpForm.css"
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

  const emailRegX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  useEffect(() => {
    let errors = [];

    if (first_name.length < 2 || first_name.length > 50) {
      errors.push("first name: must be between 2 and 50 characters.")
    }
    if (last_name.length < 2 || last_name.length > 50) {
      errors.push("last name: must be between 2 and 50 characters.")
    }
    if (username.length < 2 || username.length > 50) {
      errors.push("username: must be between 2 and 50 characters.")
    }
    if (!email.match(emailRegX)) {
      errors.push("email: must be valid email address ( example@ex.com ).")
    }
    if (email.length < 2 || email.length > 50) {
      errors.push("email: must be between 2 and 50 characters.")
    }
    if (password.length < 6 || password.length > 50) {
      errors.push('password: must be between 6 and 50 characters.');
    }
    if (password !== confirmPassword) {
      errors.push('password: passwords must match.');
    }

    setErrors(errors);
  }, [first_name, last_name, email, username, password, confirmPassword]);



  const onSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (errors.length > 0) return

    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name));
      if (data) {
        setErrors(Object.values(data));
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
    <div className='form-outer-container'>
      <form onSubmit={onSignUp}>
        <div className='form-header'>Sign Up and Host Your Next Event on eventBass</div>
        <div className='form-container'>
          <div className='errors_container'>
            {submitted && errors.map((error, ind) => (
              <div className="errorMessageContainer" key={ind}>
                <div className="errorMessage">{error}</div>
              </div>
            ))}
          </div>
          <div>
            <label className='form-field-labels'>First Name:</label>
            <input
              type='text'
              className="form-field"
              name='first_name'
              onChange={updateFirstname}
              value={first_name}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Last Name:</label>
            <input
              type='text'
              className="form-field"
              name='last_name'
              onChange={updateLastname}
              value={last_name}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Username:</label>
            <input
              type='text'
              className="form-field"
              name='username'
              onChange={updateUsername}
              value={username}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Email:</label>
            <input
              type='text'
              className="form-field"
              name='email'
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Password:</label>
            <input
              type='password'
              className="form-field"
              name='password'
              onChange={updatePassword}
              value={password}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Confirm Password:</label>
            <input
              type='password'
              className="form-field"
              name='confirm_password'
              onChange={updateConfirmPassword}
              value={confirmPassword}
              required
            ></input>
          </div>
          <button type='submit' className='form-button'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
