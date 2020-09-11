import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export function CompoundTableHeader(props) {
  const { columnOrder, order, orderBy, onRequestSort, headers } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  // Gets the verbose name of the propery from the headers query
  function getByValue(arr, value) {
    var o;
    for (var i=0, iLen=arr.length; i<iLen; i++) {
      o = arr[i];
      for (var p in o) {
        if (o.hasOwnProperty(p) && o[p] === value) {
          return o.verbose_name;
        }
      }
    }
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell/>
        {columnOrder.map((columnName) => (
          <TableCell key={columnName} sortDirection={orderBy === columnName ? order : false}>
            <TableSortLabel active={orderBy === columnName} direction={orderBy === columnName ? order : 'asc'} onClick={createSortHandler(columnName)}>
              {getByValue(headers, columnName)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}