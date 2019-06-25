//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import * as ApiUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
//   let store;  
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
  let store = configureStore();
//   }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  // window.login = ApiUtil.login;
  // window.signup = ApiUtil.signup;
  // window.logout = ApiUtil.logout;

  const root = document.getElementById('root');
  // ReactDOM.render(<h1>Welcome to stupify from entry</h1>, root);
  ReactDOM.render(<Root store={store} />, root);
});
