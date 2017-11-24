import React, { Component } from 'react';


class Link extends Component {

  createLinkElement(){

  }


  render () {

    return(
      <div>
        <span>{this.props.link.description}</span>&nbsp;<a href={this.props.link.url}>{this.props.link.url}</a>
      </div>
    );
  }
}

export default Link;
