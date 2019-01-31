import {
  RECEIVE_PLAYING_SONG,
  TOGGLE_PLAY,
  // NEXT_SONG
} from '../actions/current_song_actions'
import { REMOVE_PLAYLIST_SONG } from '../actions/song_actions';
import { merge } from 'lodash';

export default (state = null, action) => {
  Object.freeze(null);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYING_SONG:
      action.song.isPlaying = true;
      return action.song;

    // case NEXT_SONG:
    //   action.song.isPlaying = state.isPlaying;
    //   return action.song;

    case TOGGLE_PLAY:
      if (newState.isPlaying) newState.isPlaying = false;
      else newState.isPlaying = true;
      return newState;

    case REMOVE_PLAYLIST_SONG:
      if (action.songId === newState.id) return null;
      return newState;
      
    default:
      return state;
  }
};