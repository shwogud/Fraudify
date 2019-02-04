import React from 'react';
import {connect} from 'react-redux';
import {addPlaylistSong} from '../../actions/song_actions';
import {closeModal} from '../../actions/modal_actions';
// import AddPlaylistSong from './add_playlist_song';

class AddSongToPlaylistModal extends React.Component {
  constructor(props) {
    super(props);

   
    this.handleClick = this.handleClick.bind(this);
  }

  //How can we get this chosen song?
  handleClick() {
    
    this.props.addPlaylistSong(this.props.playlist.id, this.props.chosenSong.id).then(() => {
      this.props.closeModal();
    })
  }

  playlistInfo() {
    
    if (this.props.playlist) {
      if (!this.props.playlist.photo) {
        this.props.playlist.photo = window.brentURL2;
      }
      return (
        <li className="playlist-modal" onClick={this.handleClick}>
          <img className="playlist-song-modal-images" src={this.props.playlist.photo} />
          <p className="playlist-song-modal-title">{this.props.playlist.title}</p>
        </li>

      )
    }
  }

  render() {
    return (
      <ul className="all-playlists-for-song">
        {this.playlistInfo()}
      </ul>
    )
  }
}


const msp = state => {
  // debugger
  return {
   
  }
}

const mdp = dispatch => {
  return {
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(msp, mdp)(AddSongToPlaylistModal);