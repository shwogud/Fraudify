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

import {
  requestAllSongs,
  requestSong,
  addPlaylistSong, 
  removePlaylistSong,

         } from './actions/song_actions';

import {
  deletePlaylistSong,
} from './actions/playlist_song_actions';

import {
  requestAllAlbums,
  requestAlbum
} from './actions/album_actions';

import {
  requestAllArtists,
  requestArtist 
} from './actions/artist_actions';
    


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

  //playlist actions
  window.requestAllPlaylists = requestAllPlaylists;
  window.requestPlaylist = requestPlaylist;
  window.createPlaylist = createPlaylist;
  window.deletePlaylist = deletePlaylist;

  //song actions
  window.requestAllSongs = requestAllSongs;
  window.requestSong = requestSong;
  window.addPlaylistSong = addPlaylistSong;
  window.removePlaylistSong = removePlaylistSong;

  //playlist_song actions
  window.deletePlaylistSong = deletePlaylistSong;

  //album actions
  window.requestAllAlbums = requestAllAlbums;
  window.requestAlbum = requestAlbum;

  //artist actions
  window.requestAllArtists = requestAllArtists;
  window.requestArtist = requestArtist;
 
  // TESTING END


  ReactDOM.render(<Root store={store} />, root);
});
