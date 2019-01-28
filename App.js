import React, { Component } from 'react';
import './styles/App.css';
import Button from './components/button';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <header className="App-header">
          <p>BREXIT</p>

          <span>
          <Button />
          <Button />
          </span>
          </header>


      </div>
    );
  }
}

export default App;
