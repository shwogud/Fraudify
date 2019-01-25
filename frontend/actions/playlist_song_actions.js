import * as APIUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSong = (playlistSong) => {
  return {
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong,
  };
};

//passing in an ID
export const removePlaylistSong = (id) => {
  return {
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId: id,
  };
};

//Thunk actionssssss

export const requestPlaylistSong = (id) => dispatch => {
  return APIUtil.fetchPlaylistSong(id).then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
}

export const createPlaylistSong = (playlistSong) => dispatch => {
  return APIUtil.createPlaylistSong(playlistSong).then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
}

// export const deletePlaylistSong = (id) => dispatch => {
//   return APIUtil.destroyPlaylistSong(id).then( () => dispatch(removePlaylistSong(id)))
// }

export const deletePlaylistSong = playlistSong => {
  return dispatch => APIUtil.destroyPlaylistSong(playlistSong).then(
    res => dispatch(removePlaylistSong(res))
  );
};