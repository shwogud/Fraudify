import { connect } from 'react-redux';
import AlbumSongs from './album_songs';
import { fetchPlayingSong } from '../../actions/current_song_actions';


const mdp = (dispatch) => {
  return {
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
  };
};

export default connect(null, mdp)(AlbumSongs);