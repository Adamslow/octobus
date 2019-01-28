import React, {Component} from 'react';
import './button.css'

class Button extends Component {
  constructor() {
    super()

    this.state = {
      count: null
    }
    this.handleVote = () => {
      this.setState ({ count: this.state.count + 1})
    }

  }
  render() {
    return(
      <div>
      <h1>{this.formatCount()}</h1>
      <button
      onClick = {this.handleVote}
      >Deal</button>
      </div>
    )
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 0 : count;

  }

}





export default Button
