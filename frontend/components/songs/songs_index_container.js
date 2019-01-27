import { connect } from 'react-redux';
import SongsIndex from './songs_index'
import { requestAllSongs, requestSong } from '../../actions/song_actions';
import { requestAllArtists } from '../../actions/artist_actions';
import { requestAlbum } from '../../actions/album_actions';


const msp = (state) => {
  return {
    songs: Object.values(state.entities.songs),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(requestAllSongs()),
    fetchSong: (id) => dispatch(requestSong(id)),
    fetchArtists: () => dispatch(requestAllArtists()),
    fetchAlbum: (id) => dispatch(requestAlbum(id))

  }
}

export default connect(msp, mdp)(SongsIndex);