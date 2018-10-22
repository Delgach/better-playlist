import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextcolor = "#fff"

class Aggregate extends Component {
  render() {
    return (
        <div style={{width: "40%", display: 'inline-block'}}>
          <h2 style={{color: defaultTextcolor}}>the number and text</h2>
        </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={{color: defaultTextcolor}}>
        <image/>
        <input type='text'/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{color: defaultTextcolor, width: '25%', display: 'inline-block'}}>
        <image/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tittle</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
