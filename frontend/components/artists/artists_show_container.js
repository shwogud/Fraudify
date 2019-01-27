import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { requestArtist} from '../../actions/artist_actions';
import { requestAllSongs } from '../../actions/song_actions';
import { requestAllAlbums } from '../../actions/album_actions';

const msp = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(requestArtist(id)),
    fetchAllSongs: () => dispatch(requestAllSongs()),
    fetchAllAlbums: () => dispatch(requestAllAlbums()),
  };
};

export default connect(msp, mdp)(ArtistShow);