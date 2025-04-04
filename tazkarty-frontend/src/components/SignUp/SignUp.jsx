import './signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import EventsContainer from '../EventsContainer/EventsContainer';
import { Input, initMDB } from "mdb-ui-kit";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const SignUp = () => {
  initMDB({ Input });
  const [username , Setusername] = useState(""); 
  const [email , Setemail] = useState(""); 
  const [password , Setpassword] = useState(""); 
  const [password2 , Setpassword2] = useState("");
  const[role , Setrole] = useState("user"); 
  const navigation = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleRoleChange = (e) => {
    Setrole(e.target.value);
  }

  const onSubmit = async (e) => {
    if (Object.keys(errors).length > 0) {
            return;
        }

    const DataToSend = {
      username : username,
      email : email,
      password : password,
      password2 : password2,
      role : role
    }
    try {
      console.log("Data being sent:", DataToSend);
      const response = await axios.post('http://127.0.0.1:8000/users/register/',  DataToSend ,{ headers: {'Content-Type': 'application/json' },});
      console.log('Registration successful:', response.data);
      Setusername('');
      Setemail('');
      Setpassword('');
      Setpassword2('');
      navigation('/Signin');
    } catch (error) {

      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <div>
      <EventsContainer></EventsContainer>

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
        <div className="col-12 col-md-9 col-lg-7 col-xl-5">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-3">

              <h2 className=" text-center mb-5 modal-title" id="uniqueFlipModalLabel">Create an account</h2>

              <form onSubmit={handleSubmit(onSubmit)}>



                <div className="mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name='userName'
                    {
                      ...register( "username",{
                        required : "User name is required",
                        pattern: {
                              value: /^[a-zA-Z0-9@./+\-_]+$/,
                              message: "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters."
                             }
                      } )
                    }
                    value={username || ""}
                    placeholder="User Name" 
                    required=""
                    onChange={(e)=> { Setusername(e.target.value)}}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                  
                </div>
                   {errors.username && <p className="error-message" >{errors.username.message}</p>}
                </div>



                <div className="mb-4" >
                <div data-mdb-input-init className="form-outline">
                  <input
                    type='email'
                    name='email'
                    value={email || ""}
                    placeholder="Email" 
                    {
                      ...register("email",{
                        required: "Email is required",
                        pattern:{
                          value : /^\S+@\S+\.com$/i,
                          message: "Enter a valid email"
                        }
                      })
                    }

                    onChange={(e)=>{Setemail(e.target.value)}}
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                 
                </div>
                         {errors.email && <p className="error-message" >{errors.email.message} </p>}
                </div>

                <div className="mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type='password'
                    name='password'
                    value={password || ""}
                    placeholder="Password" 
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                            message: "Password must contain uppercase, lowercase, number, and special character"
                        }
                    })}
                    onChange={(e)=>{Setpassword(e.target.value)}}
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                    {errors.password && <p className="error-message" >{errors.password.message}</p>}
                </div>


                <div className="mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type='password'
                    name='password2'
                    value={password2 || ""}
                    placeholder="Confirm Password" 
                    {...register("password2", {
                        required: "Confirm password is required",
                        validate: value => value === password || "Passwords do not match"
                    })}
                    onChange={(e)=>{Setpassword2(e.target.value)}}
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>
                    {errors.password2 && <p className="error-message" >{errors.password2.message}</p>}
                </div>


                  <div class="col-md-7 mb-2 checking">

                  <h6 class="form-check form-check-inline role">Role: </h6>

                  <div class="form-check form-check-inline">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    id="userradio" 
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={handleRoleChange} />
                    <label class="form-check-label" for="userradio">User</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    id="maleGender"
                    name="role"
                    value="organization"
                    checked={role === 'organization'}
                    onChange={handleRoleChange} />
                    <label class="form-check-label" for="maleGender">Organization</label>
                  </div>

                  </div>


                <div className="d-flex justify-content-center">
                  <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-success btn-block btn-lg text-body"
                    >
                      Register
                    </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="../Signin" className="fw-bold text-body">
                    <u>Login here</u>
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


export default SignUp;
