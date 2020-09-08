import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_COMPOUNDS = gql`
  query {
    compounds	{
      compoundId
      molecularFormula
      molecularWeight
    }
  }
`;

export function CompoundInfo() {
  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  const { data, loading } = useQuery(
    QUERY_COMPOUNDS, {
      pollInterval: 500 // refetch the result every 0.5 second
    }
  );

  // should handle loading status
  if (loading) return <p>Loading...</p>;

  return data.compounds.map(({ compoundId, molecularFormula, molecularWeight }) => (
    <div key={compoundId}>
      <p>
        Compound - {compoundId}: {molecularFormula} {molecularWeight}
      </p>
    </div>
  ));
}