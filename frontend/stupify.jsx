//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
// import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util'
import {createStore} from 'redux';

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
  // let store = createStore();
//   }
  // window.dispatch = store.dispatch
  // window.getState = store.getState
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to stupify from entry</h1>, root);
  // ReactDOM.render(<Root store={store} />, root);
});
