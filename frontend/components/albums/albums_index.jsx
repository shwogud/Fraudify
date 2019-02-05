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
     
    const albums =  this.props.albums.map( (album, idx) => {
      // let artist = this.props.fetchArtist(this.props.albums.artist_id);
      
      return (
        <li className="album-covers" key={idx}>
          <section>
            <img className="album-image" src={album.photo} />
            <div className="album-links">
              <div className="album-album-name">
                <Link
                  className="album-album-link"
                  to={`/collection/albums/${album.id}`}>
                  {album.title}</Link>
              </div>
              <div>
                <Link
                  className="album-artist-link"
                  // key={album.artist_id} 
                  to={`/collection/artists/${album.artist_id}`}>
                  {album.artist}</Link>
              </div>
            </div>

          </section>
        </li>
      )
    })
   
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