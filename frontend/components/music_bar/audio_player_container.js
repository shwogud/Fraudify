import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import {
  receivePlayingSong,
  toggleSong
} from '../../actions/current_song_actions';

const msp = (state) => {
  return {
    currentSong: state.ui.currentSong,
  };
};

const mdp = (dispatch) => {
  return {
    //toggleSong() --> TOGGLE_PLAY --> toggles state in reducer
    toggleSong: () => dispatch(toggleSong()),
  };
};




export default connect(msp, mdp)(AudioPlayer);
