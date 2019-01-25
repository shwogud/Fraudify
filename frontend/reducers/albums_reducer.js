import { merge } from 'lodash';
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albums);

    case RECEIVE_ALBUM:
      return merge({}, { [action.album.id]: action.album });

    case RECEIVE_ARTIST:
      return merge({}, state, action.artist.album_ids);

    default:
      return state;
  }
}


export default albumsReducer;






