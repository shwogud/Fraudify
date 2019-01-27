import { connect } from 'react-redux';
import ArtistsIndex from './artists_index'
import { requestAllArtists, requestArtist } from '../../actions/artist_actions';


const msp = (state) => {
  return {
    artists: Object.values(state.entities.artists),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    fetchAllArtists: () => dispatch(requestAllArtists()),
    fetchArtist: (id) => dispatch(requestArtist(id)),
  }
}

export default connect(msp, mdp)(ArtistsIndex);