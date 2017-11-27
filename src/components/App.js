import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import '../styles/App.css';

import { USER_ID } from '../constants.js'

import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Header from './Header';
import Login from './Login';
import Search from './Search';


class App extends Component {
  render() {

    const userId = localStorage.getItem(USER_ID)


    return (
      <div className="container">
        <Header />
        <div>
          <Switch>

            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
        </div>


        {(!userId && !window.location.pathname.includes('/login')) && (

          <div
            className="card"
            style={{margin: "10px", padding: "10px"}}
            >this is the brave new world, wanna read and nonsense stuff? login or create an account</div>
        )}

      </div>
    );
  }
}

export default App;
