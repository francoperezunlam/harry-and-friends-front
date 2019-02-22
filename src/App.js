import React, { Component } from 'react';

import VoiceRecognizer from './components/VoiceRecognizer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Say something...
          </p>
          <VoiceRecognizer/>
        </header>
      </div>
    )
  }
}

export default App;
