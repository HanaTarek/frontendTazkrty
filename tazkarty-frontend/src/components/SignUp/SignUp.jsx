import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  
  const [username , Setusername] = useState(""); 
  const [email , Setemail] = useState(""); 
  const [password , Setpassword] = useState(""); 
  const [password2 , Setpassword2] = useState(""); 

  const handleSubmit = async (e) => {
    const DataToSend = {
      username : username,
      email : email,
      password : password,
      password2 : password2
    }
    e.preventDefault();
    try {
      console.log("Data being sent:", DataToSend);
      const response = await axios.post('http://127.0.0.1:8000/users/register/',  DataToSend ,{ headers: {'Content-Type': 'application/json' },});
      console.log('Registration successful:', response.data);
      Setusername('');
      Setemail('');
      Setpassword('');
      Setpassword2('');
    } catch (error) {

      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <div>
      <h1 className="modal-title" id="uniqueFlipModalLabel">Sign Up</h1>
      <form onSubmit={handleSubmit} >

        <input 
        type='text'
        name='userName'
        value={username || ""}
        placeholder="User Name" 
        required=""
        onChange={(e)=> { Setusername(e.target.value)}}/>

        <input 
        type='email'
        className="form-control body-5" 
        id="uniqueSignupEmail" 
        name='email'
        value={email || ""}
        placeholder="Email" 
        required=""
        onChange={(e)=>{Setemail(e.target.value)}}/>


        <input
        type='password'
        name='password'
        value={password || ""}
        placeholder="Password" 
        required=""
        onChange={(e)=>{Setpassword(e.target.value)}}/>

        <input
        type='password'
        name='password2'
        value={password2 || ""}
        placeholder="Confirm Password" 
        required=""
        onChange={(e)=>{Setpassword2(e.target.value)}}/>

       <button type="submit">Submit</button>





      </form>

   </div>
  );
}


export default SignUp;
