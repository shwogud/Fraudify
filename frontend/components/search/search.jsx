import React from 'react';
import SearchPlaylists from '../../components/search/search_playlists';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  handleInput(e) {
    // debugger
    this.setState({ searchVal: e.currentTarget.value });
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
            <p>Playlists</p>
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


  render() {
    let playlists;
    
    if (this.state.searchVal) {
      playlists = this.playlistMatches();
    }
    return (
      <div>
        <div>
          <p className="search-modal">Search for a Playlist, Artist, Album, or Song</p>
          <input 
            type="text"
            onChange={this.handleInput}
            placeholder="Start Typing..."/>
        </div>

        {playlists}
        

      </div>
    )
  }



}

export default Search;