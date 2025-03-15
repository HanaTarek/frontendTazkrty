import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';
import EventsContainer from '../EventsContainer/EventsContainer';
import Body from '../landing-page/Body/Body';
import { Input, initMDB } from "mdb-ui-kit";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  initMDB({ Input });
 
  const [email , Setemail] = useState(""); 
  const [password , Setpassword] = useState(""); 
  const [Token , SetToken] = useState("");
  const navigate = useNavigate();
  

  // const handleRoleChange = (e) => {
  //   Setrole(e.target.value);
  // }

  const handleSubmit = async (e) => {
    const DataToSend = {
      
      email : email,
      password : password,
      Token : Token,
      
    }
    e.preventDefault();
    try {
      console.log("Data being sent:", DataToSend);
      const response = await axios.post('http://127.0.0.1:8000/users/login/',  DataToSend ,{ headers: {'Content-Type': 'application/json' },});
      console.log('login successful:', response.data);
      
      Setemail('');
      Setpassword('');
      SetToken('');
      navigate('/');
    } catch (error) {

      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <div>
      <Body></Body>

<section
      style={{
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.2)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
    
      }}
    
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-5">

              <h2 className="text-uppercase text-center mb-5 modal-title" id="uniqueFlipModalLabel">Login an account</h2>

              <form onSubmit={handleSubmit} >

                

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type='email'
                    name='email'
                    value={email || ""}
                    placeholder="Email" 
                    required=""
                    onChange={(e)=>{Setemail(e.target.value)}}
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type='password'
                    name='password'
                    value={password || ""}
                    placeholder="Password" 
                    required=""
                    onChange={(e)=>{Setpassword(e.target.value)}}
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>

                

                  

                 

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    // onClick={() => window.location.href = "http://localhost:3000/"}
                  >
                    Login
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="../SignUp" className="fw-bold text-body">
                    <u>Register here</u>
                  </a>
                </p>


            


             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </div>
  );
}


export default Signin;
