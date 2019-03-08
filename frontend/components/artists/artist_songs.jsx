import React from 'react';

class ArtistSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    }
    this.flag = true;
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
  }

  handleMousedown(e) {

    var hamburger = document.querySelector(`#hamburger-icon${this.props.song.id}`);
    var box = document.querySelector(`.add-song-text${this.props.song.id}`);
    
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

    const { song } = this.props
    const klass = this.state.hamburgerClicked ? "active-dropdown" : "";
    return (
      <ul key={song.id} className="artist-middle">
        <div className="artist-note-pic-title">
          <li className="artist-music-note">♪</li>
          <li><img
            onClick={() => {
              this.props.fetchPlayingSong(song.id)
            }}
            src={this.props.artist.photo}
            className="artist-middle-pic" /></li>

          <li
            onClick={() => {
              this.props.fetchPlayingSong(song.id)
            }}
            className="song-title">{song.title}</li>
        </div>

        <div style={{position:"relative"}}>
          <i
            onClick={this.handleDropdown}
            id={`hamburger-icon${song.id}`}
            className="material-icons album-show-hamburger artist-ham-pad">view_headline</i>


          <div className={`drop-down-menu ${klass} artist-box-position`}>
            <ul className="drop-down-actions">
              <li
                className={`add-song-text${this.props.song.id}`}
                onClick={
                () => {
                  this.props.openModal("addplaylistsong",
                    {
                      chosenSong: song
                    });
                  this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
                }}
              >Add to Playlist</li>


            </ul>
          </div>
        
        </div>
      </ul>
    )
  }

}

export default ArtistSong;