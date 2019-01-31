import * as SongAPI from "../util/song_api_util";
export const RECEIVE_PLAYING_SONG = "RECEIVE_PLAYING_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";

export const receivePlayingSong = (song) => {
  return {
    type: RECEIVE_PLAYING_SONG,
    song,
  };
};

export const toggleSong = () => {
  return {
    type: TOGGLE_PLAY,
  };
};

export const fetchPlayingSong = (id) => {
  
  return (dispatch) => {
    return SongAPI.fetchCompleteSong(id).then((song) => {
      dispatch(receivePlayingSong(song));
    });
  };
};


