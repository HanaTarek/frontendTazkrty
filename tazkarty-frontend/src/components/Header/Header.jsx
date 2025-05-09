import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    setAnchorEl(null); 
    navigate('/signin'); 
  };


  return (
        <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider', borderRadius:"25px" , position: 'sticky', top: '0', background: "white", margin: "10px 5px 10px 5px" }}>
          <Link to ="/">
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily:'Century Gothic', fontWeight: '900'}}
          >
            Tazkarty
          </Typography>
          </Link>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleMenuOpen}>
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ mt: '45px' }} // Add margin to avoid overlap
        >
          {isAuthenticated ? (
            <>
              <MenuItem onClick={handleMenuClose}>
                {/* <Link
                  to="/profile"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Profile
                </Link> */}
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                {/* <Link
                  to="/history"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  History
                </Link> */}
              </MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/signin"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="/signup"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Sign Up
                </Link>
              </MenuItem>
            </>
          )}
        </Menu>
      </Box>
        </Toolbar>
  );
};

export default Header;