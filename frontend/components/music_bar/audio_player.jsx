import React from 'react';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      currentTime: 0
    };
    this.handleMusicBarUpdate = this.handleMusicBarUpdate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }

  componentDidMount() {
    if (this.props.currentSong.isPlaying) {
      this.audioRef.current.play();
    }
    else {
      this.audioRef.current.pause();
    }

    this.timeInterval = setInterval(this.handleMusicBarUpdate, 400);
  }

  componentDidUpdate() {
    if (this.props.currentSong.isPlaying) {
      this.audioRef.current.play();
    } 
    else {
      this.audioRef.current.pause();
    } 
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  handleMusicBarUpdate() {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
    });
  }

  setTime(e) {
    this.audioRef.current.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
  }


  formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let finalMinutes = minutes < 60 ? minutes : 0;
    const seconds = Math.floor(sec) % 60;
    const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;
    
    if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
    else finalMinutes = `${finalMinutes}`;

    return finalMinutes + finalSeconds;
  }

  nextSong() {
    const { songs, currentSong, fetchSong, currentPosition, queue, fetchNextSong } = this.props;
    if (currentPosition === queue.length - 1) {
      for(let i = 0; i < songs.length; i++) {
        if (songs[i].id === currentSong.id) {
          const NextSongId = ((i) === songs.length - 1) ? songs[0].id : songs[i + 1].id
          fetchSong(NextSongId);
          break;
        }
      }
    } else {
      fetchNextSong(queue[currentPosition + 1])
    }
  }

  prevSong() {
    const { queue, currentPosition, fetchPreviousSong } = this.props;
    if (!currentPosition || this.audioRef.current.currentTime > 1){
      this.audioRef.current.currentTime = 0;
      this.setState({currentTime: 0});
    }
    else {
      fetchPreviousSong(queue[currentPosition-1]);
    }
  }


  render() {
    const { currentSong } = this.props;
    const { length } = currentSong;
    let { currentTime} = this.state;
    
    const togglePlay = currentSong.isPlaying ? (
      <i className="far fa-pause-circle toggle-button" onClick={this.props.toggleSong}></i> ) : ( // pause button
        <i className="far fa-play-circle toggle-button" onClick={this.props.toggleSong}></i>)          //play button
      
    return (
      <div className="music-barrrr">
        <div className="music-bar-toggle-buttons">
          <i className="fas fa-step-backward toggle-button" onClick={this.prevSong}></i>
          { togglePlay }
          <i className="fas fa-step-forward toggle-button" onClick={this.nextSong}></i>
        </div>
        <div className="music-time">
          <p className="music-bar-time-left">{this.formatTime(currentTime)}</p>

          <div className="progress-bar">
            <input 
              type="range" 
              className="music-progress-bar"    
              min="0" 
              max={length} 
              step="1"
              onChange={this.setTime} />

            <div className="outer-music-bar">
              <div className="inner-music-bar" style={{ width: `${100 * (currentTime / length) || 1}%` }}></div>
              <div className="progress-ball" style={{ left: `${100 * (currentTime / length) || 1}%` }}></div>
            </div>
          </div>

          <p className="music-bar-time-right">{this.formatTime(length)}</p>

        </div>
        <audio src={this.props.source} ref={this.audioRef}
          onEnded={this.nextSong}>
        </audio>
      </div>
    )
  }
}

export default AudioPlayer;