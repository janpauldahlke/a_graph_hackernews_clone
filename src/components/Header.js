import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {

  render() {
    return(
      <div>
        <div>
          <h5>hacker news</h5>
          <Link to="/" className="">new</Link>
          <Link to="/create" className="">create</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
