import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import {
  requestAllPlaylists, 
  requestPlaylist,
  createPlaylist,
  deletePlaylist
         } from './actions/playlist_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        id: window.currentUser.id
      }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.requestAllPlaylists = requestAllPlaylists;
  window.requestPlaylist = requestPlaylist;
  window.createPlaylist = createPlaylist;
  window.deletePlaylist = deletePlaylist;

 
  // TESTING END


  ReactDOM.render(<Root store={store} />, root);
});
