import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { EnhancedTable } from './EnhancedTable'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <EnhancedTable/>
    </div>
  </ApolloProvider>
);

export default App;
