
import React from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
  render() {

    return (
      <>

        <div className="sidebar-container">
          <div className="sidebar-all">
          
          <div className="sidebar-logo-name">
            <Link to={`/collection/playlists`}>
              <i className="fab fa-spotify"></i>
            
            </Link>

            <Link
              className="sidebar-name"
              to={`/collection/playlists`}>
              Fraudify</Link>
          </div>

          <div className="search-pic-name">
            <Link className="search-mag-glass-link" to="/search">
              <div className="magnifying-glass">
                &#9906; 
                <span className="search-linkk">Search</span>
              </div>
            </Link>

          </div>

          <div className="home-pic-name">
              <Link className="search-home-pic-link" to="/collection/playlists">
                <div className="home-all">

                  <p className="sidebar-home-pic">⌂</p>

                  <p className="home-name">Home</p>

                </div>
              </Link>     
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