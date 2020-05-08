import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Layout from './Component/Layout/Layout'
import Burgerbuilder from './Container/Burgerbuilder/Burgerbuilder'

class App extends Component {
  state = {

    userInput : 'init'
  }
  
    render() {
    return (
    <div className="App">
        <Layout>
          <p>this is in app.js</p>
          <Burgerbuilder />
        </Layout>
   
    </div>
    );
}
}

export default App;
