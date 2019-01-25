import React from 'react';

class PlaylistShowSongInfo extends React.Component {
  render() {

    return (
      <div>
        <ul>
          <li>{this.props.song.title}</li>
        </ul>
        <ul>
          <li>{this.props.song.artist.name}</li>
          <li>·</li>
          <li>{this.props.song.album.title}</li>
        </ul>
 
      </div>
    );
  }

}

export default PlaylistShowSongInfo;