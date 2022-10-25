
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useHistory } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png'
import { useSelector } from 'react-redux';



const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()


  return (
    <nav className='nav-container'>
      <div className='nav-bar-container'>

        <div className='outter-nav-bar-container'>
      <div className="navbar-logo-container">
          <img
          className='navbar-logo'
          src={logo} alt="logo"
          onClick={() => history.push('/')} />
          <h2
          className='navbar-eventbass'
          onClick={() => history.push('/')} >
          eventBass
          </h2>
        </div>

      <div className="nav-bar-right">
          <button className="create-event-button" onClick={() => history.push('/create-event')}>
          Create An Event</button>
            {
              !sessionUser && (
                <div className='navbar-event-login-signup-container'>
            <div id='navbar-login-button' onClick={() => history.push(`/login`)}>Log In</div>
            <div id='navbar-signup-button' onClick={() => history.push(`/sign-up`)}>Sign Up</div>
          </div>
        )
      }

      {
        sessionUser && (
          <div className='navbar-loggedin-container'>
            <div className='navbar-myevents' onClick={ () => history.push('/my-events')}> My Events </div>
            <div className='navbar-logged-out-button'>
              <LogoutButton/>
            </div>
         </div>
        )
      }
      </div>
      </div>
    </div>
    </nav>
  );
}

export default NavBar;
