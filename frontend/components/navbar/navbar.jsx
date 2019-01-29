
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    
    return (
      
      <div className="nav-all">
        <ul className='nav-links'>
          <div className='nav-link-links'>
            <li><Link className="nav-playlist" to="/collection/playlists">PLAYLISTS</Link></li>
            <li><Link className="nav-artist" to="/collection/artists">ARTISTS</Link></li>
            <li><Link className="nav-album" to="/collection/albums">ALBUMS</Link></li>
          </div>
          <li><button onClick={this.props.openModal} className="new-playlist-button">NEW PLAYLIST</button></li>
          {/* <li><Link to="/collection/songs">SONGS</Link></li> */}
        </ul>

        <div>
          {/* <button onClick={this.props.openModal} className="new-playlist-button">NEW PLAYLIST</button> */}
          {/* <h1>{this.props.currentUser.username}</h1> */}
          {/* <button onClick={this.props.logout}>Log Out</button> */}
        </div>
      </div>
    );
  }
}

export default Navbar;