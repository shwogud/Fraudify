import { connect } from 'react-redux';
import ArtistSongs from './artist_songs';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { openModal } from '../../actions/modal_actions';



const mdp = (dispatch) => {

  return {
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    openModal: (modal, optionalProps) => dispatch(openModal(modal, optionalProps)),
  };
};

export default connect(null, mdp)(ArtistSongs);