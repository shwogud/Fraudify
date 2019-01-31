
import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentSongReducer from './current_song_reducer';

export default combineReducers({
  modal,
  currentSong: currentSongReducer,
});