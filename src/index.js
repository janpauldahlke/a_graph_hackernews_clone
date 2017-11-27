import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

//add apollo related stuff
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//point to API, the sticky end!
const httpLink = new HttpLink({uri: 'http://localhost:60000/simple/v1/cjadthxsv0004011107e6fpnm'});

//this might have been missing fpr update
//dosc here // https://www.apollographql.com/docs/react/features/cache-updates.html
//
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
});

//show your cache hole
//console.log('cache from index', cache)

//prepare client
const client = new ApolloClient({
  link: httpLink,
  cache //es6 here
});

//wrap app into things

ReactDOM.render(

  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
