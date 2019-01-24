import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAllAlbums = (albums) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums,
  }
}

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  }
}

//Thunk actionssssss

export const requestAllAlbums = () => dispatch => {
  return APIUtil.fetchAlbums().then(albums => dispatch(receiveAllAlbums(albums)))
}

export const requestAlbum = (id) => dispatch => {
  return APIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
}