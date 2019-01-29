import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndex extends React.Component {

  render() {
    
    return (
      <div className="splashAll"> 
        <header className="splashNavBar">
          <div className="nav-right">
            <Link className= "splash-link" to="/">
              <i className="fab fa-spotify"></i>
              <p>Fraudify</p>
            </Link>
          </div>

          <div className="nav-left">
              <Link to='/signup' className="signup">Sign up</Link>
              <Link to='/login' className="login"> Log in</Link>
          </div>
        </header>

          <div className="body-all">
            <div className="body">
              <h1>Music for everyone.</h1>
              <h3>Millions of songs. No payment needed.</h3>
              <Link to='/signup'>
                <button className="splash-button">GET FRAUDIFY FREE</button>
              </Link>
            </div>
  
          </div>

        </div>
 
    );
  }
}

export default SplashIndex;