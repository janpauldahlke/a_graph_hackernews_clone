import React, { Component } from 'react';
import '../styles/App.css';

import LinkList from './LinkList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello cruel world</h1>
        <LinkList />
      </div>
    );
  }
}

export default App;
