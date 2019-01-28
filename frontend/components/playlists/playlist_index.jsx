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

    if (!this.props.playlists[0]) {
       
      return null;
    }
    
    if (this.props.playlists) {
       
      playlists = this.props.playlists.map( playlist => {
        if (playlist.user_id === this.currentUser.id) {
          
          return (
            <li className="playlist-index-box" key={playlist.id}>
              <img className="playlist-index-images" src={window.brentURL1} />
              <Link to={`/collection/playlists/${playlist.id}`}><p className="playlist-title">{playlist.title}</p></Link>
              <p className="playlist-username">{playlist.username}</p>
              
            </li>
          )
        }
      });
    }
    else {
       
      playlists = null;
    }
     
    return (
      <div className="playlist-page">
        <ul className="all-playlist-boxes">
          {playlists}
        </ul>
      </div>
    );
  }
}


export default PlaylistIndex;

