
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import {getAllUsersThunk} from '../../store/users'
import {useHistory} from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

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

  useEffect(() => {
    dispatch(getAllUsersThunk())
  })

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const showUsersEvents = (e) => {history.push('/my-events')};
  const showUserLikes = (e) => {history.push('/my-likes')};
//   const showUsersReviews = (e) => {
//     e.preventDefault()
//     history.push('/')};

  return (
    <>
    <div>
      <div className="loggedIn_menu" onClick={openMenu}>
        <div className="profile-icon">
        <i className="fas fa-user-circle user_icon" id="profile-icon-id"> </i>
        </div>
        {sessionUser.email}
        <div className="down-arrow">
        <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="menu_modal">
      {showMenu && (
        <div className="menu_container">
        <div className="menu">
          {/* <button onClick={showUsersReviews} className="userReviews_button">My Reviews</button> */}
          <button onClick={() => history.push('/all-events')} className='browse-events'>Browse Events</button>
          <button onClick={showUsersEvents} className="my_events_button">Manage My Events</button>
          <button onClick={showUserLikes} className="my_likes_button">My Liked Events</button>
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
