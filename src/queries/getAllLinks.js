import gql from 'graphql-tag';

const ALL_LINKS_QUERY = gql`
query allLinks{
  allLinks{
    id,
    createdAt,
    description,
    url,
    votes {
      id,
      user {
        id
      }
    },
    postedBy {
      id,
      name,
      votes {
        id
      }
    }
  }
}
`

export default ALL_LINKS_QUERY;
