import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_containers';


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
        <h1>Welcome to the Main Content Page!</h1>

        <PlaylistIndexContainer />

        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default MainContent;