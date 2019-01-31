
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentViewPlaylists: '',
      currentViewArtists: '',
      currentViewAlbums: ''
    }
  }

  changeCurrentView(newView) {
    return (e) => {
      this.setState({ currentViewPlaylists: '', currentViewArtists: '', currentViewAlbums: '' });

      if (newView === 'playlists') {
        this.setState({ currentViewPlaylists: 'current-view' });
      } 
      else if (newView === 'artists') {
        this.setState({ currentViewArtists: 'current-view' });
      } 
      else if (newView === 'albums') {
        this.setState({ currentViewAlbums: 'current-view' });
      }
    }
  }


  render() {
    return (
      <div className="nav-all">
        <ul className='nav-links'>
          <div className='nav-link-links'>
            <li><Link 
              className={`nav-playlist ${this.state.currentViewPlaylists}`}
              onClick={this.changeCurrentView('playlists')}
              to="/collection/playlists">
              PLAYLISTS</Link></li>

            <li><Link 
              className={`nav-artist ${this.state.currentViewArtists}`}
              onClick={this.changeCurrentView('artists')}
              to="/collection/artists">
              ARTISTS</Link></li>
            
            <li><Link 
              className={`nav-album ${this.state.currentViewAlbums}`}
              onClick={this.changeCurrentView('albums')}
              to="/collection/albums">
              ALBUMS</Link></li>
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