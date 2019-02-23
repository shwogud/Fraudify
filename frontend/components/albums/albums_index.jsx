import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../components/navbar/navbar_container';

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
      
      return (
        <li className="album-covers" key={idx}>
            <Link to={`/collection/albums/${album.id}`}>
              <img className="album-image" src={album.photo} />
            </Link>
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
                  to={`/collection/artists/${album.artist_id}`}>
                  {album.artist}</Link>
              </div>
            </div>
        </li>
      )
    })
   
    return (
      <div className="album-page">
        <NavBarContainer />
        <ul className="each-albumm">
          {albums}
        </ul>
      </div>
    )
  }

}

export default AlbumsIndex;