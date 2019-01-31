import React from 'react';
import { receivePlayingSong, 
        toggleSong } from '../../actions/current_song_actions';



class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      length: 0,
      currentTime: 0
    };
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    if (this.props.currentSong.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
    this.timeInterval = setInterval(this.handleTimeUpdate, 400);
  }

  componentDidUpdate() {
    if (this.props.currentSong.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  handleTimeUpdate() {
    this.setState({
      length: this.audioRef.current.duration,
      currentTime: this.audioRef.current.currentTime,
    });
  }

  setTime(e) {
    this.audioRef.current.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
  }


  formatTime(secs) {
    let minutes = Math.floor(secs / 60);
    let finalMinutes = minutes < 60 ? minutes : 0;
    const seconds = Math.floor(secs) % 60;
    const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

    if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
    else finalMinutes = `${finalMinutes}`;

    return finalMinutes + finalSeconds;
  }

  render() {
    let { currentSong } = this.props;
    let { currentTime, length } = this.state;
    
    const togglePlay = currentSong.isPlaying ? (
      <i className="fal fa-pause toggle-button" onClick={() => this.props.toggleSong()}></i> ) : ( // pause button
      <i className="fal fa-play toggle-button" onClick={() => this.props.toggleSong()}></i>)          //play button
      

    return (
      <div className="music-barrrr">
        { togglePlay }
        <div className="music-time">
          <p className="music-bar-time-left">{this.formatTime(currentTime)}</p>

          <div className="progress-bar">
            <input 
              type="range" 
              className="music-progress-bar" 
              min="0" 
              max={length} 
              step="1"
              // value={100 * (currentTime / length)}
              onChange={this.setTime} />

            <div className="outer-music-bar">
              <div className="inner-music-bar" style={{ width: `${100 * (currentTime / length) || 1}%` }}></div>
              <div className="progress-ball" style={{ left: `${100 * (currentTime / length) || 1}%` }}></div>
            </div>
          </div>

          <p className="music-bar-time-right">{this.formatTime(length)}</p>

        </div>
        <audio src={this.props.source} ref={this.audioRef}></audio>
      </div>
    )
  }
}

export default AudioPlayer;