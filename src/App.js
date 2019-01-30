import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    clicks:0,
  };
  appp=(evt)=> {
    this.setState({clicks: this.state.clicks + 1});
  }
  render() {
    return (
      <div>
        <div>
          <h2>No.of clicks:{this.state.clicks}</h2>
        </div>
        <img src="https://trellis.co/wp-content/uploads/2015/09/hidden_meanings_facts_within_famous_logos_cover_image.jpg" width="100" height="50" onClick={this.appp}/>
        <p>Click the logo</p>
      </div>
    );
  }
}

export default App;
