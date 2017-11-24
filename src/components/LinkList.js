import React, { Component } from 'react';
import Link from './Link';
import {graphql} from 'react-apollo';

import * as _ from 'lodash';

import getAllLinksQuery from '../queries/getAllLinks';


class LinkList extends Component {

  render() {
    
    if(this.props.loading){
      return(<div>Loading...</div>)
    }

    if(!this.props.loading){
      return(
        <div>

        {_.map(this.props.data.allLinks, ((link) => {
          return <Link key={link.id} link={link} />
        }))}
        </div>
      )
    }
  }
}

export default graphql(getAllLinksQuery)(LinkList);
