import React from "react";
import { gql, useQuery } from "@apollo/client";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const GET_ASSAY_RESULTS = gql`
  query AssayResults($compound_id: ID!) {
    assay_results(compound_id: $compound_id) {
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
  const { compound_id } = props;
  const { loading, error, data } = useQuery(GET_ASSAY_RESULTS, {
    variables: { compound_id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <React.Fragment>
      <h2>Assay Results</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Result ID</TableCell>
            <TableCell>Protein Target</TableCell>
            <TableCell>Result Type</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.assay_results.map((assayResult) => (
            <TableRow key={assayResult.id}>
              <TableCell>{assayResult.id}</TableCell>
              <TableCell>{assayResult.target}</TableCell>
              <TableCell>{assayResult.result}</TableCell>
              <TableCell>{assayResult.operator+" "+assayResult.value+" "+assayResult.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
