import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import {USER_ID, AUTH_TOKEN} from '../constants.js'

class Header extends Component {

  render() {

    const userId = localStorage.getItem(USER_ID);

    return(
      <div className="navbar" style={{background: '#a5a2a2'}}>
        <div className="container">
          <h5>hacker news</h5>
          {userId && (
            <div style={{}}>
              <Link to="/" className="nav-item">main</Link>
              <span className="nav-item"> | </span>
              <Link to="/create" className="nav-item">create</Link>
              <span className="nav-item"> | </span>
              <Link to="/search" className="navitem">search</Link>
              <span className="nav-item"> | </span>
            </div>
          )}

          {userId ?
            <div
              className="nav-item float-right"
              style={{cursor : 'pointer'}}
              onClick={() => {
                localStorage.removeItem(USER_ID);
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push('/')
              }}
              >Logout</div>
              :
              <Link to="/login" className="nav-item float-right">login</Link>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
