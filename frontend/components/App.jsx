import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Splash from './splash/splash_index'; //initial page with signup/login
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import NavbarContainer from './navbar/navbar_container';

import MainContentContainer from './main_content/main_content_container';

const App = () => (
  <div>
    {/* <header>
      <h1>Everyone sees this</h1>

    </header> */}
    {/* <SplashContainer /> */}



    {/* AuthRoute: when logged in, cannot reach login/signup page 
    ProtectedRoute: can only reach route when logged in */}
    {/* <Route path="" /> */}
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/feed" component={MainContentContainer} />
      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>
    {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
  </div>
);

export default App;
