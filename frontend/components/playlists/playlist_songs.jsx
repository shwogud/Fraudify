import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false,

    }
    this.flag = true;
    this.klass = "";
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
  }

  handleMousedown(e) {
    var hamburger = document.querySelector(`#joeIsAwesome${this.props.song.id}`);
    var box = document.querySelector(`.delete-song-text${this.props.song.id}`);
    if (hamburger && hamburger.contains(e.target)) {
      this.flag = false;

    }
    if (!box.contains(e.target)) {
      this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
    }
    document.removeEventListener("mousedown", this.handleMousedown);
  }

  handleDropdown() {
    if (this.flag) {
      this.setState({ hamburgerClicked: !this.state.hamburgerClicked }, () => {
        document.addEventListener("mousedown", this.handleMousedown);
      });
    }
    this.flag = true;
  }


  render() {

    const { song } = this.props;
    this.klass = this.state.hamburgerClicked ? "active-dropdownn" : "";

    return (
      <div className="playlist-show-each-song">
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
              <Link
                to={`/collection/artists/${song.artist_id}`}
                className="playlist-show-song-album">
                <p className="playlist-show-song-album">{song.artist}</p>
              </Link>
              <p className="playlist-show-song-separator">·</p>
              <Link
                className="playlist-show-song-album"
                to={`/collection/albums/${song.album_id}`}
              >{song.album}</Link>
            </div>
          </div>

          <div className="hamburger-menu">
            <i
              onClick={this.handleDropdown}
              id={`joeIsAwesome${this.props.song.id}`}
              className="material-icons album-show-hamburger">view_headline</i>

            <div className={`drop-down-menuu ${this.klass}`}>
              <ul className="drop-down-actionss">
                <li
                  className={`delete-song-text${this.props.song.id}`}
                  onClick={() => this.props.deletePlaylistSong(this.props.playlistId, song.id)
                  }>
                  Delete Song from Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistSong;