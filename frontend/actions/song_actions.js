import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveAllSongs = (songs) => {
  return {
    type: RECEIVE_ALL_SONGS,
    songs,
  }
}

export const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song,
  }
}

//Thunk actionssssss

export const requestAllSongs = () => dispatch => {
  return APIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
}

export const requestSong = (id) => dispatch => {
  return APIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
}