import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//import { AUTH_TOKEN } from './constants.js';

import { BrowserRouter } from 'react-router-dom';

//add apollo related stuff
import { ApolloLink } from 'apollo-client-preset';
import { WebSocketLink } from 'apollo-link-ws';
//import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//point to API, the sticky end!
//const httpLink = new HttpLink({uri: 'http://localhost:60000/simple/v1/cjadthxsv0004011107e6fpnm'});

//this might have been missing fpr update
//dosc here // https://www.apollographql.com/docs/react/features/cache-updates.html
//
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
});
//


//credits to this guy here
//https://medium.com/@SunCerberus/setup-apollo-client-2-0-with-websocket-example-a879ca81aa83
const hasSubscriptionOperation = ({ query: { definitions } }) => {
  definitions.some(
    ({ kind, operation }) => {
      return kind === 'OperationDefinition' && operation === 'subscription'
    }
  )
}

const link = ApolloLink.split(
 hasSubscriptionOperation,
 new WebSocketLink({
   uri: 'ws://localhost:60000/subscriptions/v1/cjadthxsv0004011107e6fpnm',
   options : { reconnect : true }
 }),
  new HttpLink({
    uri : 'http://localhost:60000/simple/v1/cjadthxsv0004011107e6fpnm'
  })
)

//prepare client
const client = new ApolloClient({
  link,
  cache
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
