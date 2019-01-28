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
      <ProtectedRoute path="/collection/playlists/:playlistId" component={PlaylistShow}/>
      <ProtectedRoute path="/collection/albums/:albumId" component={AlbumsShowContainer} />
      <ProtectedRoute path="/collection/artists/:artistId" component={ArtistsShowContainer} />
      
      {/* <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer} /> */}
      <ProtectedRoute path="/collection/albums" component={AlbumsIndexContainer} />
      <ProtectedRoute path="/collection/artists" component={ArtistsIndexContainer} />
      <ProtectedRoute path="/collection/songs" component={SongsIndexContainer} />


      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>
    {/* <ProtectedRoute path="/" component={NavbarContainer} /> */}
  </div>
);

export default App;
