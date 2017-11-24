import React, { Component } from 'react';
import Link from './Link';
import {graphql} from 'react-apollo';

import * as _ from 'lodash';

import ALL_LINKS_QUERY from '../queries/getAllLinks';


class LinkList extends Component {

  render() {

    if(this.props.loading){
      return(<div>Loading...</div>)
    }

    if(!this.props.loading){
      return(
        <div>
        {_.map(this.props.links.allLinks, ((link) => {
          return <Link key={link.id} link={link} />
        }))}
        </div>
      )
    }
  }
}
                                      //a man needs a name! named queries are prttier
export default graphql(ALL_LINKS_QUERY, {name: 'links' })(LinkList);
