import React from 'react';
import {connect} from 'react-redux';
import {addPlaylistSong} from '../../actions/song_actions';
import {closeModal} from '../../actions/modal_actions';
// import AddPlaylistSong from './add_playlist_song';
// import { requestAllPlaylists } from '../../actions/playlist_actions';

class AddSongToPlaylistModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.props.addPlaylistSong(this.props.playlist.id, this.props.chosenSong.id).then(() => {
      this.props.closeModal();
    })
  }

  // playlistInfo() {
    
  //   if (this.props.playlist) {
  //     if (!this.props.playlist.photo) {
  //       this.props.playlist.photo = window.brentURL2;
  //     }
  //     return (
  //       <li className="playlist-modal" onClick={this.handleClick}>
  //         <img className="playlist-song-modal-images" src={this.props.playlist.photo} />
  //         <p className="playlist-song-modal-title">{this.props.playlist.title}</p>
  //       </li>

  //     )
  //   }
  // }

  // playlistInfo() {
    
  //   const allPlaylists = this.props.playlists;
  //   
  //   if (allPlaylists) {
  //     allPlaylists.map( playlist => {
  //       
  //       return (
  //         <li key={playlist.id} className="playlist-modal" onClick={this.handleClick}>
  //           <img className="playlist-song-modal-images" src={playlist.photo} />
  //           <p className="playlist-song-modal-title">{playlist.title}</p>
  //         </li>
  //       )
  //     })
  //   }
  // }

  // render() {
  //   const { playlists } = this.props;
  //   if (playlists.length === 0 ) return null;

  //   const allPlaylistsInfo = playlists.map(playlist => {
  //     return (
  //       <li key={playlist.id} className="playlist-modal" onClick={this.handleClick}>
  //         <img className="playlist-song-modal-images" src={playlist.photo} />
  //         <p className="playlist-song-modal-title">{playlist.title}</p>
  //       </li>
  //     )
  //   });
  //   // 

  //   return (
  //     <ul className="all-playlists-for-song">
  //       {allPlaylistsInfo}
  //     </ul>
  //   )
  // }

  render() {
    if (!this.props.playlist.photo) {
        this.props.playlist.photo = window.brentURL2;
    }
    return (
      <li key={this.props.playlist.id} className="playlist-modal" onClick={this.handleClick}>
        <div className="playlist-modal-image-title">
          <img className="playlist-song-modal-images" src={this.props.playlist.photo} />
          <p className="playlist-song-modal-title">{this.props.playlist.title}</p>
        </div>
      </li>
    )
  }
}


const msp = state => {
  return {
    playlists: Object.values(state.entities.playlists)
  }
}

const mdp = dispatch => {
  return {
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
    closeModal: () => dispatch(closeModal()),
    // fetchPlaylists: () => dispatch(requestAllPlaylists()),
  }
}

export default connect(msp, mdp)(AddSongToPlaylistModal);