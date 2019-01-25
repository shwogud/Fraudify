import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receiveAllSongs = (songs) => {
  return {
    type: RECEIVE_ALL_SONGS,
    songs,
  }
}

const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song,
  }
}

const receivePlaylistSong = song => {
  return {
    type: RECEIVE_PLAYLIST_SONG,
    song
  };
};

const deletePlaylistSong = data => ({
  type: REMOVE_PLAYLIST_SONG,
  data
});



//Thunk actionssssss

export const requestAllSongs = () => dispatch => {
  return APIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
}

export const requestSong = (id) => dispatch => {
  return APIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
}


//this is updating the database, and request_playlist (from playlist actions)
//is fetching entire playlist from database.
//I should really just be adding a song using receivePlaylistSong
//Next Step: add RECEIVE_PLAYLIST_SONG to songs_reducer? 

export const addPlaylistSong = (playlistId, songId) => {
  return dispatch => {
    
    return APIUtil.addPlaylistSong(playlistId, songId).then(payload => {
           
      return dispatch(receivePlaylistSong(payload));
    });
  };
};

//The APIUtil might need to be fixed?
export const removePlaylistSong = (playlistId, songId) => {
  return dispatch => {
    
    return APIUtil.removePlaylistSong(playlistId, songId).then(payload => {
      debugger
      return dispatch(deletePlaylistSong(payload));
    });
  };
};