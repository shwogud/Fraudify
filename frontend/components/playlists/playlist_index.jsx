import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../components/navbar/navbar_container';
class PlaylistIndex extends React.Component {
  constructor(props) {
    
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {
      loading: true,
    }
    
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    if (this.state.loading) {
      <div className="loader"></div>
    }
    
    let playlists;

    if (!this.props.playlists[0]) {
       
      return (
        <div className="album-backgrounddd"></div>
      )
    }
    
    if (this.props.playlists) {
       
      playlists = this.props.playlists.map( playlist => {
        
        if (playlist.user_id === this.currentUser.id) {
          if (!playlist.photo) {
            playlist.photo = window.brentURL2;
          }
          
          return (
            <li className="playlist-index-box" key={playlist.id}>
              <Link to={`/collection/playlists/${playlist.id}`}>
                <img className="playlist-index-images" src={playlist.photo} />
              </Link>

              <Link 
                className="playlist-title-link"
                to={`/collection/playlists/${playlist.id}`}>
                <p className="playlist-title">{playlist.title}</p></Link>
              
            </li>
          )
        }
      });
    }
     
    return (
      <div className="playlist-page">
        <NavBarContainer />
        <ul className="all-playlist-boxes">
          {playlists}
        </ul>
      </div>
    );
  }
}


export default PlaylistIndex;

