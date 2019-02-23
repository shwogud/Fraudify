import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';  

class SearchArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let artists;

    if(this.props.artists) {
      artists = this.props.artists.map( artist => {
        return (
          <li className="search-artist-pic-and-name" key={artist.id}>
            <Link to={`/collection/artists/${artist.id}`}>
            <img className="search-images-circ" src={artist.photo} />
            </Link>
            <section>
              <Link
                className="search-type-labels"
                key={artist.id}
                to={`/collection/artists/${artist.id}`}>
                {artist.name}</Link>
            </section>
          </li>
        )

      })
    }
    else {
      artist = null;
    }

    return (
      <div>
        <ul className="search-possible-types">
          {artists};
        </ul>
      </div>
    )
  }
}

export default SearchArtists;