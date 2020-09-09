import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { CompoundTable } from './compound_table/table'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server
});

const App = () => (
  <ApolloProvider client={client}>
    <CompoundTable/>
  </ApolloProvider>
);

export default App;
