import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import { CompoundTableHeader } from './table_header';
import { CompoundTableRow } from './table_row';

export function CompoundTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('compoundId');

  // Query

  const QUERY_COMPOUNDS = gql`
    query {
      headers {
        name
        verbose_name
      }
      compounds {
        id
        compound_id
        smiles
        molecular_weight
        ALogP
        molecular_formula
        num_rings
        image
      }
    }
  `;

  const { loading, error, data } = useQuery(
    QUERY_COMPOUNDS, {
      pollInterval: 5000
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  // Column order for the table

  const columnOrder = [
    "compound_id",
    "molecular_weight",
    "molecular_formula",
    "smiles",
    "num_rings",
    "ALogP",
    "image"
  ]

  // Pagination

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sorting the data

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const sortedData = stableSort(data.compounds, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <React.Fragment>
      <Table stickyHeader>
        <CompoundTableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} headers={data.headers} columnOrder={columnOrder}/>
        <TableBody>
          {sortedData.map((dataRow) => (
            <CompoundTableRow key={dataRow.id} tableData={dataRow} columnOrder={columnOrder}/>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.compounds.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
