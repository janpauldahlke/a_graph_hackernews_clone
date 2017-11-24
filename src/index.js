import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//add apollo related stuff
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//point to API, the sticky end!
const httpLink = new HttpLink({uri: 'http://localhost:60000/simple/v1/cjadthxsv0004011107e6fpnm'});

//prepare client
const client = new ApolloClient({
  link: httpLink,
  cache : new InMemoryCache()
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
registerServiceWorker();
