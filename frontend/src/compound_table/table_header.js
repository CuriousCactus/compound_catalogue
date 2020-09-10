import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export function CompoundTableHeader(props) {
  const { order, orderBy, onRequestSort, headers } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headers.map((header) => (
          <TableCell key={header.name} sortDirection={orderBy === header.name ? order : false}>
            <TableSortLabel active={orderBy === header.name} direction={orderBy === header.name ? order : 'asc'} onClick={createSortHandler(header.name)}>
              {header.verbose_name}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}