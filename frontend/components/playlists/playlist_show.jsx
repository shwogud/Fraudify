import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShowSongInfo from './playlist_show_song_info';
// import { deletePlaylist } from '../../actions/playlist_actions';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    // this.props.fetchAllSongs();
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.deletePlaylist(playlist)
      .then(() => this.props.history.push("/collection/playlists"));
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
            <div className="playlist-show-each-song" key={song.id}>
              <div>
                <p className="playlist-music-note">♪</p>
              </div>
              <div>
                <p className="playlist-show-song-title">{song.title}</p>
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
              <img className="playlist-show-images" src={this.props.playlist.photo} />
            <ul className="playlist-show-info">
              <li className="playlist-show-title">{this.props.playlist.title}</li>
              <li className="playlist-show-username">{this.props.currentUser.username}</li>
              <button className="play-button">Play</button>
              <li className="playlist-show-length">{this.props.playlist.song_ids.length} Songs</li>

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