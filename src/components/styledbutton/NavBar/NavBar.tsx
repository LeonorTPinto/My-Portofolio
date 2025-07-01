import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';

const NavBar= ()=> {
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-evenly',
}));


  return (
    <>
       <AppBar position="absolute">
        <StyledToolbar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        </StyledToolbar>
    </AppBar>
    </>

  )
}

export default NavBar
