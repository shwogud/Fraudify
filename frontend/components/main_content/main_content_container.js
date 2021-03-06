import { connect } from 'react-redux';
import MainContent from './main_content';
import { logout } from '../../actions/session_actions'


const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};
const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(MainContent);