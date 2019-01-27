import React from 'react';
import { Link } from 'react-router-dom';

class ArtistsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.artists = this.props.artists;
    this.currentUser = this.props.currentUser;

  }

  componentDidMount() {
    this.props.fetchAllArtists();
  }



  render() {
    const artists = this.artists.map(artist => {
      return (
        <li className="artist-pic-and-name" key={artist.id}>
          <img className="artist-index-image" src={window.brentURL1} />
          <section>
            <Link 
              className="artists-name-link"
              key={artist.id} 
              to={`/collection/artists/${artist.id}`}>
              {artist.name}</Link>
          </section>
        </li>
      )
    })
    // debugger
    return (
      <div className="artist-index-page">
        {/* <nav className="artist-index-nav">
          <Link
            // className="artist-artist-name"
            to={`/collection/playlists`}>
            PLAYLISTS</Link>

          <Link
            // className="artist-artist-name"
            to={`/collection/playlists`}>
            SONGS</Link>

          <Link
            // className="artist-artist-name"
            to={`/collection/playlists`}>
            ALBUMS</Link>

          <Link
            // className="artist-artist-name"
            to={`/collection/playlists`}>
            ARTISTS</Link>
        </nav> */}

        <ul className="artists">
          {artists}
        </ul>
      </div>
    )
  }

}

export default ArtistsIndex;