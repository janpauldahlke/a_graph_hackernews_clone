import gql from 'graphql-tag';

export default gql`
query allLinks{
  allLinks{
    id,
    description,
    url
  }
}
`
