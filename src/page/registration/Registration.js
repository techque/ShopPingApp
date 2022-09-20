import { useState } from 'react';
import { Typography, Grid, Box, InputLabel, Input, Button, Alert, Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

import axios from 'axios';
import { borderBottom } from '@mui/system';

export default function Registration() {

  const [isRegistered, setIsRegistered] = useState(false);

  const [open, setOpen] = useState(false);
  const handleBackDropClose = () => {
    setOpen(false);
  };
  const handleBackDropToggle = () => {
    setOpen(!open);
  };

  const backDrop = (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleBackDropClose}
    >
      {
        ( ! isRegistered)
          ? (
              <Alert severity="error">Something went wrong! Try again later</Alert>
          ) : (
              <Alert severity="success">You are registered! login or keep shopping</Alert>
          )
      }
    </Backdrop>
  );

  const initialInputState = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };
  const [inputState, setInputState] = useState(initialInputState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputState(
      {
        ...inputState,
        [name]: value
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://nodeprojectapi.herokuapp.com/register', inputState)
      .then(
        (response) => {
          console.log(response);
          setIsRegistered(response.data.success);
          handleBackDropToggle();
        }
      )
      .catch(
        (error) => {
          // console.log(error);
          setIsRegistered(false);
          handleBackDropToggle();
        }
      );
  };

  return (
    <Container maxWidth="xl">
      <Grid container
        sx={{
          justifyContent: 'center'
        }}  
      >
        <Grid item xs={12} sm={10} md={6}>
          <Box 
            component="form"
            sx={{
              p: 5
            }}
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h4"
              sx={{
                py: '1rem',
                mb: '3rem',
                borderBottom: '0.02rem solid dimgrey',
                color: 'grey'
              }}
            >
              Register
            </Typography>
            <InputLabel>First Name</InputLabel>
            <Input 
              name='fname'
              value={inputState.fname}
              type="text"
              sx={{
                display: 'block',
                width: '100%',
                mb: '2rem'
              }}
              onChange={handleChange}
            />
            <InputLabel>Last Name</InputLabel>
            <Input 
              name='lname'
              value={inputState.lname}
              type="text"
              sx={{
                display: 'block',
                width: '100%',
                mb: '2rem'
              }}
              onChange={handleChange}
            />
            <InputLabel>Email</InputLabel>
            <Input 
              name='email'
              value={inputState.email}
              type="text"
              sx={{
                display: 'block',
                width: '100%',
                mb: '2rem'
              }}
              onChange={handleChange}
            />
            <InputLabel>Password</InputLabel>
            <Input 
              name='password'
              value={inputState.password}
              type="password"
              sx={{
                display: 'block',
                width: '100%',
                mb: '2rem'
              }}
              onChange={handleChange}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button 
                type="submit" 
                variant="contained"
                size="large"
                sx={{
                  width: '100%',
                  border: '0.02rem solid #fb641b',
                  borderRadius: '0.1rem',
                  backgroundColor: '#fb641b',
                  color: 'white',
                  mb: 2
                }}
                onClick={handleSubmit}
              >
                Register
              </Button>
              <Button 
                type="reset" 
                variant="outlined"
                size="large"
                sx={{
                  width: '100%',
                  border: '0.02rem solid #fb641b',
                  borderRadius: '0.1rem',
                  color: 'dimgrey',
                  mb: 2
                }}
                onClick={() => { setInputState(initialInputState) }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {backDrop}
    </Container>
  )

}
