import gql from 'graphql-tag';

const ALL_LINKS_QUERY = gql`
query allLinks{
  allLinks{
    id,
    description,
    url
  }
}
`

export default ALL_LINKS_QUERY;
