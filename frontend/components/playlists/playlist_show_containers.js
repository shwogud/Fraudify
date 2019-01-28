
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { requestPlaylist, createPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { requestAllSongs } from '../../actions/song_actions';


const msp = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    currentUser: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs)
  }
}

const mdp = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(requestPlaylist(id)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    fetchAllSongs: () => dispatch(requestAllSongs())
  };
};

export default connect(msp, mdp)(PlaylistShow);