import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';  

class SearchPlaylists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    let playlists;

    if (this.props.playlists) {
      playlists = this.props.playlists.map( playlist => {
        if (playlist.user_id === this.props.currentUser.id) {
          if (!playlist.photo) {
            playlist.photo = window.brentURL2;
          }

          return (
            <li className="playlist-index-box" key={playlist.id}>
              <Link to={`/collection/playlists/${playlist.id}`}>
                <img className="playlist-index-images" src={playlist.photo} />
              </Link>
              {/* <img className="playlist-index-images" src={playlist.photo} /> */}
              <Link
                className="playlist-title-link"
                to={`/collection/playlists/${playlist.id}`}>
                <p className="playlist-title">{playlist.title}</p></Link>
              {/* <p className="playlist-username">{playlist.username}</p> */}

            </li>
          )
        }
      })
    }
    else {
      playlists = null;
    }


    return (
      <div>
        <ul>
          {playlists}
        </ul>
      </div>
    )
  }

}

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}


export default connect(msp, null)(SearchPlaylists);