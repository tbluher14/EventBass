import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/NavBar/UsersList';
import User from './components/NavBar/User';
import { authenticate } from './store/session';
import AllEvents from './components/Events/AllEvents'
import CreateEvent from './components/Events/CreateEvent';
import EventDetails from './components/Events/EventDetails';
import EditEvent from './components/Events/EditEvent';
import MyEvents from './components/Events/MyEvents';
import SplashPage from './components/SplashPage/SplashPage';
import FourOFour from './components/404/Fof';
import UserLikes from './components/likes/UserLikes';
import QueriedEvent from './components/queriedEvent/QueriedEvent';
import About from './components/assets/about';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/' exact={true} >
          < SplashPage/>
        </Route>
        <Route path='/all-events'>
          <AllEvents />
        </Route>
        <ProtectedRoute exact={true} path='/create-event'>
          <CreateEvent />
        </ProtectedRoute>
        <Route exact={true} path='/events/:eventId'>
          <EventDetails />
        </Route>
        <ProtectedRoute  exact={true} path='/events/:eventId/edit'>
          <EditEvent/>
        </ProtectedRoute>
        <ProtectedRoute exact={true} path='/my-events'>
            <MyEvents />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path='/my-likes'>
          <UserLikes/>
        </ProtectedRoute>
        <Route path='/search'>
          <QueriedEvent />
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route>
          <FourOFour></FourOFour>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
