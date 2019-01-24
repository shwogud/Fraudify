import { combineReducers } from 'redux';
import UserReducer from './users_reducer';
import PlaylistReducer from './playlist_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from './albums_reducer';
import SongsReducer from './songs_reducer';


export default combineReducers({
  users: UserReducer,
  playlists: PlaylistReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer
});