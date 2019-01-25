import React from 'react';
import { Link } from 'react-router-dom';
// import PlaylistShowContainer from './playlist_show_container';
import { ProtectedRoute } from '../../util/route_util';

class PlaylistIndex extends React.Component {
  constructor(props) {
    
    super(props);
    this.currentUser = this.props.currentUser;
    // this.state = this.props.currentUser;
    
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    let playlists;
    if (this.props.playlists) {
      playlists = this.props.playlists.map( playlist => {
        if (playlist.user_id === this.currentUser.id) {
          
          return (
            <li key={playlist.id}>
              <Link to={`/collection/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          )
        }
      });
    }
    else {
      playlists = null;
    }
    
    return (
      <div>
        <ul>
          {playlists}
        </ul>
      </div>
    );
  }
}


export default PlaylistIndex;

