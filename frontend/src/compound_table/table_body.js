import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export function CompoundTableBody(props) {
  const { tableData } = props;

  return (
    <TableBody>
      {tableData.map(({ compoundId, molecularFormula, molecularWeight }) => (
        <TableRow hover tabIndex={-1}>
          <TableCell>{compoundId}</TableCell>
          <TableCell>{molecularFormula}</TableCell>
          <TableCell>{molecularWeight}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}