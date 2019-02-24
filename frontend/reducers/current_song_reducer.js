import {
  RECEIVE_PLAYING_SONG,
  TOGGLE_PLAY,
  PREV_PLAYING_SONG,
  NEXT_PLAYING_SONG,
} from '../actions/current_song_actions'
import { REMOVE_PLAYLIST_SONG } from '../actions/song_actions';
import { merge } from 'lodash';

const defaultState = {
  song: null,
  queue: [],
  currentPosition: null,
}

export default (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYING_SONG:
      action.song.isPlaying = true;
      newState.song = action.song;
      newState.queue.push(action.song.id);
      newState.currentPosition = newState.queue.length - 1;
      return newState;

    case PREV_PLAYING_SONG:
      action.song.isPlaying = newState.song.isPlaying;
      newState.song = action.song;
      newState.currentPosition = newState.currentPosition - 1;
      return newState;

    case NEXT_PLAYING_SONG:
      action.song.isPlaying = newState.song.isPlaying;
      newState.song = action.song;
      newState.currentPosition = newState.currentPosition+1;
      return newState;

    case TOGGLE_PLAY:
      if (newState.song.isPlaying) newState.song.isPlaying = false;
      else newState.song.isPlaying = true;
      return newState;

    case REMOVE_PLAYLIST_SONG:
      if (action.songId === newState.song.id) return null;
      return newState;
      
    default:
      return newState;
  }
};