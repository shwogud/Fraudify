import { merge } from 'lodash';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions'
import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/playlist_song_actions'

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.playlists);

    case RECEIVE_PLAYLIST:
      return merge({}, {[action.playlist.id]: action.playlist});

    case REMOVE_PLAYLIST:
      newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;

    // case RECEIVE_PLAYLIST_SONG:
    //   newState = merge({}, state);
    //   let id = action.playlistSong.id;
    //   let song = action.playlistSong;
    //   newState[id] = song;
    //   return newState;

    // case REMOVE_PLAYLIST_SONG:
    //   newState = merge({}, state);
    //   let songs = 


    default:
      return state;
  }
}

export default playlistReducer;
