import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
    // this.props.fetchAllSongs();
    // this.props.fetchAllAlbums();
  }

  render() {
    
    if (this.props.artist === undefined) {
      return (
        <div>
          <p>asdf</p>
        </div>
      )
    }

    if (!this.props.artist.songs) {
      return (
        <div className="album-backgrounddd"></div>
      )
    }
   
    else {
       let artistInfo = (
        <div className="artist-top">
           <img className="artist-top-pic" src={this.props.artist.photo} />
          <p className="artist-name">{this.props.artist.name}</p>
          <div className="flex-play-button">
            <button className="artist-play-button">PLAY</button>
          </div>
        </div>
        )
        
        let songs = this.props.artist.songs.map( song => {
          
          return (
            <ul key={song.id} className="artist-middle">
              <li className="artist-music-note">♪</li>
              <li><img 
                onClick={() => {
                  this.props.fetchPlayingSong(song.id)
                }}
                src={this.props.artist.photo} 
                className="artist-middle-pic"/></li>
              
              <li 
                onClick={() => {
                  this.props.fetchPlayingSong(song.id)
                }}
                className="song-title">{song.title}</li>
            </ul>
          )
        })
    
        let albums = this.props.artist.albums.map( album => {
          return (
            <ul key={album.id} className="artist-bottom">
              <div className="each-album">
                <div>
                  <li><img src={this.props.artist.photo} className="artist-bottom-pic"/></li>
                  {/* <li className="album-title">{album.title}</li> */}
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
        <div className="test">
        
          {artistInfo}
          <p className="Songs">Songs</p>
          {songs}
          <p className="Albums">Albums</p>
          <div className="flex-wrap-albums">
            {albums}
          </div>
        </div>
      )  
    }
      
  }
}

export default ArtistShow;