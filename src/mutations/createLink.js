import gql from 'graphql-tag';

const CREATE_LINK_MUTATION = gql`
mutation createLink($description: String!, $url:String!, $postedByUserId: ID){
  createLink(description: $description, url: $url, postedById : $postedByUserId){
    id
  }
}
`

export default CREATE_LINK_MUTATION;
