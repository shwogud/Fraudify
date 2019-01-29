import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('createplaylist')),
  };
};


export default connect(msp, mdp)(Navbar);


// 6768347a