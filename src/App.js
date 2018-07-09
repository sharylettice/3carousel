import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      status:'extend'
    }
  }
  onExtend=()=>{
    this.setState({status:'extend'})
  }
  onNarrow=()=>{
    this.setState({status:'narrow'})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.status==='extend'?<ComponentB onNarrow={this.onNarrow}/>:<ComponentA onExtend={this.onExtend}/>}
      </div>
    );
  }
}

export default App;
