
import React from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
  render() {

    return (
      <>

        <div className="sidebar-container">
          <div className="sidebar-all">
          
          <div className="sidebar-logo-name">
            <i className="fab fa-spotify"></i>
            {/* <p className="sidebar-name">Fraudify</p> */}
            <Link
              className="sidebar-name"
              to={`/collection/playlists`}>
              Fraudify</Link>
          </div>

          <div className="search-pic-name">
            <div className="magnifying-glass">
              &#x1f50d;
            </div>
            <Link className="search-linkk" to="/search">
              <p className="search-color">Search</p>
            </Link>
          </div>

          <div className="home-pic-name">
            <p className="home-pic">⌂</p>
            <Link
              className="home-name"
              to="/collection/playlists">
              Home</Link>
            {/* <p className="home-name">Home</p> */}
          </div>
          
          <div className="lib-pic-name">
              <p className="lib-pic">&#128214;</p>
              <Link
                className="lib-name"
                to="/collection/playlists">
                Your Library</Link>
            {/* <p className="lib-name">Your Library</p> */}
          </div>


          <div className="sidebar-bottom">
            <div className="center-welcome-user">
              <p className="sidebar-welcome">Welcome,</p>
            <h1 className="sidebar-user">{this.props.currentUser.username} !</h1>

            </div>
            <button 
              className="logout-button"
              onClick={this.props.logout}>
              Log Out</button>
          </div>
        </div>
        </div>
        <div className="sidebar-container-spacer"></div>
    </>
    );
  }
}

export default Sidebar;