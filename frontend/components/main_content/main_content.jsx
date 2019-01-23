import React from 'react';
// import { logout } from '../../util/session_api_util'
// import { logout } from '../../actions/session_actions'

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="main-content">
        <h1>Welcome to the Main Content Page!</h1>
        {/* <Switch> */}
          {/* <Route path="/browse" component={Browse} /> */}
          {/* <Route path="/search" component={Search} />
          <Route path="/collection" component={Collection} />
          <Redirect to="/browse/albums" /> */}
        {/* </Switch> */}

        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default MainContent;