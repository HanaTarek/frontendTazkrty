import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const UpcomingEventCard = ({ image, name, date, address, onClick }) => {
  return (
    <Card onClick={onClick} 
    sx={{

      borderRadius: "25px",
      boxShadow: 3, 
      textAlign: "left",
      maxWidth: 345,
      margin: "auto" 
    }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
    </Card>

  );
};

export default UpcomingEventCard;
