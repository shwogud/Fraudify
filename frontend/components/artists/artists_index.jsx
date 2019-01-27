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
        <li key={artist.id}>
          <img src={window.brentURL1} />
          <Link key={artist.id} to={`/collection/artists/${artist.id}`}>{artist.name}</Link>
        </li>
      )
    })
    // debugger
    return (
      <div>
        <ul>
          {artists}
        </ul>
      </div>
    )
  }

}

export default ArtistsIndex;