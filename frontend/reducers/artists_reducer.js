import { merge } from 'lodash';
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_ALL_ALBUMS } from '../actions/album_actions';
const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, action.artists);

    case RECEIVE_ARTIST:
      return merge({}, {[action.artist.id]: action.artist});
    
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, action.artists);
    

    default:
      return state;
  }
}


export default artistsReducer;








