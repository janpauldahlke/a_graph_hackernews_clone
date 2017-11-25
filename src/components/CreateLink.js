import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import CREATE_LINK_MUTATION from '../mutations/createLink';
import ALL_LINKS_QUERY from '../queries/getAllLinks';

class CreateLink extends Component {

  constructor(props){
    super(props);

    this.state = {
      description: '',
      url: '',
      postedByUserId: 'cjae45pmq001x0111uvfvrlgp'
    }

    this.createLink = this.createLink.bind(this);
  }

  createLink(){
    this.props.mutate({
      variables : {
        url: this.state.url,
        description: this.state.description,
        postedByUserId: this.state.postedByUserId
      },
      refetchQueries : [{query: ALL_LINKS_QUERY}]
    })
  }

  render(){

    console.log('createProps',this.props)

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
              this.setState({url: e.target.value})
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


export default graphql(CREATE_LINK_MUTATION)(
  graphql(ALL_LINKS_QUERY)(CreateLink)
);
