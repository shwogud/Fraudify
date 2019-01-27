import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.props.fetchAllSongs();
  }


  render() {
    if (!this.props.album) {
      return null;
    }
    let albumInfo = (
      <div>
        <img src={window.brentURL1} />
        <p>{this.props.album.artist}</p>
        <p>{this.props.album.release_year}</p>
        <p>{this.props.album.song_ids.length}</p>
        <p>heart image</p>
      </div>
    )
    
    return (
      <div>
        {albumInfo}
      </div>
    )
  }
}

export default AlbumShow;