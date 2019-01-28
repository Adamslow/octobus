import React, { Component } from 'react';
import Button from './button';


class App extends Component {
  state = {
    button: [
      { id: 1, result: 0},
      { id: 2, result: 0}
    ]
  };


  render() {
    const styles = {
      backgroundColor:'red',
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }

    return (
      <div style = {styles}>
      <nav className="navbar navbar-light bg-light">
  <span className="navbar-text">
    Vote!!!
  </span>
</nav>

        <header>


          <p>
            BREXIT
          </p>
          {this.state.button.map(button =>
            <Button
            key={button.id}
            value={button.button}/>)}

        </header>
      </div>
    );
  }
}

export default App;
