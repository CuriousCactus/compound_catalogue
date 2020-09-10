import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const history = [
  { date: '2020-01-05', customerId: '11091700', amount: 3 },
  { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
]

export function AssayResultsTable(props) {
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Total price ($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((historyRow) => (
          <TableRow key={historyRow.date}>
            <TableCell component="th" scope="row">
              {historyRow.date}
            </TableCell>
            <TableCell>{historyRow.customerId}</TableCell>
            <TableCell align="right">{historyRow.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
