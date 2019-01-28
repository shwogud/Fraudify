import { merge } from 'lodash';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG,
        RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG 
        } from '../actions/song_actions';

// import { REMOVE_PLAYLIST_SONG } from '../actions/playlist_song_actions'

import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_ARTISTS } from '../actions/song_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {

    // case RECEIVE_ALL_SONGS:
    //   return merge({}, action.songs);

    case RECEIVE_SONG:
      return merge({}, { [action.song.id]: action.song });

    //When I go to playlist page, only puts those playlist songs up
    case RECEIVE_PLAYLIST:
    
      return merge({}, action.data.songs);
    
    case RECEIVE_ALBUM:
      return merge({}, action.album.song_ids);
    
    case RECEIVE_ARTIST:
      return merge({}, state, action.artist.songs);
    
    // case RECEIVE_ALL_ARTISTS:
    // debugger
    //   return merge({}, state, action.artists.song_ids);


      
    case RECEIVE_PLAYLIST_SONG:
    
      newState = merge({}, state, action.song);
      return newState;

    case REMOVE_PLAYLIST_SONG:
    //destroyed the song already in my backend
      return merge({}, action.data.songs);

    default:
      return state;
  }
}


export default songsReducer;




