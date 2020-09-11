import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CompoundTable } from './compound_table/table'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CompoundTable/>
    </ApolloProvider>
  )
};

export default App;
