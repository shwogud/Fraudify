
import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    
    return (
      
      <div className="nav-all">
        <ul className='nav-links'>
          <li><Link className="nav-playlist" to="/collection/playlists">PLAYLISTS</Link></li>
          <li><Link className="nav-artist" to="/collection/artists">ARTISTS</Link></li>
          <li><Link className="nav-album" to="/collection/albums">ALBUMS</Link></li>
          {/* <li><Link to="/collection/songs">SONGS</Link></li> */}
        </ul>

        <div>
          {/* <h1>{this.props.currentUser.username}</h1> */}
          {/* <button onClick={this.props.logout}>Log Out</button> */}
        </div>
      </div>
    );
  }
}

export default Navbar;