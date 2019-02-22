import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <div>Your name</div>
          <input placeholder="Input your name" onChange={this.handleInput}/>
          <div>You inputted: {this.state.name}</div>

      </div>
    );
  }
}

export default App;
