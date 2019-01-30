import { merge } from 'lodash';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions'
import { RECEIVE_ALL_SONGS } from '../actions/song_actions';

// import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/playlist_song_actions'

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
    
      return merge({}, action.playlists);

    case RECEIVE_PLAYLIST:
      
      return merge({}, state, {[action.data.playlist.id]: action.data.playlist});
      // return action.data.playlist
    case REMOVE_PLAYLIST:
    
      newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;


    //This is not where I add/remove songs from my playlist, right?
    // case RECEIVE_PLAYLIST_SONG:
    // case REMOVE_PLAYLIST_SONG:


    //I have NO idea what this is doing
    // case RECEIVE_ALL_SONGS:
    
    //   newState = merge({}, state, {[action.songs.id]: action.songs.songs});

    //   return newState;

    //How do I add song ids or titles to my playlist?
    // case RECEIVE_PLAYLIST_SONG:
    //   newState = merge({}, state, {[action.playlistSong.song_id]: action.playlistSong});
    //   return newState;

    default:
      return state;
  }
}

export default playlistReducer;
