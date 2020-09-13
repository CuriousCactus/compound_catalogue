import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Container from "@material-ui/core/Container";
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
    description: ""
  },
  {
    id: "assay_results",
    label: "Assay Results Catalogue",
    description: ""
  }
];

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
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
              <MenuItem key={option.id} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>
          <h1>{options[selectedIndex].label}</h1>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <p>{options[selectedIndex].description}</p>
        <CompoundTable choice={options[selectedIndex].id}/>
      </Container>
    </ApolloProvider>
  )
};

export default App;
