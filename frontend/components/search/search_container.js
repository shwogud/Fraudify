
import { connect } from 'react-redux';
import Search from './search';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { requestAllArtists } from '../../actions/artist_actions';
import { requestAllAlbums } from '../../actions/album_actions';
import { requestAllSongs } from '../../actions/song_actions';


const msp = state => {
  return {
    playlists: Object.values(state.entities.playlists),
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),

  }
}
const mdp = dispatch => {
  return {
    fetchPlaylists: () => dispatch(requestAllPlaylists()),
    fetchArtists: () => dispatch(requestAllArtists()),
    fetchAlbums: () => dispatch(requestAllAlbums()),

  }
}

export default connect(msp, mdp)(Search);