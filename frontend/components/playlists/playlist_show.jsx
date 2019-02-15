import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShowSongInfo from './playlist_show_song_info';
// import { deletePlaylist } from '../../actions/playlist_actions';
import PlaylistSongContainer from './playlist_song_container';
import NavBarContainer from '../../components/navbar/navbar_container';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.playlist = this.props.playlist;
    this.state = {
      hamburgerClicked: false,
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDropdown = this.handleDropdown.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    // this.props.fetchAllSongs();
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.playlist);
    this.props.deletePlaylist(playlist)
      .then(() => this.props.history.push("/collection/playlists"));
  }

  // handleDropdown() {
  //   this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  // }

  playlistSongs() {
    // if (!this.props.songs) {
    //   return (
    //     <div className="album-backgrounddd"></div>
    //   )
    // }
    if (this.props.songs.length < 1 || !this.props.playlist.song_ids) { return null; }
    
    return this.props.songs.map( song => {
      return <PlaylistSongContainer 
                key={song.id} 
                song={song} 
                playlistId={this.props.playlist.id} />
    })
  };
  
  render() {
    
    if (this.state.loading) {

      <div className="loader"></div>
    }

    if (!this.props.playlist) return null;

    if (!this.props.playlist.photo) {
      this.props.playlist.photo = window.brentURL2;
    }
    
    return (
      <div>
        <NavBarContainer />
        <div className="playlist-show-page">
          <div className="playlist-show-left">
            <img className="playlist-show-images" src={this.props.playlist.photo} />
            <ul className="playlist-show-info">
              <li className="playlist-show-title">{this.props.playlist.title}</li>
              <li className="playlist-show-username">{this.props.currentUser.username}</li>
              <button 
                onClick={() => {
                  this.props.fetchPlayingSong(this.props.songs[0].id)
                }}
                className="play-button">Play</button>
              <li className="playlist-show-length">{this.props.songs.length} Songs</li>

              <form onSubmit={this.handleSubmit}>
                < button
                  className="delete-button"
                  onClick={(e) => this.props.deletePlaylist(this.props.playlist.id)} >
                  Delete Playlist ?</button >
              </form>
            </ul>
          </div>
          <div className="playlist-show-songs">
            {this.playlistSongs()}
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistShow;