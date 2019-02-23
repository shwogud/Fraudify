import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';


import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import PlaylistShow from './playlists/playlist_show_containers';
import AlbumsShowContainer from './albums/albums_show_container';
import ArtistsShowContainer from './artists/artists_show_container';

import PlaylistIndexContainer from './playlists/playlist_index_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import ArtistsIndexContainer from './artists/artists_index_container';

import SideBarContainer from './sidebar/sidebar_container';
import Modal from './modal/modal';
import MusicBar from './music_bar/music_bar_container.js';
import SearchContainer from './search/search_container';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>

    <Route path="/" component={Modal} />

   
    
      <div className="main-content">
        <div className="containers">
          <ProtectedRoute path="/" component={SideBarContainer} />
          <div className="bigggy">
            <ProtectedRoute path="/search" component={SearchContainer} />
            <ProtectedRoute path="/collection/playlists/:playlistId" component={PlaylistShow}/>
            <ProtectedRoute path="/collection/albums/:albumId" component={AlbumsShowContainer} />
            <ProtectedRoute path="/collection/artists/:artistId" component={ArtistsShowContainer} />
            
            <ProtectedRoute exact path="/collection/playlists" component={PlaylistIndexContainer} />
            <ProtectedRoute exact path="/collection/albums" component={AlbumsIndexContainer} />
            <ProtectedRoute exact path="/collection/artists" component={ArtistsIndexContainer} />
          </div>

        </div>
      </div>

    <ProtectedRoute path="/" component={MusicBar} />

  </div>
);

export default App;
