import React, { Component } from 'react';
import { withApollo } from 'react-apollo';

import Link from './Link';
import SEARCH_IN_ALL_LINKS_QUERY from '../queries/searchInAllLinks.js';

class Search extends Component {

  state = {
    links : [],
    searchText : ''
  }


  executeSearch = async () => {

    const { searchText } = this.state;
    const result = await this.props.client.query({
      query: SEARCH_IN_ALL_LINKS_QUERY,
      variables: { searchText }
    })

    const links = result.data.allLinks;
    this.setState({ links })

  }

  render(){
    return(

      <div>
        <div>
            Search:

            <form
              onSubmit={(e)=> {
                e.preventDefault();
                this.executeSearch();
              }}
              >
            <input
              className="form-control"
              type="text"
              onChange={(e) => this.setState({
                searchText : e.target.value
              })}
              />
            </form>
            <button
              className="btn btn-success"
              onClick={(e) => {
                this.executeSearch()
              }}
              >OK</button>
            {
              this.state.links.map((link, index) =>
              <Link
                className="list-group-item"
                key={link.id}
                link={link}
                index={index} />
              )
            }
        </div>
      </div>
    );
  }
}

export default withApollo(Search);
