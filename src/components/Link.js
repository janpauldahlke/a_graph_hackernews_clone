import React, { Component } from 'react';

class Link extends Component {
  render () {
    return(
      <div>
        <div>{this.props.link.description}&nbsp;
        <a href={this.props.link.url} target="_blank"   >{this.props.link.url}</a>
        </div>
      </div>
    );
  }
}

export default Link;
