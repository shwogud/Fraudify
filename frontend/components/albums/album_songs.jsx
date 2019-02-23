import React from 'react';


class AlbumSong extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        hamburgerClicked: false
    }
    this.flag = true;
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    }

    handleMousedown(e) {
        var hamburger = document.querySelector(`#hamburger-icon${this.props.song.id}`);
        var box = document.querySelector(`.add-song-text${this.props.song.id}`);
        if (hamburger && hamburger.contains(e.target)) {
            this.flag = false;
            
        }
        if (!box.contains(e.target)) {
            this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
        }
        document.removeEventListener("mousedown", this.handleMousedown);
    }


    handleDropdown() {
        if (this.flag) {
            this.setState({ hamburgerClicked: !this.state.hamburgerClicked }, () => {
                document.addEventListener("mousedown", this.handleMousedown);
            });
        }
        this.flag = true;
    }


    render() {
        
        const { song } = this.props
        const klass = this.state.hamburgerClicked ? "active-dropdown" : "";
        return (
            <li key={song.id}>
                <ul className="flex-music-song">
                    <div className="album-show-music-note-song-title">
                        <li className="album-music-note">♪</li>
                        <li
                            onClick={() => {
                                this.props.fetchPlayingSong(song.id)
                            }
                                // .then(() => document.querySelector(".flex-wrap-albums").style.paddingBottom = "100px")} 
                            }
                            className="album-song-title">
                            {song.title}
                        </li>
                    </div>
                    <i
                        onClick={this.handleDropdown}
                        id={`hamburger-icon${this.props.song.id}`}
                        className="material-icons album-show-hamburger">view_headline</i>

                    <div className={`drop-down-menu ${klass}`}>
                        <ul className="drop-down-actions">
                            <li
                                className={`add-song-text${this.props.song.id}`}
                                onClick={() => this.props.openModal("addplaylistsong", 
                                {
                                    chosenSong: song
                                })}
                                >Add to Playlist</li>
{/* 
                            onClick={() => this.props.openModal('article-popup-page',
                                {
                                    article: this.props.article, index: this.props.index,
                                    saved: this.props.saved
                                })}> */}
                
                
                        </ul>
                    </div>

                </ul>
            </li>
        )
    }
                                    
}

export default AlbumSong;