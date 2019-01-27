import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { requestAlbum } from '../../actions/album_actions';
import { requestAllSongs } from '../../actions/song_actions';

const msp = (state, ownProps) => {
  
  return {
 
    album: state.entities.albums[ownProps.match.params.albumId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(requestAlbum(id)),
    fetchAllSongs: () => dispatch(requestAllSongs())
  };
};

export default connect(msp, mdp)(AlbumShow);