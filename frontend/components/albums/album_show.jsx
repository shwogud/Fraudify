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
      <div className="album-show-left">
        <img className="album-show-image" src={window.brentURL1} />
        <p>{this.props.album.title}</p>
        <p>{this.props.album.artist}</p>
        <button>PLAY</button>
        <p>{this.props.album.release_year}</p>
        <p>{this.props.album.song_ids.length}</p>
        {/* <p>heart image</p> */}
      </div>
    )
    

    let songs = this.props.album.songs.map( song => {
      return (
        <ul key={song.id}>
          <li>
            {song.title}
          </li>
        </ul>
      )
    })
    
    return (
      <div className="album-show-page">
        {albumInfo}
        {songs}
      </div>
    )
  }
}

export default AlbumShow;