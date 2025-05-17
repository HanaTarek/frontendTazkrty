import React, { useState, useEffect } from 'react';
import axios from 'axios';
import History from '../History/History.jsx';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Container,
  Box,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Wc as GenderIcon,
} from '@mui/icons-material';

const Profile = () => {


  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get user data from local storage
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          throw new Error("No user found. Please log in.");
        }

        const { email } = JSON.parse(storedUser);
        if (!email) {
          throw new Error("No email found in user data.");
        }

        // Fetch history from API
        const response = await axios.get(`http://127.0.0.1:8000/users/profile/${email}/`, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });

        console.log("Response Data:", response.data);

        // Check if response is JSON
        if (typeof response.data === "object") {
          setUserData(response.data || []);
        } else {
          throw new Error("Invalid response format. Expected JSON.");
        }
      } catch (err) {
        console.error("Error fetching history:", err);
        setError(err.message || "Error fetching history.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;




return (
          <Box
            sx={{
              padding: '3rem 2rem',
              borderRadius: '1rem',
              textAlign: 'center',
            }}
          >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
          mb: 4,
          gap: 3,
          paddingLeft: '11rem',
        }}
      >
        <Avatar sx={{ width: 120,
    height: 120,
    fontSize: '48px',
    fontWeight: 'bold',}}>
          {userData.username.charAt(0).toUpperCase()}
        </Avatar>

        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold">
            {userData.username}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Member Since {userData.memberSince}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon />
              <Typography variant="h6">{userData.phone_number}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <GenderIcon />
              <Typography variant="h6" textTransform="capitalize">
                {userData.gender}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <LocationIcon />
              <Typography variant="h6">{userData.country}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon />
              <Typography variant="h6">{userData.email}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <History />
    </Box>
    
  );
};

export default Profile;
