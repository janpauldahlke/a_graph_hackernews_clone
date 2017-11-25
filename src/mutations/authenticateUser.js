import gql from 'graphql-tag';

const AUTHENTICATE_USER_MUTATION = gql`
mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`

export default AUTHENTICATE_USER_MUTATION;
