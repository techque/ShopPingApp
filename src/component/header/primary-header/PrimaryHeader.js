import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { styled, alpha } from '@mui/material/styles';

import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';

import FilterDrawer from '../../filter-drawer/FilterDrawer';

import { Cart } from '../../../context/Context';
import { Login } from '../../../context/Context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginRight: 0,
  marginLeft: 0,
  borderRadius: 0,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.20),
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '1.2rem',
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25rem',
    },
  },
}));

const loginModalStyle = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '98vw',
    sm: 600
  },
  backgroundColor: 'white',
  boxShadow: 10
};

export default function PrimaryHeader() {

  const {cart} = React.useContext(Cart);
  const {login, dispatchLogin} = React.useContext(Login);

  const navigate = useNavigate();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);
  const handleLoginModalOpen = () => setOpen(true);
  const handleLoginModalClose = () => setOpen(false);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCart = () => {
    navigate('/cart-details');
  };

  const handleLogin = () => {
    if ( ! login.login) {
      handleLoginModalOpen();
    } else {
      window.sessionStorage.removeItem('LoginToken');
      dispatchLogin({ type: 'LOGOUT', payload: { login: false, fname: '', lname: '' } });
      // console.log('Logged Out!');
    }
  };

  const initialInputState = {
    email: '',
    password: ''
  };
  const [inputState, setInputState] = React.useState(initialInputState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);

    setInputState(
      {
        ...inputState,
        [name]: value
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginModalClose();

    axios
      .post('https://nodeprojectapi.herokuapp.com/login', inputState)
      .then(
        (response) => {
          // console.log(response.data.data);

          const fname = response.data.data.firstname;
          const lname = response.data.data.lastname;

          window.sessionStorage.setItem('LoginToken', response.data.data.token);
          dispatchLogin({ type: 'LOGIN', payload: { login: true, fname: fname, lname: lname } });

          // console.log('Logged In!');
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      keepMounted
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton 
          size="large" 
          aria-label="show cart" 
          sx={{
            color: 'black',
            borderRadius: '4rem'
          }}
          onClick={handleCart}
        >
          {
            (cart.length === 0)
              ? ''
              : (
                <Typography 
                  variant="button"
                  sx={{
                    px: 1,
                    mx: 0.5,
                    border: '0.02rem solid #e60000',
                    borderRadius: '50%',
                    color: 'white',
                    backgroundColor: '#e60000'
                  }}
                >
                  {cart.length}
                </Typography>
              )
          }
          <ShoppingCartOutlinedIcon />
          <Typography 
            variant="button"
            sx={{ ml: 0.5 }}
          >
            Cart
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="login"
          sx={{
            color: 'black',
            borderRadius: '4rem'
          }}
          onClick={handleLogin}
        >
          <InputOutlinedIcon sx={{ mx: 1 }} />
          {
            ( ! login.login)
              ? <Typography variant="button">Login</Typography>
              : <Typography variant="button">Logout</Typography>
          }
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const renderLoginModal = (
    <Modal
      open={open}
      onClose={handleLoginModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Grid container sx={loginModalStyle}>
          <Grid item sm={4} 
            sx={{ 
              display: {
                xs: 'none', 
                sm: 'block' 
              },
              p: 4,
              backgroundColor: '#2874f0',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontFamily: 'Roboto'  
              }}
            >
              Login
            </Typography>
            <Typography
              sx={{
                my: 2,
                color: 'lightgrey'
              }}
            >
              Get access to your orders and much more
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box 
              component="form"
              sx={{
                p: 5
              }}
              onSubmit={handleSubmit}
            >
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
                >
                  Login
                </Button>
                <Typography 
                  sx={{
                    color: 'darkgrey',
                    mb: 1
                  }}
                >
                  OR
                </Typography>
                <Link to='/registration'
                  sx={{
                    fontFamily: 'Roboto',
                    color: 'darkgrey'
                  }}
                  onClick={handleLoginModalClose}
                >
                  Register
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );

  return (
    <>
      <AppBar 
        sx={{
          backgroundColor: '#2874f0',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            height: '64px'
          }}
        >
          <IconButton
            size="large"
            edge="start"
            sx={{
              padding: 0,
              marginLeft: 0,
              color: 'white'
            }}
          >
            <FilterDrawer />
          </IconButton>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Link 
              to='/home'
              style={{
                textDecoration: 'none'
              }}
            >
              <Typography
                sx={{
                  mx: 2,
                  color: 'white',
                  fontSize: '1.4rem'
                }}
              >
                ShopPing
              </Typography>
            </Link>
            <Search
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block'
                }
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search box' }}
              />
            </Search>
          </Box>
          <Box 
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            <IconButton 
              size="large" 
              aria-label="show cart" 
              sx={{
                color: 'white',
                borderRadius: '4rem'
              }}
              onClick={handleCart}
            >
              {
                (cart.length === 0)
                  ? ''
                  : (
                    <Typography 
                      variant="button"
                      sx={{
                        px: 1,
                        border: '0.02rem solid #e60000',
                        borderRadius: '50%',
                        color: 'white',
                        backgroundColor: '#e60000'
                      }}
                    >
                      {cart.length}
                    </Typography>
                  )
              }
              <ShoppingCartOutlinedIcon sx={{ mx: 0.5 }} />
              <Typography variant="button">Cart</Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="login"
              sx={{
                color: 'white',
                borderRadius: '4rem'
              }}
              onClick={handleLogin}
            >
              <InputOutlinedIcon sx={{ mx: 1 }} />
                {
                  ( ! login.login)
                    ? <Typography variant="button">Login</Typography>
                    : <Typography variant="button">Logout</Typography>
                }              
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show menu items"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                color: 'white'
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderLoginModal}
    </>
  );

}