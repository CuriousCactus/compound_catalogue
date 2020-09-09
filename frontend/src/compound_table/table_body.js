import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export function CompoundTableBody(props) {
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
          <TableCell><img src={images[id]} alt={molecular_formula} /></TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}