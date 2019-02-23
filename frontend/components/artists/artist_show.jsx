import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../../components/navbar/navbar_container';
import ArtistSongContainer from '../artists/artist_songs_container'


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  handleDropdown() {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  }

  render() {
    if (!this.props.artist) {
      return (
        <div className="album-backgrounddd"></div>
      )
    }
    if (this.props.artist === undefined) {
      return (
        <div className="album-backgrounddd"></div>
        )
      }

    const artistImg = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url("${this.props.artist.photo}")`
    }
    
    if (!this.props.artist.songs) {
      return (
        <div className="album-backgrounddd"></div>
      )
    }

    
    else {
       let artistInfo = (
        <div className="artist-top" style={artistImg}>
          <p className="artist-name">{this.props.artist.name}</p>
          <div className="flex-play-button">
            <button
              onClick={() => {
                this.props.fetchPlayingSong(this.props.artist.songs[0].id)
              }}
              className="artist-play-button">PLAY
            </button>
          </div>
        </div>
        )
        
        let songs = this.props.artist.songs.map( song => {
          return <ArtistSongContainer key={song.id} song={song} artist={this.props.artist} />
        })
    
        let albums = this.props.artist.albums.map( album => {
          return (
            <ul key={album.id} className="artist-bottom">
              <div className="each-album">
                <div>
                  <li><img src={this.props.artist.photo} className="artist-bottom-pic"/></li>
                  <Link
                    className="album-title"
                    key={album.id} 
                    to={`/collection/albums/${album.id}`}>
                    {album.title}</Link>

                  <li className="artist-artist-name">{this.props.artist.name}</li>

                </div>
                
              </div>
            </ul>
          )
        })



        
      return (
        <div>
          <NavBarContainer />
          <div className="test">
          
            {artistInfo}
            <p className="Songs">Songs</p>
            {songs}
            <p className="Albums">Albums</p>
            <div className="flex-wrap-albums">
              {albums}
            </div>
          </div>

        </div>
      )  
    }
      
  }
}

export default ArtistShow;