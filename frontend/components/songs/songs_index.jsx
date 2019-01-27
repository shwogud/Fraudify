import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item'

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSongs();

  }

  render() {
    let songs;

    if (!this.props.songs) {
      return null;
    }

    songs = (
      this.props.songs.map((song, i) => {
        return (
          <SongIndexItem className="each-song" song={song} key={song.id}/>
        )
      })
    );

    return (
      <ul className="song-index">
        {songs}
      </ul>
    )
  }
}

export default SongsIndex;