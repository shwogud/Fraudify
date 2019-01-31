import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player';

class MusicBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentSong;
  }

  render() {
    let { currentSong } = this.props;
    if (!currentSong) return null;


    return (
      <footer className="music-bar">
        <div className="music-bar-content">
          < AudioPlayer source={currentSong.mp3} />
          <div className="music-bar-song-info">
            <p>Song Title</p>
            <div className="music-bar-text">
              <p>Album Title (Link?)</p>
              <p>Artist Name (Link?)</p>
            </div>
          </div>
          <audio src={currentSong.mp3} preloaded="metadata" id="audio" type="audio/mp3"></audio>
        </div>
      </footer>
    )
  }
}

export default MusicBar;