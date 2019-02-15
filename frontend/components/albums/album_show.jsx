import React from 'react';
// import AudioPlayerContainer
import AlbumSongContainer from './album_songs_container';
import NavBarContainer from '../../components/navbar/navbar_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.props.fetchAllSongs();
  }

  handleDropdown() {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked});
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
        <button
          onClick={() => {
            this.props.fetchPlayingSong(this.props.album.songs[0].id)
          }} 
          className="album-show-play-button">PLAY</button>

        <div className="album-show-info">
          <p className="album-show-year">{this.props.album.release_year}</p>
          <p className='album-show-separator'>·</p>
          <p className= "album-show-song-number">{this.props.album.song_ids.length} SONGS</p>
        </div>
        {/* <p>heart image</p> */}
      </div>
    )

    // let albumInfo = (
    //   <AlbumInfo />
    // )
    
    const songs = this.props.album.songs.map( song => {
      return <AlbumSongContainer key={song.id} song={song} />
    })
    
    return (
      <div>
        <NavBarContainer />
        <div className="album-show-page">
          <div>
            {albumInfo}
          </div>
          <ul className="album-show-songs">
            {songs}
          </ul>
        </div>

      </div>
    )
  }
}

export default AlbumShow;