import { connect } from 'react-redux';
import MainContent from './main_content';
import { logout } from '../../actions/session_actions'
// import { logout } from '../../util/session_api_util'

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mdp)(MainContent);