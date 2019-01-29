
import React from 'react';

import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    let songs;
    if (!this.props.song) {
      return null;
    }
   
    songs = (
      <ul className="all-songs">
        <div className="first-line">
          <li className="song-music-note">♪</li>
          <li className="song-title">{this.props.song.title}</li>
        </div>

        <div className="second-line">
          <li className="song-artist">
            <Link
              className="song-links"
              key={this.props.song.artist.id}
              to={`/collection/artists/${this.props.song.artist_id}`}>
              {this.props.song.artist.name}</Link>
              {/* <p>HELLOOOOOOOOOO</p> */}
          </li>
          <li className='song-separator'>·</li>
          <li className="song-album">
            <Link 
            className="song-links"
              key={this.props.song.album_id} 
              to={`/collection/albums/${this.props.song.album_id}`}>
              {this.props.song.albumTitle}</Link>
          </li>
        </div>
        


        {/* <li>{this.props.song.artist.name}</li>
        <li>{this.props.song.albumTitle}</li> */}
      </ul>
    )

    return (
      <div>
        {songs}
      </div>
    )
  }

}

export default SongIndexItem;