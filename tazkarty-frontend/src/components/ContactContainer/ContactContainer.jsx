import React from 'react';
import './ContactContainer.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const ContactContainer = () => {
  return (
    <div id = "contact-container" style={{ backgroundColor: "#f9d5c2", padding: "20px", borderRadius: "10px", margin: "10px 0px 0px 0px"}}>
      <div style={{ textAlign: 'left'}}>
      <h4>
        Contact Us
      </h4>
      </div>


 
      <p>
        <EmailOutlinedIcon></EmailOutlinedIcon>  
         Email: 
        <a href = "mailto:  [email protected]"> Tazkarty@gmail.com </a>
      </p>
      
      <p>
        
        <LocalPhoneRoundedIcon></LocalPhoneRoundedIcon>  
          Phone :
         555-555-5555
      </p>
    </div>          
  )
}
export default ContactContainer;