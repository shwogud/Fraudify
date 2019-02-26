import { merge } from 'lodash';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG,
        RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG 
        } from '../actions/song_actions';


import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_ARTISTS } from '../actions/song_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const songsReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case RECEIVE_SONG:
      return merge({}, { [action.song.id]: action.song });

    case RECEIVE_PLAYLIST:
      return merge({}, action.data.songs);
    
    case RECEIVE_ALBUM:
      const newObj = {};
      for(let i = 0; i < action.album.songs.length; i++) {
        newObj[action.album.songs[i].id] = action.album.songs[i];
      }
      return merge({}, newObj);
    
    case RECEIVE_ARTIST:
      let songs = {};
      action.artist.songs.forEach( song => {
        songs[song.id] = song
      })
      return merge({}, state, songs);
      
    case RECEIVE_PLAYLIST_SONG:
      
      newState = merge({}, state, action.song);
      return newState;

    case REMOVE_PLAYLIST_SONG:
      delete newState[action.songId];
      return newState;

    default:
      return state;
  }
}


export default songsReducer;




