import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      voteDeal: null,
      voteNodeal: null,
      voteNobrexit: null,

    };
    this.addVoteDeal = this.addVoteDeal.bind(this)
    this.addVoteNodeal = this.addVoteNodeal.bind(this)
    this.addVoteNobrexit = this.addVoteNobrexit.bind(this)
  }
  addVoteDeal() {
    this.setState({voteDeal: this.state.voteDeal + 1})
  }
  addVoteNodeal() {
    this.setState ({ voteNodeal: this.state.voteNodeal +1})
  }
  addVoteNobrexit() {
    this.setState ({ voteNobrexit: this.state.voteNobrexit +1})
  }
  render() {
    return(
      <div>
      <navbar>VOTE!!!</navbar>
      <h1>BREXIT</h1>
      <h3>{this.state.voteDeal}</h3>
      <button onClick = {this.addVoteDeal}>DEAL</button><br />
      <h3>{this.state.voteNodeal}</h3>
      <button onClick = {this.addVoteNodeal}>NO DEAL</button><br />
      <h3>{this.state.voteNobrexit}</h3>
      <button onClick = {this.addVoteNobrexit}>NO BREXIT</button>


      </div>
    );
  }
};






export default App
