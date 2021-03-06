import { merge } from 'lodash';
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    
      return action.albums;

    case RECEIVE_ALBUM:
      return merge({}, { [action.album.id]: action.album });

    case RECEIVE_ARTIST:
      return merge({}, state, action.artist.album_ids);

    default:
      return state;
  }
}


export default albumsReducer;






