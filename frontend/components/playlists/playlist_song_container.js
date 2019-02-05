import { connect } from 'react-redux';
import PlaylistSong from './playlist_songs';
import { removePlaylistSong } from '../../actions/song_actions';
import { fetchPlayingSong } from '../../actions/current_song_actions';
import { requestPlaylist } from '../../actions/playlist_actions'
// import { fetchPlayingSong } from '../../actions/current_song_actions';
// import { openModal } from '../../actions/modal_actions';


const mdp = (dispatch) => {
 
  return {
    deletePlaylistSong: (playlistId, songId) => dispatch(removePlaylistSong(playlistId, songId)),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchPlaylist: (id) => dispatch(requestPlaylist(id)),
  }
}

export default connect(null, mdp)(PlaylistSong);