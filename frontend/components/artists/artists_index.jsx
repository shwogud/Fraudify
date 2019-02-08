import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../components/navbar/navbar_container';

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
    
    const artists = this.props.artists.map(artist => {
      return (
        <li className="artist-pic-and-name" key={artist.id}>
          <Link to={`/collection/artists/${artist.id}`}>
            <img className="artist-index-image" src={artist.photo} />
          </Link>
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
    
    return (
      <div className="artist-index-page">
        <NavBarContainer />
        <ul className="artists">
          {artists}
        </ul>
      </div>
    )
  }

}

export default ArtistsIndex;