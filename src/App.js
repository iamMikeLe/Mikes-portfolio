import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout.js";
import { BrowserRouter } from  "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
