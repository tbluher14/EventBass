
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const showUsersEvents = (e) => {history.push('/my-events')};
//   const showUsersReviews = (e) => {
//     e.preventDefault()
//     history.push('/')};

  return (
    <>
    <div>
      <button className="loggedIn_menu" onClick={openMenu}>
        <i className="fas fa-bars nav_bars_icon"></i>
        <i className="fas fa-user-circle user_icon"></i>
      </button>
      <div className="menu_modal">
      {showMenu && (
        <div className="menu_container">
        <div className="menu">
          {/* <button onClick={showUsersReviews} className="userReviews_button">My Reviews</button> */}
          <button onClick={showUsersEvents} className="my_events_button">Manage My Events</button>
          <button onClick={logout} className="profile_logout_button">
            Log Out
          </button>
          </div>
        </div>
      )}
      </div>
    </div>
  </>
  );
}

export default ProfileButton;
