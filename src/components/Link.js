import React, { Component } from 'react';

import IconLike from './IconLike.js'
import timeDifferenceForDate from '../util/timeDifference.js';


class Link extends Component {

  render () {

    return(
      <li className="list-group-item">
        <span>{this.props.link.description}</span>&nbsp;
        <a href={this.props.link.url}>{this.props.link.url}</a>&nbsp;
          <IconLike

            onClick={() => {
              console.log('onClick');
              /*https://stackoverflow.com/questions/28268835/react-onclick-event-on-component*/
            }}
            />
      </li>
    );
  }
}

export default Link;
