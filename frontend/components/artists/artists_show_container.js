import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { requestArtist} from '../../actions/artist_actions';
import { requestAllSongs } from '../../actions/song_actions';
import { requestAllAlbums } from '../../actions/album_actions';
import { fetchPlayingSong } from '../../actions/current_song_actions';

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
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
  };
};

export default connect(msp, mdp)(ArtistShow);