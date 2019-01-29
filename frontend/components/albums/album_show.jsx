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
    if (!this.props.album.songs) {
      return null;
    }

    let albumInfo = (
      <div className="album-show-left">
        <img className="album-show-image" src={window.brentURL1} />
        <p className="album-show-title">{this.props.album.title}</p>
        <p className="album-show-artist">{this.props.album.artist}</p>
        <button className="album-show-play-button">PLAY</button>

        <div className="album-show-info">
          <p className="album-show-year">{this.props.album.release_year}</p>
          <p className='album-show-separator'>·</p>
          <p className= "album-show-song-number">{this.props.album.song_ids.length} SONGS</p>
        </div>
        {/* <p>heart image</p> */}
      </div>
    )
    
    let songs = this.props.album.songs.map( song => {
      return (
        <ul className="flex-music-song" key={song.id}>
          <li className="album-music-note">♪</li>
          <li className="album-song-title">
            {song.title}
          </li>
        </ul>
      )
    })
    
    return (
      <div className="album-show-page">
        <div>
          {albumInfo}
        </div>
        <div className="album-show-songs">
          {songs}
        </div>
      </div>
    )
  }
}

export default AlbumShow;