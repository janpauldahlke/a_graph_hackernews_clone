import React, { Component } from 'react';

import { graphql, compose} from 'react-apollo';


import {USER_ID, AUTH_TOKEN} from '../constants';

import AUTHENTICATE_USER_MUTATION from '../mutations/authenticateUser.js';
import SIGNUP_USER_MUTATION from '../mutations/signupUser.js' ;

class Login extends Component {

  state = {
    login : true, //switches between login and signup
    email: '',
    password: '',
    name: ''
  }

  confirm = async () => {
    console.log('confirm')
  }

  saveUserData = (id, token) => {
    localStorage.setItem(USER_ID, id)
    localStorage.setItem(AUTH_TOKEN, token)
  }


  render() {

    return (
      <div className="container card">
        <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
        <div>
          {!this.state.login && (
            <input
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})}
              type="text"
              placeholder='Your name'
              className="form-control"
              />
          )}
          <input
              value={this.state.email}
              onChange={(e) => { this.setState({email: e.target.value})}}
              type="text"
              placeholder='Your email address'
              className="form-control"
            />
            <input
                value={this.state.password}
                onChange={(e) => { this.setState({password: e.target.value})}}
                type="text"
                placeholder='Choose a safe password'
                className="form-control"
              />
          </div>
            <div>
              <div
                  className="btn btn-success"
                  onClick={() => this.confirm()}
                >{this.state.login ? 'login' : 'create Account'}</div>
              &nbsp;
                <div
                  className="btn btn-success"
                  onClick={() => this.setState({ login: !this.state.login})}
                  >{this.state.login ? 'need to create an account?' : 'already have an account?'}</div>
            </div>
        </div>

    );
  }
}


export default compose(
  graphql(SIGNUP_USER_MUTATION, {name: 'signupUserMutation'}),
  graphql(AUTHENTICATE_USER_MUTATION, {name : 'authenticateUserMutation'})
)(Login);

//export default Login;
