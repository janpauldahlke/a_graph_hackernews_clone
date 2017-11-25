import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {

  render() {
    return(
      <div className="navbar" style={{background: '#a5a2a2'}}>
        <div>
          <h5>hacker news</h5>
          <Link to="/" className="nav-item">main</Link>
          <span className="nav-item"> | </span>
          <Link to="/create" className="nav-item">create</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
