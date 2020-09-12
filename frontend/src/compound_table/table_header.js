import React from 'react';
import { gql, useQuery } from '@apollo/client';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export function CompoundTableHeader(props) {
  const { columnOrder, order, orderBy, onRequestSort, choice } = props;

  // Get the formatted column headers

  const QUERY_HEADERS = gql`
    query {
      headers {
        name
        verbose_name
      }
    }
  `;

  const { data } = useQuery(QUERY_HEADERS);

  // Capitalises the first letter of each word in a string
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  // Gets the verbose name of the field from the headers query
  // If no match is found, strips underscores and capitalises first letters
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
    return titleCase(value.replace("_", " "))
  }

  // Trigger sorting by a column

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {choice === 'compounds' && (
          <TableCell/>
        )}
        {columnOrder.map((columnName) => (
          <TableCell key={columnName} sortDirection={orderBy === columnName ? order : false}>
            <TableSortLabel active={orderBy === columnName} direction={orderBy === columnName ? order : 'asc'} onClick={createSortHandler(columnName)}>
              {getByValue(data.headers, columnName)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}