import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { AssayResultsTable } from "./assay_results_table";

export function CompoundTableRow(props) {
  const [open, setOpen] = React.useState(false);
  const { columnOrder, dataRow, choice } = props;

  // Create an array with key: id, value: actual path to image
  const reqImages = require.context("../images/", true, /\.png$/)
  const images = reqImages.keys().reduce(
    (images, path) => {
      const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
      images[key] = reqImages(path)
      return images
    }, {}
  )

  // Render the row depending on whether it is an image
  function CompoundTableCell( {columnName, dataRow} ) {
    if (choice === "assay_results") {
      if (columnName === "image") {
        return <TableCell><img src={images[dataRow.compound.compound_id]} alt={dataRow.compound.molecular_formula}/></TableCell>
      } else if (columnName === "compound_id" ) {
        return <TableCell>{dataRow.compound[columnName]}</TableCell>
      } else {
        return <TableCell>{dataRow[columnName]}</TableCell>
      }
    } else {
      if (columnName === "image") {
        return <TableCell><img src={images[dataRow.id]} alt={dataRow.molecular_formula}/></TableCell>
      } else {
        return <TableCell>{dataRow[columnName]}</TableCell>
      }
    }
  }

  return (
    <React.Fragment>
      <TableRow key={dataRow.id} className="compound_properties">
        {choice === "compounds" && (
          <TableCell>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
        {columnOrder.map((columnName) => (
          <CompoundTableCell key={columnName} columnName={columnName} dataRow={dataRow}/>
        ))}
      </TableRow>
      <TableRow key={dataRow.id+"_assay_results"} className="assay_results">
       <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
         <Collapse in={open} timeout="auto" unmountOnExit>
           <Box margin={1}>
             <AssayResultsTable compound_id={dataRow.id}/>
           </Box>
         </Collapse>
       </TableCell>
     </TableRow>
    </React.Fragment>
  );
}