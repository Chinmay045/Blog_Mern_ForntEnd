import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isSignUp, setIsSignUp] = useState(false);
  function handleChange(e) {
    setInputs((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  };

  // async function sendRequest(type = "login") {
  //   const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
  //     name: inputs.name,
  //     email: inputs.email,
  //     password: inputs.password
  //   }).catch(err => console.log(err));
  //   const data = await res.data;
  //   console.log(data);
  //   return data;
  // }

  async function sendRequest(type) {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => {
      if (err.response.request.status === 404) {
        alert("User does not exist");
        props.setIsLoggedIn(false);
      } else if (err.response.request.status === 400) {
        alert("Invalid password");
        props.setIsLoggedIn(false);
      }
    })
    let data = await res.data;
    return data;
  }


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(inputs);
  //   if (isSignUp) {
  //     sendRequest('signup').then(data => navigate("/blogs")).then((data) => console.log(data)).catch(err => "Error in signup");
  //   } else {
  //     sendRequest().then(data => console.log(data));
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (isSignUp) {
      sendRequest("signup")
        .then(data => navigate("/auth"))
        .catch(err => "Error in signup")
    } else {
      sendRequest("login")
        .then(data => localStorage.setItem("userID", data.user._id))
        .then(data => {
          props.setIsLoggedIn(true)
          navigate("/blogs")
        })
        .catch(err => "Error in login")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex"
          maxWidth={400}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >

          <Typography variant='h2' padding={3} textAlign="center" >{isSignUp ? "SignUp" : "Login"}</Typography>
          {isSignUp && <TextField name='name' onChange={handleChange} placeholder='Name' value={inputs.name} margin='normal' />
          }          <TextField name="email" onChange={handleChange} type={'email'} value={inputs.email} placeholder='Email' margin='normal' />
          <TextField name='password' onChange={handleChange} type={'password'} placeholder="Password" value={inputs.password} margin='normal' />
          <Button variant='contained' sx={{ borderRadius: 3, marginTop: 3 }} color='warning' type='submit'>Submit</Button>
          <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ borderRadius: 3 }} >Change  to {isSignUp ? "Login" : "SignUp"}</Button>

        </Box>
      </form>
    </div>

  )
}
