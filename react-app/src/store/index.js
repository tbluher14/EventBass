import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import commentReducer from './comment';
import eventReducer from './event';
import session from './session'
import usersReducer from './users';
import likesReducer from './like';
import queryEventReducer from './queriedEvent';

const rootReducer = combineReducers({
  session,
  events: eventReducer,
  comments: commentReducer,
  users: usersReducer,
  likes: likesReducer,
  queryEvent: queryEventReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
