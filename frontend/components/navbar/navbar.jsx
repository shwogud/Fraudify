
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.changeCurrentView(this.props.match.path);
  }

  changeCurrentView(newPath) {
    return (e) => {
      this.setState({ currentViewPlaylists: '', currentViewArtists: '', currentViewAlbums: '' });

      if (newPath === '/collection/playlists') {
        this.setState({ currentViewPlaylists: 'current-view' });
      } 
      else if (newPath === '/collection/artists') {
        this.setState({ currentViewArtists: 'current-view' });
      } 
      else if (newPath === '/collection/albums') {
        this.setState({ currentViewAlbums: 'current-view' });
      }
    }
  }


  render() {
    return (
      <div className="nav-all">
        <ul className='nav-links'>
          <div className='nav-link-links'>
            <li><NavLink 
              className="nav-link"
              onClick={this.changeCurrentView('playlists')}
              to="/collection/playlists">
              PLAYLISTS</NavLink></li>

            <li><NavLink 
              className="nav-link"
              onClick={this.changeCurrentView('artists')}
              to="/collection/artists">
              ARTISTS</NavLink></li>
            
            <li><NavLink 
              className="nav-link"
              onClick={this.changeCurrentView('albums')}
              to="/collection/albums">
              ALBUMS</NavLink></li>
          </div>
          <li><button onClick={this.props.openModal} className="new-playlist-button">NEW PLAYLIST</button></li>
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