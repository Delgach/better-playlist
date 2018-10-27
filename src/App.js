import React, { Component } from 'react';
import './App.css';

let defaultTextcolor = "#fff";
let fakeServerData = {
  user: {
    name: 'Patric',
    playlists: [
      {name: 'Rock Star',
        songs: [
          {name: "sex, drugs and rock'n roll",duration: 345},
          {name: 'my generation',duration:333},
          {name: 'Best of you',duration:434}
        ]
      },
      {
        name: 'Espanish sh*t',
        songs: [
          {name: "La chica sexy",duration: 345},
          {name: 'Lamento boliviano',duration:333},
          {name: 'El rey de la tarima',duration:434}
        ]
      },
      {
        name: 'Russian mode',
        songs: [
          {name: "Saharniy chelovek",duration: 345},
          {name: 'Ona ne tvoya',duration:333},
          {name: 'Ti ne schitayesh',duration:434}
        ]
      },
      {
        name: 'another sh*t',
        songs: [
          {name: "Rompe",duration: 345},
          {name: "Babe i'm gonna leave  you", duration:333},
          {name: 'Enter sandman',duration:434}
        ]
      },
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
        <div style={{width: "40%", display: 'inline-block'}}>
          <h2 style={{color: defaultTextcolor}}>{this.props.playlists.length} Playlists</h2>
        </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlalists) =>{
      return songs.concat(eachPlalists.songs)
    }, [])
    let totalDuration = allSongs.reduce((totalSeconds, eachSong) => {
      return totalSeconds + eachSong.duration
    }, 0)
    return (
        <div style={{width: "40%", display: 'inline-block'}}>
          <h2 style={{color: defaultTextcolor}}>{Math.round(totalDuration/60)} Hours</h2>
        </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={{color: defaultTextcolor}}>
        <image/>
        <input type='text' onKeyUp={event =>
        this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist;
    return(
      <div style={{color: defaultTextcolor, width: '25%', display: 'inline-block'}}>
        <image/>
        <h3>{playlist.name}</h3>
        <ul>
          {
            playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1>
          {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter onTextChange={text => this.setState({filterString: text})}/>
          {
            this.state.serverData.user.playlists.filter( playlist =>
              playlist.name.toLowerCase().includes(
                this.state.filterString.toLowerCase())
            ).map(playlist => 
              <Playlist playlist={playlist}/>
            )}
        </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
