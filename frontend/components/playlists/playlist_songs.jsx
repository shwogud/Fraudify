import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPlaylist } from '../../util/playlist_api_util';

class PlaylistSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  }


  render() {
    debugger
    const { song } = this.props;
    const klass = this.state.hamburgerClicked ? "active-dropdownn" : "";
    debugger
    return (
      <div className="playlist-show-each-song" key={song.id}>
        <div>
          <p className="playlist-music-note">♪</p>
        </div>
        <div className="hamburger-icon-flex">
          <div>
            <p
              onClick={() => {
                this.props.fetchPlayingSong(song.id)
              }}
              className="playlist-show-song-title">{song.title}</p>
            <div className="playlist-show-song-artist-album">
              <p className="playlist-show-song-artist">{song.artist}</p>
              <p className="playlist-show-song-separator">·</p>
              <Link
                className="playlist-show-song-album"
                to={`/collection/albums/${song.album_id}`}
              >{song.album}</Link>
              {/* <p className="playlist-show-song-album">{song.album}</p> */}
            </div>
          </div>
          <i
            onClick={this.handleDropdown}
            className="material-icons album-show-hamburger">view_headline</i>
          
          <div className={`drop-down-menuu ${klass}`}>
            <ul className="drop-down-actionss">
              <li
                onClick={() => this.props.deletePlaylistSong(this.props.playlistId, song.id)
                  // .then(
                  // fetchPlaylist(this.props.playlistId))
                }>
                Delete Song from Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }


}

export default PlaylistSong;


// handleSubmit(e) {
//   e.preventDefault();
//   const playlist = Object.assign({}, this.playlist);
//   this.props.deletePlaylist(playlist)
//     .then(() => this.props.history.push("/collection/playlists"));
// }