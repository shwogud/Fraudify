import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndex extends React.Component {

  render() {

    return (
      <div className="splashAll">
        <header className="splashNavBar">
          <p>Fraudify</p>

          <Link to='/signup'>
            <button type="button" className="btn-signup">Sign up</button>
          </Link>

          <Link to='/login'>
            <button type="button" className="btn-login">Log In</button>
          </Link>
        </header>
      
          <div>

         

          </div>


          <div>
            <h1>Music for everyone.</h1>
            <h3>Millions of songs. No credit card needed.</h3>
            <button>GET SPOTIFY FREE</button>
          </div>

        </div>
 
    );
  }
}

export default SplashIndex;