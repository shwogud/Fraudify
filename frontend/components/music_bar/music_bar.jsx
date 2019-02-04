import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player_container';

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
          
          <div className="music-bar-song-info">
            <p className="music-bar-song-title">{currentSong.title}</p>
          
          </div >
          < AudioPlayer source={currentSong.mp3} />
          <audio src={currentSong.mp3} preloaded="metadata" id="audio" type="audio/mp3"></audio>
        </div>
      </footer>
    )
  }
}

export default MusicBar;