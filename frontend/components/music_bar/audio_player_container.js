import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchPlayingSong, fetchPreviousSong, fetchNextSong } from '../../actions/current_song_actions';
import {
  toggleSong
} from '../../actions/current_song_actions';

const msp = (state) => {
  return {
    currentSong: state.ui.currentSong.song,
    currentPosition: state.ui.currentSong.currentPosition,
    queue: state.ui.currentSong.queue,
    songs: Object.values(state.entities.songs),
  };
};

const mdp = (dispatch) => {
  return {
    toggleSong: () => dispatch(toggleSong()),
    fetchSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchPreviousSong: (id) => dispatch(fetchPreviousSong(id)),
    fetchNextSong: (id) => dispatch(fetchNextSong(id)),
  };
};




export default connect(msp, mdp)(AudioPlayer);
