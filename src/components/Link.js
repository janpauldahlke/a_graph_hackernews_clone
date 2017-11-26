import React, { Component } from 'react';


class Link extends Component {

  createLinkElement(){

  }


  render () {

    return(
      <li className="list-group-item">
        <span>{this.props.link.description}</span>&nbsp;<a href={this.props.link.url}>{this.props.link.url}</a>
      </li>
    );
  }
}

export default Link;
