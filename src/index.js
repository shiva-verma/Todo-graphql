import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloClient, ApolloProvider} from '@apollo/client'
import { HttpLink } from '@apollo/client';
import {InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
cache,
link:new HttpLink({
   uri:'https://delicate-wombat-59.hasura.app/v1/graphql',
headers:{
   'x-hasura-admin-secret':'bYIM15TxCi5rZ1agc7JA9CpNxmtkc9M1OTGAXJCtPiFUc2I2W0N7IHD5qF7cYrIw'
}
     }),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
          <App />
    </ApolloProvider>
  </React.StrictMode>
);

