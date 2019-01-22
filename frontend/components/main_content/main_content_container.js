import { connect } from 'react-redux';
import MainContent from './main_content';
import { logout } from '../../actions/session_actions'

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdp)(MainContent);