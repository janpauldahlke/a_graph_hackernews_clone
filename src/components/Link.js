import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import CREATE_VOTE_MUTATION from '../mutations/createVote.js';

import {USER_ID} from '../constants.js';
import IconLike from './IconLike.js'
import {timeDifferenceForDate} from '../util/timeDifference.js';


class Link extends Component {


  voteForLink = async () => {
    const userId = localStorage.getItem(USER_ID);
    const voterIds = this.props.link.votes.map(vote => vote.user.id)
    if(voterIds.includes(userId)) {
      console.log(`User (${userId}) already voted for this link`)
      return
    }

    const linkId = this.props.link.id;
    await this.props.createVoteMutation({
      variables : {
        userId,
        linkId,
      }
    })
  }


  render () {

    return(
      <li className="list-group-item">
        <span>{this.props.link.description}</span>&nbsp;
        <a href={this.props.link.url}>{this.props.link.url}</a>&nbsp;
          <IconLike

            onClick={() => {
              this.voteForLink()
            }}
            />
          <div>
            <span>{/*this.props.links.votes.length*/} votes</span>&nbsp;
            <span>posted by {this.props.link.postedBy ? this.props.link.postedBy.name : 'Unknow'} {timeDifferenceForDate(this.props.link.createdAt)}</span>
          </div>
      </li>
    );
  }
}

// export default compose(
//   graphql (CREATE_VOTE_MUTATION, {name : 'createVoteMutation'})
// )(Link);

export default graphql(CREATE_VOTE_MUTATION, {
  name: 'createVoteMutation'
})(Link);
