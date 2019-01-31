import React from 'react';
// import AudioPlayerContainer

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
      return (
        <div className="album-backgrounddd"></div>
      )
    }

    if (!this.props.album.songs) {
      return (
        <div className="album-backgrounddd"></div>
      )
    }

    let albumInfo = (
      <div className="album-show-left">
        <img className="album-show-image" src={this.props.album.photo} />
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
          <li 
            onClick={() => {
              this.props.fetchPlayingSong(song.id)}
                // .then(() => document.querySelector(".flex-wrap-albums").style.paddingBottom = "100px")} 
            }
            className="album-song-title">
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