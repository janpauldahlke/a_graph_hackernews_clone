import gql from 'graphql-tag';

//there is missing postedBy id somehow here research ass fuck

const CREATE_VOTE_MUTATION = gql`
mutation CreateVoteMutation($userId: ID!, $linkId: ID!) {
    createVote(userId: $userId, linkId: $linkId) {
      id
      link {
        postedBy {
          id,
          votes {
              id
          }
        },
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

export default CREATE_VOTE_MUTATION;
