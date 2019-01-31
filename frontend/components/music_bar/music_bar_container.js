import MusicBar from './music_bar';
import { connect } from 'react-redux';
import { receivePlayingSong, toggleSong } from '../../actions/current_song_actions';

const msp = (state) => {
  return {
    currentSong: state.ui.currentSong,
  };
};

const mdp = (dispatch) => {
  return {
    receivePlayingSong: (id) => dispatch(receivePlayingSong(id)),
    toggleSong: () => dispatch(toggleSong()),
  };
};

export default connect(msp, mdp)(MusicBar);