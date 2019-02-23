import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_containers';
import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';
import NavBarContainer from '../navbar/navbar_container';
import SideBarContainer from '../sidebar/sidebar_container'

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
        <div className="containers">
          <div className="sidebar-container">
            <SideBarContainer />
          </div>
          <div>
            <NavBarContainer />

            <PlaylistIndexContainer />
            <ArtistsIndexContainer />
            <AlbumsIndexContainer />
            
          </div>

        </div>
      </div>
      
    )
  }
}

export default MainContent;