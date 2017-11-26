import React, { Component } from 'react';
import Link from './Link';
import {graphql} from 'react-apollo';

import * as _ from 'lodash';

import ALL_LINKS_QUERY from '../queries/getAllLinks';
import {USER_ID} from '../constants.js'

class LinkList extends Component {

  render() {

    const userId = localStorage.getItem(USER_ID)

    if(this.props.loading){
      return(<div>Loading...</div>)
    }

    if(!this.props.loading && userId){

      return (
        <div className="card" style={{margin: "10px", padding: "10px"}}>
        {_.map(this.props.links.allLinks, ((link, index) => {
          return <Link key={link.id} link={link} index={index} />
        }))}
        </div>
        )
      }

    if(!this.props.loading && !userId) {
        return(
          <div></div>
        );
    }

    if(!this.props.loading && this.props.links.error){
      return (
        <div>{this.props.links.error}</div>
      )
    }


  }
}
                                      //a man needs a name! named queries are prttier
export default graphql(ALL_LINKS_QUERY, {name: 'links' })(LinkList);
