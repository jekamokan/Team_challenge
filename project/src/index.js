import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const GQL_SERVER_URL = 'http://shop-roles.node.ed.asmer.org.ua/graphql'

export const client = new ApolloClient({
  uri: GQL_SERVER_URL,
  cache: new InMemoryCache(),
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);


