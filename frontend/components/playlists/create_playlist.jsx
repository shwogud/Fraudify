
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state, this.props.user).then((playlist) => {
      
    this.props.closeModal();
    this.props.history.push(`/collection/playlists/${playlist.data.playlist.id}`);
    });
    this.state.title = '';
  }


  render() {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="total-screen">
        <div className="modal-X" onClick={() => this.props.closeModal()}>X</div>
        <h1 className="modal-create-new-playlist"> Create new playlist</h1>
        <section className="total-modal">
          <form onSubmit={this.handleCreate}>
            <input 
              className="playlist-name-bar"
              placeholder="Start typing..." 
              value={this.state.title} 
              onChange={this.update('title')} />
          </form>
        </section>
        <div className="modal-buttons">
          <button className="modal-cancel" onClick={() => this.props.closeModal()}>CANCEL</button>
          <button className="modal-create" onClick={() => this.handleCreate()}>CREATE</button>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  
  return {
    modal: state.ui.modal,
    user: Object.values(state.entities.users)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist));