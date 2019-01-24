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

export const receivePlaylist = (playlist) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist,
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

export const createPlaylist = (playlist) => dispatch => {
  return APIUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = (id) => dispatch => {
  return APIUtil.destroyPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
}