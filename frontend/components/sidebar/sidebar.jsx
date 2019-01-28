
import React from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
  render() {

    return (
      <div className="sidebar-container">
      <div className="sidebar-all">
        
        <div className="sidebar-logo-name">
          <i className="fab fa-spotify"></i>
          <p className="sidebar-name">Fraudify</p>
        </div>

        <div className="search-pic-name">
          <div className="magnifying-glass">
            &#x1f50d;
          </div>
          <p className="searchh">Search</p>
        </div>

        <div className="home-pic-name">
          <p className="home-pic">⌂</p>
          <p className="home-name">Home</p>
        </div>
        
        <div className="lib-pic-name">
          &#128214;
          <p className="lib-name">Your Library</p>
        </div>


        <div className="sidebar-bottom">
          <h1 className="sidebar-user">{this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Sidebar;