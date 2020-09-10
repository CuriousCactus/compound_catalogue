import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { AssayResultsTable } from './assay_results_table';

export function CompoundTableRow(props) {
  const [open, setOpen] = React.useState(false);
  const { tableData } = props;

  // Create an array with key: id, value: actual path to image
  const reqImages = require.context('../images/', true, /\.png$/)
  const images = reqImages.keys().reduce(
    (images, path) => {
      const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
      images[key] = reqImages(path)
      return images
    }, {}
  )

  return (
    <React.Fragment>
      <TableRow hover key={tableData.id}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{tableData.id}</TableCell>
        <TableCell>{tableData.compound_id}</TableCell>
        <TableCell>{tableData.smiles}</TableCell>
        <TableCell>{tableData.molecular_weight}</TableCell>
        <TableCell>{tableData.ALogP}</TableCell>
        <TableCell>{tableData.molecular_formula}</TableCell>
        <TableCell>{tableData.num_rings}</TableCell>
        <TableCell><img src={images[tableData.id]} alt={tableData.molecular_formula} /></TableCell>
      </TableRow>
      <TableRow hover key={tableData.id+"_assay_results"}>
       <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
         <Collapse in={open} timeout="auto" unmountOnExit>
           <Box margin={1}>
             <AssayResultsTable/>
           </Box>
         </Collapse>
       </TableCell>
     </TableRow>
    </React.Fragment>
  );
}