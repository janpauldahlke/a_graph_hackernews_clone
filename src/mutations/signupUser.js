import gql from 'graphql-tag';

const SIGNUP_USER_MUTATION = gql`
mutation SignupUserMutation($email: String!, $password: String!, $name: String!) {
    signupUser(
      email: $email,
      password: $password,
      name: $name
    ) {
      id
      token
    }
  }
`

export default SIGNUP_USER_MUTATION;
