import React from 'react';


class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h1>Welcome to the Main Content Page!</h1>
        {/* <Switch>
          <Route path="/browse" component={Browse} />
          <Route path="/search" component={Search} />
          <Route path="/collection" component={Collection} />
          <Redirect to="/browse/albums" />
        </Switch> */}
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default MainContent;