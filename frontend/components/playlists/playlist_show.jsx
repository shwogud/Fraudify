import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShowSongInfo from './playlist_show_song_info';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    // this.props.fetchAllSongs();
  }

  playlistSongs() {
    
    let songs;
    if (!this.props.songs) {
      return null;
    }
    if (this.props.songs.length < 1) { return null; }
    
    if (this.props.playlist.song_ids) {
      let playlistSongs = [];

      for(let i = 0; i < this.props.playlist.song_ids.length; i++) {
        
        playlistSongs.push(this.props.songs[i]);
      }
      
      songs = (
        playlistSongs.map( song => {
          
          return (
            <div key={song.id}>
              <p>{song.title}</p>
              <p>{song.artist}</p>
              <p>{song.album}</p>
            </div>
          )
          
        })
      )
    }
    
    else {
      
      songs = null;
    }
   
    return songs;
  };
  
  render() {
    
    if (!this.props.playlist) {
      return null;
    }

    let playlist;

    
    if (this.props.playlist) {
      
      playlist = (
        <div className="playlist-show-page">
          <div className="playlist-show-left">
              <img className="playlist-show-images" src={window.brentURL1} />
            <ul className="playlist-show-info">
              <li className="playlist-show-title">{this.props.playlist.title}</li>
              <li className="playlist-show-username">{this.props.currentUser.username}</li>
              <button className="play-button">Play</button>
              <li className="playlist-show-length">{this.props.playlist.song_ids.length} Songs</li>
            </ul> 
          </div>
          <div className="playlist-show-songs">
            {this.playlistSongs()}
          </div>
        </div>
      )
      
    }
     
    else {
      
      playlist = null;
      // playlistsongs = null;
    }
    
    return (
      <div>
        {playlist}
        {/* {playlistsongs} */}
      </div>
    )
  }
}

export default PlaylistShow;