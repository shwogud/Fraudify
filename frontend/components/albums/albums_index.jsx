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
    const albums =  this.albums.map( album => {
      // let artist = this.props.fetchArtist(this.props.albums.artist_id);
      return (
        <li key={album.id}>
          <img src={window.brentURL1} />
          <Link key={album.id} to={`/collection/albums/${album.id}`}>{album.title}</Link>
          <p>{album.artist}</p>
        </li>
   
      )
    })
    // debugger
    return (
      <div>
        <ul>
          {albums}
        </ul>
      </div>
    )
  }

}

export default AlbumsIndex;