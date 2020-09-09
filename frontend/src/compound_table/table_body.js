import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export function CompoundTableBody(props) {
  const { tableData } = props;

  return (
    <TableBody>
      {tableData.map(({id, compound_id, smiles, molecular_weight, ALogP, molecular_formula, num_rings, image }) => (
        <TableRow hover key={id}>
          <TableCell>{id}</TableCell>
          <TableCell>{compound_id}</TableCell>
          <TableCell>{smiles}</TableCell>
          <TableCell>{molecular_weight}</TableCell>
          <TableCell>{ALogP}</TableCell>
          <TableCell>{molecular_formula}</TableCell>
          <TableCell>{num_rings}</TableCell>
          <TableCell>{image}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}