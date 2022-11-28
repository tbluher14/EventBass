
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useHistory } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png'
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { searchEventThunk } from '../../store/queriedEvent';



const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    dispatchEvent(searchEventThunk(search))

    const url = `/search?name=${search}`
    setSearch("")
    history.push(url)
  }

  return (
    <nav className='nav-container'>
      <div className='nav-bar-container'>

        <div className='outter-nav-bar-container'>
      <div className="navbar-logo-container">
          <h2
          className='navbar-eventbass'
          onClick={() => history.push('/')} >
          eventBass
          </h2>
        </div>
        <div className='navbar-search-container'>
        <input
          className='navbar-search-box'
          type="text"
          placeholder="Search Event Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {if (e.key === "Enter") {handleSearch(e)}}}>
        </input>

        <button onClick={handleSearch} className='navbar-search-button'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="nav-bar-right">
         {sessionUser && (
         <div className="create-event-button" onClick={() => history.push('/create-event')}>
          Create An Event</div>
         )}
            {
              !sessionUser && (
                <div className='navbar-event-login-signup-container'>
            <div id='navbar-login-button' onClick={() => history.push(`/login`)}>Log In</div>
            <div id='navbar-signup-button' onClick={() => history.push(`/sign-up`)}>Sign Up</div>
          </div>
        )
      }

      {/* {
        sessionUser && (
          <div className='navbar-loggedin-container'>
            <div className='navbar-myevents' onClick={ () => history.push('/my-events')}>My Events</div>
            <div className='navbar-logged-out-button'>
              <LogoutButton/>
            </div>
         </div>
        )
      } */}

      {sessionUser && (
        <>
        <div className='navbar-loggedin-container'>
        <ProfileButton user={sessionUser} ></ProfileButton>
        </div>
        </>
      )}
      </div>
      </div>
    </div>
    </nav>
  );
}

export default NavBar;
