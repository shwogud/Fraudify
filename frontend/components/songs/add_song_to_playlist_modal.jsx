import React from 'react';
import {connect} from 'react-redux';
import {addPlaylistSong} from '../../actions/song_actions';
import {closeModal} from '../../actions/modal_actions';

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
  }
}

export default connect(msp, mdp)(AddSongToPlaylistModal);