import gql from 'graphql-tag';

const ALL_LINKS_QUERY = gql`
query allLinks{
  allLinks{
    id,
    createdAt,
    description,
    url,
    postedBy {
      id,
      name
    }
    votes {
      id,
      user {
        id
      }
    }
  }
}
`

export default ALL_LINKS_QUERY;
