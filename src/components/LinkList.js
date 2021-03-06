import React, { Component } from 'react';
import Link from './Link';
import {graphql} from 'react-apollo';

import * as _ from 'lodash';

import ALL_LINKS_QUERY from '../queries/getAllLinks';
import {USER_ID} from '../constants.js'

class LinkList extends Component {

  //https://www.howtographql.com/react-apollo/6-more-mutations-and-updating-the-store/

  // updateCacheAfterVote = (store, createVoteMutation, linkId) => {
  //
  //   const data = store.readQuery({query: ALL_LINKS_QUERY})
  //   const votedLink = data.allLinks.find(link => link.id === linkId)
  //   votedLink.votes = this.props.link.votes.length;
  //   store.writeQuery({query: ALL_LINKS_QUERY, data})
  // }

  render() {

    const userId = localStorage.getItem(USER_ID)

    if(this.props.loading){
      return(<div>Loading...</div>)
    }

    if(!this.props.loading && userId){

      return (
        <div className="card" style={{margin: "10px", padding: "10px"}}>
        {_.map(this.props.links.allLinks, ((link, index) => {
          return <Link
            key={link.id}

            link={link}
            index={index}
            />
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
