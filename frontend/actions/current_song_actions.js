import * as SongAPI from "../util/song_api_util";
export const RECEIVE_PLAYING_SONG = "RECEIVE_PLAYING_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const PREV_PLAYING_SONG = "PREV_PLAYING_SONG";
export const NEXT_PLAYING_SONG = "NEXT_PLAYING_SONG";

export const receivePlayingSong = (song) => {
  return {
    type: RECEIVE_PLAYING_SONG,
    song,
  };
};

export const prevPlayingSong = (song) => {
  return {
    type: PREV_PLAYING_SONG,
    song,
  };
};

export const nextPlayingSong = (song) => {
  return {
    type: NEXT_PLAYING_SONG,
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

export const fetchPreviousSong = (id) => {
  return (dispatch) => {
    return SongAPI.fetchCompleteSong(id).then((song) => {
      dispatch(prevPlayingSong(song));
    });
  };
};

export const fetchNextSong = (id) => {
  return (dispatch) => {
    return SongAPI.fetchCompleteSong(id).then((song) => {
      dispatch(nextPlayingSong(song));
    });
  };
};


