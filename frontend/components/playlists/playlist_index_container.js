import { connect } from 'react-redux';
import { createPlaylist, requestAllPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';


const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.playlists),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(requestAllPlaylists()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);