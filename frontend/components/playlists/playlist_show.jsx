import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShowSongInfo from './playlist_show_song_info';

class PlaylistShow extends React.Component {

  componentDidMount() {
    
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    // this.props.fetchAllSongs();
  }

  playlistSongs() {
    let songs;
    // if (this.props.playlist.song_ids) {
    //   let playlistSongs = [];

    //   for(let i = 0; i < this.props.playlist.song_ids.length; i++) {
    //     playlistSongs.push(this.props.songs[this.props.playlist.song_ids[i]])
    //   }

    //   songs = (
    //     playlistSongs.map( song => {
    //       return (<li key={song.id}>{song.title}</li>)
    //     })
    //   )
    // }

    if (this.props.songs[0]) {
      debugger
      songs = (
        this.props.songs.map( song => {
          return (
            <PlaylistShowSongInfo song={song} />
          )
        })
      );
    }
    else {
      songs = null;
    }

    return songs;
  };

  render() {
    let playlist;
    let playlistsongs;
    
    if (this.props.playlist) {
      playlistsongs = (
        <div className='pshow-songlist'>
          {this.playlistSongs()}
        </div>
      )
      
      playlist = (
        <div className="playlist-show-page">
          <ul className="playlist-info">
            <img className="playlist-index-images" src={window.brentURL1} />
            <li>{this.props.playlist.title}</li>
            <li>{this.props.currentUser.username}</li>
            <li>{this.props.playlist.song_ids.length}</li>
          </ul>
          <div className="playlist-show-songs">
            {this.playlistSongs()}
          </div>
        </div>
      )
    }
    else {
      playlist = null;
    }
    
    return (
      <div>
        {playlist}
      </div>
    )
  }
}

export default PlaylistShow;