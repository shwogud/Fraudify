import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';  

class SearchPlaylists extends React.Component {
  constructor(props) {
    super(props);
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
            <li className="search-playlist-index-box" key={playlist.id}>
              <Link to={`/collection/playlists/${playlist.id}`}>
                <img className="search-images-rect" src={playlist.photo} />
              </Link>

              <Link
                className="playlist-title-link"
                to={`/collection/playlists/${playlist.id}`}>
                <p className="search-type-labels">{playlist.title}</p></Link>

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
        <ul className="search-possible-types">
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