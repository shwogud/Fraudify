import React from 'react';
import { Link } from 'react-router-dom';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.albums = this.props.albums;
    this.currentUser = this.props.currentUser;
    
  }

  componentDidMount() {
    this.props.fetchAllAlbums();
  }



  render() {
    
    const albums =  this.props.albums.map( album => {
      // let artist = this.props.fetchArtist(this.props.albums.artist_id);
      return (
        <li className="album-covers" key={album.id}>
          <section>
            <img className="album-image" src={window.brentURL1} />
            <Link
              className="album-album-link"
              key={album.id} 
              to={`/collection/albums/${album.id}`}>
              {album.title}</Link>
            <p className="album-artist-name">{album.artist}</p>

          </section>
        </li>
      )
    })
    // debugger
    return (
      <div className="album-page">
        <ul className="each-album">
          {albums}
        </ul>
      </div>
    )
  }

}

export default AlbumsIndex;