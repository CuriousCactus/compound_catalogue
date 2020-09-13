import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { CompoundTable } from "./compound_table/table"

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  cache: new InMemoryCache()
});

const options = [
  {
    id: "compounds",
    label: "Compound Catalogue",
    description: "This table lists all of the compounds in the dataset. Sort the data by clicking on a column heading. Control how many rows are shown using the pagination controls. Click the arrow on the left of a row to expand it and see the assay results associated with that compound."
  },
  {
    id: "assay_results",
    label: "Compound Comparison",
    description: "This table shows all of the IC50 results for Bromodomain-containing protein 4. It is sorted by assay result value, showing that compound 1117973 is the most promising drug candidate by this measure."
  }
];

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedPageIndex, setSelectedPageIndex] = React.useState(0);

  const handleMenuItemClick = (event, index) => {
    setSelectedPageIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <ApolloProvider client={client}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {options.map((option, index) => (
              <MenuItem key={option.id} selected={index === selectedPageIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>
          <h1>{options[selectedPageIndex].label}</h1>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Box margin={5}>
          <p>{options[selectedPageIndex].description}</p>
        </Box>
        <CompoundTable choice={options[selectedPageIndex].id}/>
      </Container>
    </ApolloProvider>
  )
};

export default App;
