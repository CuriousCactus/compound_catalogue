import React from "react";
import { gql, useQuery } from "@apollo/client";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import { CompoundTableHeader } from "./table_header";
import { CompoundTableRow } from "./table_row";

export function CompoundTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("value");
  const { choice } = props;

  // Update table sorting based on table choice

  React.useEffect(() => {
      setOrderBy(choice === "compounds" ? "compound_id" : "value");
  }, [choice])

  // Query

  const QUERY_COMPOUNDS = gql`
    query {
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

  const QUERY_ASSAY_RESULTS = gql`
    query AssayResults($target: String!, $result: String!) {
      assay_results(target: $target, result: $result) {
        id
        result_id
        target
        result
        operator
        value
        unit
        compound {
          compound_id
          image
          molecular_formula
        }
      }
    }
  `;

  // Column order for the table

  var columnOrder = []
  var query = ""

  if (choice === "assay_results") {
    var target = "Bromodomain-containing protein 4"
    var result = "IC50"
    query = QUERY_ASSAY_RESULTS
    columnOrder = [
      "result_id",
      "target",
      "result",
      "operator",
      "value",
      "unit",
      "compound_id",
      "image"
    ]
  } else {
    query = QUERY_COMPOUNDS
    columnOrder = [
      "compound_id",
      "molecular_weight",
      "molecular_formula",
      "smiles",
      "num_rings",
      "ALogP",
      "image"
    ]
  }

  const { loading, error, data } = useQuery(
    query, {
      pollInterval: 5000,
      variables: { target, result }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  var unsortedData = ""
  if (choice === "assay_results") {
    unsortedData = data.assay_results
  } else {
    unsortedData = data.compounds
  }

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
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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
    return order === "desc"
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

  const sortedData = stableSort(unsortedData, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <React.Fragment>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Table stickyHeader>
        <CompoundTableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} columnOrder={columnOrder} choice={choice}/>
        <TableBody>
          {sortedData.map((dataRow) => (
            <CompoundTableRow key={dataRow.id} dataRow={dataRow} columnOrder={columnOrder} choice={choice}/>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
