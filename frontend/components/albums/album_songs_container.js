import { connect } from 'react-redux';
import AlbumSongs from './album_songs';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { openModal } from '../../actions/modal_actions';



const mdp = (dispatch) => {
  
  return {
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    openModal: (modal, optionalProps) => dispatch(openModal(modal, optionalProps)),
  };
};

export default connect(null, mdp)(AlbumSongs);


// const mapDispatchToProps = (dispatch) => ({
//   openModal: (modal, optional_props) =>dispatch(openModal(modal, optionalProps))
// });