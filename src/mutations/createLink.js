import gql from 'graphql-tag';

const CREATE_LINK_MUTATION = gql`
mutation createLinkMutation($description: String!, $url: String!, $postedById: ID!) {
   createLink(
     description: $description,
     url: $url,
     postedById: $postedById
   ) {
     id
     createdAt
     url
     description
     postedBy {
       id
       name,
       votes {
         id
       }
     },
     votes {
       id
     }
   }
 }
`

export default CREATE_LINK_MUTATION;
