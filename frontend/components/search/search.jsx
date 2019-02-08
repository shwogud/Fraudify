import React from 'react';
import SearchPlaylists from '../../components/search/search_playlists';
import SearchArtists from '../../components/search/search_artists';
import SearchAlbums from '../../components/search/search_albums';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
      searchValOrNot: "no-value"
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchArtists();
    this.props.fetchAlbums();
    // this.props.fetchSongs();
  }

  handleInput(e) {
    this.setState({ 
      searchVal: e.currentTarget.value 
    });
    if (!this.state.searchVal) {
      this.setState({
        searchValOrNot: "yes-value"
      })
    }
    else {
      this.setState({
        searchValOrNot: "no-value"
      })
    }
  }

  titleMatches(sliceOfState) {
    
    let arr = [];
    for(let i = 0; i < sliceOfState.length; i++) {
      if (sliceOfState[i].title.toLowerCase().includes(`${this.state.searchVal.toLowerCase()}`)) {
        arr.push(sliceOfState[i]);
      }
    }
    
    return arr;
  }

  nameMatches(sliceOfState) {
    let arr = [];
    for (let i = 0; i < sliceOfState.length; i++) {
      if (sliceOfState[i].name.toLowerCase().includes(`${this.state.searchVal.toLowerCase()}`)) {
        arr.push(sliceOfState[i]);
      }
    }
    return arr;
  }

  playlistMatches() {
    
    let possiblePlaylists;
    let possiblePlaylistsList;
    
    if(this.props.playlists) {
      possiblePlaylists = this.titleMatches(this.props.playlists);
      if (possiblePlaylists.length > 0) {
        
        possiblePlaylistsList = (
          <div>
            <p className="search-type-title">Playlists</p>
            <SearchPlaylists playlists={possiblePlaylists} fetchPlaylists={this.props.fetchPlaylists}/>
          </div>
        )
      }
      else {
        possiblePlaylists = null;
      }
    }
    return possiblePlaylistsList;
  }

  artistMatches() {
    let possibleArtists;
    let possibleArtistsList;
    if (this.props.artists) {
      possibleArtists = this.nameMatches(this.props.artists);
      if(possibleArtists.length > 0) {
        possibleArtistsList = (
          <div>
            <p className="search-type-title">Artists</p>
            <SearchArtists artists={possibleArtists} fetchArtists={this.props.fetchArtists}/>
          </div>
        )
      }
    }
    return possibleArtistsList;
  }

  albumMatches() {
    let possibleAlbums;
    let possibleAlbumsList;
    if (this.props.albums) {
      possibleAlbums = this.titleMatches(this.props.albums);
      if(possibleAlbums.length > 0) {
        possibleAlbumsList = (
          <div>
            <p className="search-type-title">Albums</p>
            <SearchAlbums albums={possibleAlbums} fetchAlbums={this.props.fetchAlbums}/>
          </div>
        )
      }
    }
    return possibleAlbumsList;
  }


  render() {
    let playlists;
    let artists;
    let albums;
    
    if (this.state.searchVal) {
      playlists = this.playlistMatches();
      artists = this.artistMatches();
      albums = this.albumMatches();
    }

    return (
      <div className="asdf">
        <div className="search-page">
          <div>
            <input
              className="search-input"
              type="text"
              onChange={this.handleInput}
              placeholder="Start Typing..."/>
            <div className={this.state.searchValOrNot}>
              <p className="search-SearchSpotify">Search Spotify</p>
              <p className="search-words">Find your favorite playlists, artists, and albums.</p>

            </div>
          </div>

          {playlists}
          {artists}
          {albums}

        </div>

      </div>
    )
  }
}

export default Search;