import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';
import EventsContainer from '../EventsContainer/EventsContainer';
import { Input, initMDB } from "mdb-ui-kit";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent
} from '@mui/material';

const Signin = () => {
  initMDB({ Input });

    const handleBackgroundClick = (e) => {
    const card = document.querySelector('.card');
    if (!card.contains(e.target)) {
      navigate('/');
    }
  };
 
  const [email , Setemail] = useState(""); 
  const [password , Setpassword] = useState(""); 
  const [access_token , Setaccess_token] = useState("");
  const navigate = useNavigate();
  

  // const handleRoleChange = (e) => {
  //   Setrole(e.target.value);
  // }

  const handleSubmit = async (e) => {
    const DataToSend = {
      
      email : email,
      password : password,
      access_token : access_token,
      
    }
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/login/',  DataToSend ,{ headers: {'Content-Type': 'application/json' },});
      console.log('login successful:', response.data);
      
      const { access_token, refresh_token, username, role, email } = response.data;

      
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("user", JSON.stringify({ email, username, role }));
      
      Setemail('');
      Setpassword('');
      Setaccess_token('');
      navigate('/');
    } catch (error) {

      console.error('Login failed:', error.response.data);
    }
  };

  return (
        <div>
      <EventsContainer />
      <section onClick={handleBackgroundClick}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding={4}>
          <Card className="card" sx={{ maxWidth: 600, width: '100%', p: 3 }}>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Login to your account
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => Setemail(e.target.value)}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => Setpassword(e.target.value)}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: '#ffcdb2', color: 'black', fontWeight: 'bold', '&:hover': { backgroundColor: '#fcd1bd' } }}
                    >
                      Login
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2" align="center">
                      Don’t have an account?{' '}
                      <a href="../SignUp" style={{ fontWeight: 'bold' }}>Register here</a>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </section>
    </div>
  );
};

export default Signin;
