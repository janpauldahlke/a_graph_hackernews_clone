import gql from 'graphql-tag';

const CREATE_LINK_MUTATION = gql`
mutation createLink($description: String!, $url:String!, $postedById: ID){
  createLink(description: $description, url: $url, postedById : $postedById){
    id,
    description,
    url,
    postedBy {
      id
    }
  }
}
`

export default CREATE_LINK_MUTATION;
