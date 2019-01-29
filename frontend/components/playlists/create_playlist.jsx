
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
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleCreate() {
    this.props.createPlaylist(this.state).then((playlist) => {
      this.props.closeModal();
      this.props.history.push(`/collection/playlists/${playlist.playlist.id}`);
    });
    this.state.title = '';
  }


  render() {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div>
        <div onClick={() => this.props.closeModal()}>X</div>
        <h1> Create new playlist</h1>
        <section>
          <div>Playlist Name</div>
          <input placeholder="Start typing..." value={this.state.title} onChange={this.update('title')} />
        </section>
        <button onClick={() => this.props.closeModal()}>CANCEL</button>
        <button onClick={() => this.handleCreate()}>CREATE</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist));