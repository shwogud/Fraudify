import { merge } from 'lodash';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAY_LIST } from './'
const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_PLAYLIST:
    //   return merge({}, state, { [action.song.id]: action.song })

    case RECEIVE_ALL_SONGS:
      return merge({}, action.songs);

    case RECEIVE_SONG:
      return merge({}, { [action.song.id]: action.song });

    default:
      return state;
  }
}


export default songsReducer;




