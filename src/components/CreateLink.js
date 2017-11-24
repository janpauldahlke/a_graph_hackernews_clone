import React, { Component } from 'react';
import graphlql from 'react-apollo';

import CREATE_LINK_MUTATION from '../mutations/createLink';

class CreateLink extends Component {

  constructor(props){
    super(props);

    this.state = {
      description: '',
      url: ''
    }
  }

  render(){
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
    </div>
    )
  }
}


export default CreateLink;
