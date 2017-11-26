import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CREATE_LINK_MUTATION from '../mutations/createLink';
import ALL_LINKS_QUERY from '../queries/getAllLinks';

import {USER_ID} from '../constants.js'

class CreateLink extends Component {

  constructor(props){
    super(props);

    this.state = {
      description: '',
      url: '',
      postedById: '' //<3
    }

    this.createLink = this.createLink.bind(this);
  }

  //useing node 8 features
  createLink = async () => {

    //const userId = localStorage.getItem(USER_ID);

    const {description, url, postedById} = this.state //es6 destructering
    await this.props.createLink({
      variables : {
        description,
        url,
        postedById
      },refetchQueries : [{query: ALL_LINKS_QUERY}]
    })
    this.props.history.push('/')
  }

  render(){

    //console.log('createProps',this.props)
    //grab user
    const userId = localStorage.getItem(USER_ID)

  return(
    <div className="card">
      <form className="">

        <label className="">Enter Link description </label>
        <br />
        <input
          onChange={(e) => {
            this.setState({description: e.target.value})
          }}
          value={this.state.description}
          className="form-control"
          />
      </form>

        <form className="">
          <label className="">Enter URL </label>
          <br/>
          <input
            onChange={(e) => {
              this.setState({
                url: e.target.value,
                postedById : userId
              })
            }}
            value={this.state.url}
            className="form-control"
            />
        </form>

        <button
          onClick={(e) => {
            e.preventDefault();
            this.createLink();
          }}
          className="btn btn-lg btn-success">send</button>
    </div>
    )
  }
}


export default graphql(CREATE_LINK_MUTATION, {name: 'createLink'})(
  graphql(ALL_LINKS_QUERY)(CreateLink)
);
