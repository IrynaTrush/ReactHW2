import React, { Component } from 'react';
import Contracts from "./components/Contracts";

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="main">
        <div className="contactsList">
          <Contracts/>
        </div>
      </div>
    )
  }
}

export default App;
