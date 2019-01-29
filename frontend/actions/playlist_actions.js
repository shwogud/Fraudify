import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS'; 
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'; 
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST'; 


export const receiveAllPlaylists = (playlists) => {
  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists,
  }
}

//pulling the entire playlist
export const receivePlaylist = (data) => {
  
  return {
    type: RECEIVE_PLAYLIST,
    data,
  }
}

export const removePlaylist = (playlist) => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId: playlist.id,
  }
}


//Thunk actionssssss

export const requestAllPlaylists = () => dispatch => {
  return APIUtil.fetchPlaylists().then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const requestPlaylist = (id) => dispatch => {
  return APIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const createPlaylist = (playlist, user_id) => dispatch => {
   
  return APIUtil.createPlaylist(playlist, user_id).then(playlist => dispatch(receivePlaylist(playlist)),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

// export const createPlaylist = (playlist) => {
//   return dispatch => {
//     return APIUtil.createPlaylist(playlist).then(playlist => {
//       return dispatch(receivePlaylist(playlist));
//     }
//   }
// }

export const deletePlaylist = (id) => dispatch => {
  
  return APIUtil.destroyPlaylist(id).then(playlist => dispatch(removePlaylist(playlist)));
}

