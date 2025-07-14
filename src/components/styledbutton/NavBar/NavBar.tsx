import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { backdropClasses, styled } from '@mui/material';

const NavBar= ()=> {
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-evenly',
}));
 
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  }
}));

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <>
       <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem onClick={() => scrollToSection('about')}>      
             <MenuItem>About</MenuItem>
          </StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection('skills')}>
          <MenuItem>Skills</MenuItem>
        </StyledMenuItem>
              <StyledMenuItem onClick={() => scrollToSection('projects')}>

                <MenuItem>Projects</MenuItem>

              </StyledMenuItem>
        
        </StyledToolbar>
    </AppBar>
    </>

  )
}

export default NavBar
