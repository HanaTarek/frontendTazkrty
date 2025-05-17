import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EventsContainer from '../EventsContainer/EventsContainer';
import {
  TextField,
  Button,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Select from 'react-select';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    const card = document.querySelector('.card');
    if (!card.contains(e.target)) {
      navigate('/');
    }
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');

  const countries = [
    { label: 'Egypt', value: 'egypt' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    // Add more as needed
  ];

  const handleGenderChange = (e, newGender) => {
    if (newGender !== null) setGender(newGender);
  };

  const handleRoleChange = (e, newRole) => {
    if (newRole !== null) setRole(newRole);
  };

  const onSubmit = async (e) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    const DataToSend = {
      username: username,
      email: email,
      password: password,
      password2: password2,
      role: role,
      phone_number: phoneNumber,
      gender: gender,
      country: country
    }
    try {
      console.log("Data being sent:", DataToSend);
      const response = await axios.post('http://127.0.0.1:8000/users/register/', DataToSend, { headers: {'Content-Type': 'application/json' }});
      console.log('Registration successful:', response.data);
      setUsername('');
      setEmail('');
      setPassword('');
      setPassword2('');
      setPhoneNumber('');
      setGender('');
      setCountry('');
      navigate('/Signin');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };


  return (
    <div>
      <EventsContainer/>
      <section onClick={handleBackgroundClick}>

    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding={4}>
      <Card className="card" sx={{ maxWidth: 600, width: '100%', p: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Create an Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Name"
                  value={username}
                  {...register('username', {
                    required: 'User name is required',
                    pattern: {
                      value: /^[a-zA-Z0-9@./+\-_]+$/,
                      message:
                        'Only letters, numbers, and @/./+/-/_ characters are allowed',
                    },
                  })}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  {...register('phone_number', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9()+\-\s]+$/,
                      message: 'Enter a valid phone number',
                    },
                  })}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={!!errors.phone_number}
                  helperText={errors.phone_number?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={email}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.com$/i,
                      message: 'Enter a valid email',
                    },
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <ToggleButtonGroup
                  value={gender}
                  exclusive
                  onChange={handleGenderChange}
                  fullWidth
                >
                  <ToggleButton
                    value="male"
                    sx={{
                      flex: 1,
                      '&.Mui-selected': {
                        backgroundColor: '#ffc6a7',
                        color: 'grey',
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fbc0a7',
                      },
                    }}
                  >
                    Male
                  </ToggleButton>
                  <ToggleButton
                    value="female"
                    sx={{
                      flex: 1,
                      '&.Mui-selected': {
                        backgroundColor: '#ffc6a7',
                        color: 'grey',
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fbc0a7',
                      },
                    }}
                  >
                    Female
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'At least 8 characters required',
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                      message:
                        'Must include uppercase, lowercase, number & special char',
                    },
                  })}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={password2}
                  {...register('password2', {
                    required: 'Confirm password is required',
                    validate: (value) =>
                      value === password || 'Passwords do not match',
                  })}
                  onChange={(e) => setPassword2(e.target.value)}
                  error={!!errors.password2}
                  helperText={errors.password2?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  options={countries}
                  value={countries.find((c) => c.value === country)}
                  onChange={(option) => setCountry(option?.value || '')}
                  placeholder="Select Country"
                />
              </Grid>
                <Grid item xs={12}>
                  <ToggleButtonGroup
                    value={role}
                    exclusive
                    onChange={handleRoleChange}
                    fullWidth
                  >
                    <ToggleButton
                      value="user"
                      sx={{
                        flex: 1,
                        '&.Mui-selected': {
                          backgroundColor: '#ffc6a7',
                          color: 'grey',
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#fbc0a7',
                        },
                      }}
                    >
                      User
                    </ToggleButton>
                    <ToggleButton
                      value="organization"
                      sx={{
                        flex: 1,
                        '&.Mui-selected': {
                          backgroundColor: '#ffc6a7',
                          color: 'grey',
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#fbc0a7',
                        },
                      }}
                    >
                      Organization
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

              <Grid item xs={12}>
                <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: '#ffcdb2',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: 'ffcdb2',
                          },
                        }}
                      >
                        Register
                      </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  Already have an account? <a href="../Signin" style={{ fontWeight: 'bold' }}>Login here</a>
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

export default SignUp;
