import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_containers';
import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';


class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }



  render() {
    return (
      <div className="main-content">

        <ul className='playlist-nav'>
          <li><Link to="/collection/playlists">PLAYLISTS</Link></li>
          <li><Link to="/collection/artists">ARTISTS</Link></li>
          <li><Link to="/collection/albums">ALBUMS</Link></li>
          <li><Link to="/collection/songs">SONGS</Link></li>
        </ul>


        {/* <h1>Welcome to the Main Content Page!</h1> */}

        {/* <PlaylistIndexContainer /> */}
        <AlbumsIndexContainer />
        {/* <ArtistsIndexContainer /> */}
        {/* <SongsIndexContainer /> */}

        <button onClick={this.handleLogout}>Log Out</button>
      </div>
      
    )
  }
}

export default MainContent;