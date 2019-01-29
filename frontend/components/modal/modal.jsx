
import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import CreatePlaylist from '../playlists/create_playlist';



function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createplaylist':
      component = <CreatePlaylist />;
      break;
    case 'deleteplaylist':
      component = <DeletePlaylist />;
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )

}


const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);

