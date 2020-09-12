import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";
import { CompoundTable } from "./compound_table/table"

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container maxWidth="xl">
        <h1>Compound Catalogue</h1>
        <CompoundTable choice="assay_results"/>
      </Container>
    </ApolloProvider>
  )
};

export default App;
