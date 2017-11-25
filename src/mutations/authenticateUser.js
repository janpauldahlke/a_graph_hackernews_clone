import gql from 'graphql-tag';

const AUTHENTICATE_USER_MUTATION = gql`
mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(
      email: $email,
      password: $password
    ) {
      id,
      token
    }
  }
`

export default AUTHENTICATE_USER_MUTATION;
