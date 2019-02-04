//Option 1
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




//Option with styles
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    console.log('constructor')
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
      <div style = {{textAlign: 'center',
       background: 'linear-gradient(to bottom, #ff0066 0%, #660033 100%)'}}>
      <h1>VOTE!!!</h1>
      <h2>BREXIT</h2>
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


//Option 2
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      voteDeal: null,
      voteNodeal: null,
      voteNobrexit: null,
    };
    
  this.addVoteDeal = () => this.setState({voteDeal: this.state.voteDeal  + 1})
  this.addVoteNodeal = () => this.setState ({ voteNodeal: this.state.voteNodeal +1})  
  this.addVoteNobrexit = () => this.setState ({ voteNobrexit: this.state.voteNobrexit +1})
  }
  render() {
    console.log('render')
    return(

      <div style = {{textAlign: 'center',
       background: 'linear-gradient(to bottom, #ff0066 0%, #660033 100%)'}}>
      <h1>VOTE!!!</h1>
      <h2>BREXIT</h2>
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

