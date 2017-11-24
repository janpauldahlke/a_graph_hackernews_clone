import React, { Component } from 'react';
import '../styles/App.css';

import CreateLink from './CreateLink';
import LinkList from './LinkList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>hello cruel world</h1>

        <CreateLink />
        <br/>
        <br/>
        <LinkList />
      </div>
    );
  }
}

export default App;
