import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from './Person/Person'
import Validation from './Validation/Validation'

class App extends Component {
  state = {

    userInput : 'init'
  }

  inputChangedHandler = (event) => {

    this.setState({userInput: event.target.value});
  }

  nameChangedHandler = (event) => {

    this.setState({userInput: event.target.value});
  }
  
    render() {
    return (
    <div className="App">

      <h1> i am react app hello world</h1>
      <input 
      type="text" 
      onChange = {this.inputChangedHandler}
      value={this.state.userInput}
      />

    <p>{this.state.userInput}</p>
    <p>the leng of the input is  {this.state.userInput.length }</p>
    <Person name="Lee" age="23" >hobby is sport</Person >
    <Person changed={this.nameChangedHandler} >hobby is sport</Person >
    <Validation inputLength={this.state.userInput.length}/>
   
    </div>
    );
}
}

export default App;
