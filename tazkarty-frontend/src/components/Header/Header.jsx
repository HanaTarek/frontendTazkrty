import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
        <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider', borderRadius:"25px" }}>

          <Typography
            variant="h5"
            component="div"
          >
            Tazkarty
          </Typography>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <IconButton>
              <PersonOutlinedIcon></PersonOutlinedIcon>
            </IconButton>
          </Box>
        </Toolbar>
  );
};

export default Header;