import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';  

class SearchAlbums extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchAlbums();
  // }


  render() {
    let albums;
    
    if(this.props.albums) {
      albums = this.props.albums.map((album, idx) => {
        return (
          <li className="search-album-covers" key={idx}>
            <section className="search-album-index-box">
              <img className="search-images-rect" src={album.photo} />
              <div className="search-type-labels">
                <div className="album-album-name">
                  <Link
                    className="search-type-labels"
                    to={`/collection/albums/${album.id}`}>
                    {album.title}</Link>
                </div>
                <div>
                  <Link
                    className="search-type-labels"
                    // key={album.artist_id} 
                    to={`/collection/artists/${album.artist_id}`}>
                    {album.artist}</Link>
                </div>
              </div>

            </section>
          </li>
        )
      })
    }
    return (
      <div>
        <ul className="search-possible-types">
          {albums};
        </ul>
      </div>
    )
  }
}

export default SearchAlbums;