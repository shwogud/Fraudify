import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { addPlaylistSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddSongToPlaylistModal from './add_song_to_playlist_modal';
import { requestAllPlaylists } from '../../actions/playlist_actions';

class AddPlaylistSong extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }
  

  render() {
    
    if (!this.props.modal) {
      return null;
    }
    
    let user_playlists;
    
    if (this.props.playlists) {
      
      user_playlists = this.props.playlists.map( (playlist, index) => {
        
        if (playlist.user_id === this.props.currentUser.id) {
          
          return (
            <AddSongToPlaylistModal
              chosenSong = {this.props.chosenSong}
              playlist={playlist} 
              key={index} />
          )
        }
      })
    }
    else {
      playlists = null;
    }



    return (
      <div>
        {user_playlists}

      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  
  return {
    modal: state.ui.modal,
    playlists: Object.values(state.entities.playlists),
    currentUser: state.entities.users[state.session.id],
    chosenSong: state.ui.optional_props.chosenSong,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    addPlaylistSong: (playlistId, songId) => dispatch(addPlaylistSong(playlistId, songId)),
    fetchPlaylists: () => dispatch(requestAllPlaylists()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPlaylistSong));