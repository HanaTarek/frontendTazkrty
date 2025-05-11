import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutIcon from '@mui/icons-material/Logout'; // Arrow-style logout icon
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  const handleIconClick = () => {
    if (token) {
      localStorage.clear();
      navigate('/Signin');
    } else {
      navigate('/Signin');
    }
  };

  return (
    <Toolbar
      sx={{
        justifyContent: 'space-between',
        borderBottom: 1,
        borderColor: 'divider',
        borderRadius: '25px',
        position: 'sticky',
        top: 0,
        background: 'white',
        margin: '10px 5px',
      }}
    >
      <Link to="/">
        <Typography
          variant="h5"
          component="div"
          sx={{ fontFamily: 'Century Gothic', fontWeight: '900' }}
        >
          Tazkarty
        </Typography>
      </Link>

      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <SearchIcon sx={{ mr: 1 }} />
        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
      </Box>

      <Box sx={{ display: 'flex' }}>
        <IconButton onClick={handleIconClick} title={token ? 'Logout' : 'Login'}>
          {token ? (
            <>
              <PersonOutlinedIcon />
              <LogoutIcon fontSize="small" sx={{ ml: 0.5 }} />
            </>
          ) : (
            <PersonOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default Header;
