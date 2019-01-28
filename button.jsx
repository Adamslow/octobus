import React from 'react'

class Button extends React.Component {
  state = {
    count:null
  };

handleVote = () => {
  this.setState({ count: this.state.count + 1})
};

  render() {
    const styles = {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    }
    return(
    
      <span>
      <h1>{this.formatCount()}</h1>
      <button
      onClick = {this.handleVote}
      style = {styles}
      >DEAL</button>
      </span>

      
  );
}
formatCount() {
  const { count } = this.state;
  return count === 0 ? 0 : count;
}
}

export default Button
