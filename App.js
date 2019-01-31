import React, { Component } from 'react';
import Navbar from './components/navbar';
import './styles/App.css';
import Body from './components/body';
import Buttons from './components/buttons'

class App extends Component {
  render() {
    return (
      <div className='App'>
         <Navbar />
      <header className="App-header">
         <Body />
         <Buttons />
      </header>
      </div>
    );
  }
}

export default App;
