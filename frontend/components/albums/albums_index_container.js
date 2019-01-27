import { connect } from 'react-redux';
import AlbumsIndex from './albums_index'
import { requestAllAlbums, requestAlbum } from '../../actions/album_actions';


const msp = (state) => {
  return {
    albums: Object.values(state.entities.albums),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    fetchAllAlbums: () => dispatch(requestAllAlbums()),
    fetchAlbum: (id) => dispatch(requestAlbum(id)),
  }
}

export default connect(msp, mdp)(AlbumsIndex);