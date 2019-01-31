import React from 'react';

function Buttons() {
  return (
    <div>
        <button 
          type="button" 
          class="btn btn-secondary">DEAL</button> 
        <button 
          type="button" 
          class="btn btn-secondary">NO DEAL</button>
        <button 
          type="button" 
          class="btn btn-secondary">NO BREXIT</button>
      
    </div>
  );

}

export default Buttons






import React, {Component} from 'react';

class Buttons extends Component {
  constructor() {
    super()
    this.state = {
      count: null
    }

    this.handleVote = this.handleVote.bind(this)
  }
          handleVote() {
            this.setState (prevState => {
              return {
                count: prevState.count +1
              }
            })

  }

    render() {
      return (
        <div>
        <h1>{this.state.count}</h1>
        <button
        type="button"
        className="btn btn-secondary"
        onClick = {this.handleVote}>DEAL</button>
          <h1>{this.state.count}</h1>
        <button
        onClick = {this.handleVote}
        type="button"
        className="btn btn-secondary">NO DEAL</button>
          <h1>{this.state.count}</h1>
        <button
        onClick = {this.handleVote}
        type="button"
        className="btn btn-secondary">NO BREXIT</button>
        </div>

      );
    }




}

export default Buttons
