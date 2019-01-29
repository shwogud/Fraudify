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

import MainContentContainer from './main_content/main_content_container';
import PlaylistShow from './playlists/playlist_show_containers';
import AlbumsShowContainer from './albums/albums_show_container';
import ArtistsShowContainer from './artists/artists_show_container';

import PlaylistIndexContainer from './playlists/playlist_index_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import ArtistsIndexContainer from './artists/artists_index_container';
import SongsIndexContainer from './songs/songs_index_container';
import NavBarContainer from './navbar/navbar_container';
import SideBarContainer from './sidebar/sidebar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    {/* <header>
      <h1>Everyone sees this</h1>

    </header> */}
    {/* <SplashContainer /> */}



    {/* AuthRoute: when logged in, cannot reach login/signup page 
    ProtectedRoute: can only reach route when logged in */}
    {/* <Route path="" /> */}

    <Route path="/" component={Modal} />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <div className="main-content">
        <div className="containers">
          <ProtectedRoute path="/collection" component={SideBarContainer} />
          <div className="bigggy">
            <ProtectedRoute path="/collection" component={NavBarContainer} />

            <ProtectedRoute path="/collection/playlists/:playlistId" component={PlaylistShow}/>
            <ProtectedRoute path="/collection/albums/:albumId" component={AlbumsShowContainer} />
            <ProtectedRoute path="/collection/artists/:artistId" component={ArtistsShowContainer} />
            
            <ProtectedRoute exact path="/collection/playlists" component={PlaylistIndexContainer} />
            <ProtectedRoute exact path="/collection/albums" component={AlbumsIndexContainer} />
            <ProtectedRoute exact path="/collection/artists" component={ArtistsIndexContainer} />
            {/* <ProtectedRoute path="/collection/songs" component={SongsIndexContainer} /> */}
          </div>

        </div>
      </div>

      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>
    {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
  </div>
);

export default App;
