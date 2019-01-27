import React from 'react';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    
  }


  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
    this.props.fetchAllSongs();
    this.props.fetchAllAlbums();
  }

  render() {
    
    // if (!this.props.artist) {
    //   return null;
    // }
    
    // let artistInfo = (
    //   <div>
    //     <img src={window.brentURL1} />
    //     <p>{this.props.artist.name}</p>
    //   </div>
    // )
    
    if (this.props.artist === undefined) {
      return (
        <div>
          <p>asdf</p>
        </div>
      )
    }
    else {
       let artistInfo = (
        <div>
          <img src={window.brentURL1} />
          <p>{this.props.artist.name}</p>
        </div>
        )
      return (
        <div className="test">
        
          {artistInfo}
        </div>
      )  
    }
      
  }
}

export default ArtistShow;