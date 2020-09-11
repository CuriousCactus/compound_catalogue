import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const GET_DOGS = gql`
  query {
    assay_results(compound_id: "1175669") {
      id
      target
      result
      operator
      value
      unit
    }
  }
`;

export function AssayResultsTable(props) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Result ID</TableCell>
          <TableCell>Protein Target</TableCell>
          <TableCell>Result Type</TableCell>
          <TableCell>Result</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.assay_results.map((historyRow) => (
          <TableRow key={historyRow.id}>
            <TableCell>{historyRow.id}</TableCell>
            <TableCell>{historyRow.target}</TableCell>
            <TableCell>{historyRow.result}</TableCell>
            <TableCell>{historyRow.operator+" "+historyRow.value+" "+historyRow.unit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
