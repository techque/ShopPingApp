import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, List, ListItem } from '@mui/material';
import Input from '@mui/material/Input';

import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

import axios from 'axios';

import { Cart } from '../../context/Context';
import { Login } from '../../context/Context';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 0, py: 2 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CartDetails() {

  const [products, setProducts] = useState([]);

  const {cart, dispatchCart} = useContext(Cart);
  const {login} = useContext(Login);
 
  const navigate = useNavigate();
  // console.log('I am called!');
  // console.log('Cart', cart);

  const cartProductIdFrequency = cart.reduce((cart, productId) => {
    const currentCount = cart[productId] ?? 0;
    return {
      ...cart,
      [productId]: currentCount + 1,
    };
  }, {});
  // console.log('CartProductIdFrequency: ', cartProductIdFrequency);

  const productIds = Object.keys(cartProductIdFrequency);
  // console.log(productIds);

  let queryString = '?id=invalid';
  if (productIds.length !== 0) {
    queryString = productIds.map(
      (productId) => {
        return `id=${productId}`;
      }
    ).join('&');
    queryString = ''.concat('?', queryString);
  }
  // console.log(queryString);

  useEffect(
    () => {
      axios
        .get(`http://localhost:4000/products${queryString}`)
          .then(
            (response) => {
              response.data.map(
                (product) => {
                  for (let cartProductId in cartProductIdFrequency) {
                    if (cartProductId == product.id) {
                      product.frequency = cartProductIdFrequency[cartProductId];                      
                    }
                  }
                  return product;
                }
              );
              // console.log('Products', products);
              setProducts(response.data);
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          );
    }, [queryString]
  );
  // console.log('Productsssssssssssssssssssssssssssssssssssssssss', products);

  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProductFrequencyChange = (event) => {
    const {name, value} = event.target;

    if (name === 'decrementProduct') {
      setProducts(
        products.map(
          (product) => {
            if (value == product.id) {
              if (product.frequency > 0) {
                --product.frequency;

                dispatchCart({
                  type: 'REMOVE_FROM_CART',
                  productId: Number(value)
                });
              }
            }        
            return product;
          }
        )
      );
    }

    if (name === 'incrementProduct') {
      setProducts(
        products.map(
          (product) => {
            if (value == product.id) {
              ++product.frequency;
            }        
            return product;
          }
        )
      );
      dispatchCart({
        type: 'ADD_TO_CART',
        productId: Number(value)
      });
    }

  };

  const calculateGrandTotal = () => {
    let grandTotal = 0;
    products.forEach(
      (product) => {
        grandTotal += Number(product.price) * Number(product.frequency);
      }
    );
    return grandTotal;
  };

  const placeOrder = (event) => {
    dispatchCart({
      type: 'REMOVE_CART'
    });

    navigate('/orders');    
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleTabChange}>
                <Tab label="PRODUCTS" />
                <Tab label="PRICE" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {
                (cart.length !== 0)
                  ? (
                    <List>
                      {
                        ( ! login.login)
                          ? ''
                          : (
                            <ListItem
                              sx={{
                                borderBottom: '0.02rem solid lightgrey'
                              }}
                            >
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography variant="body1">
                                    {login.fname.toUpperCase()}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography variant="h6">
                                    {login.lname.toUpperCase()}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </ListItem>
                          )
                      }
                      {
                        products.map(
                          (product, index) => {
                            return (
                              <ListItem key={index} sx={{ my: '1rem' }}>
                                <Grid container item>
                                  <Grid item xs={6} sm={3} md={3} lg={3}>
                                    <img 
                                      src={
                                        ( ! product.images)
                                          ? '../../../../../image/products/lg/id1/lg1.png'
                                          : product.images[0]
                                      } 
                                      alt="Product"
                                      style={{
                                        width: '25%'
                                      }}
                                    />
                                  </Grid>
                                  <Grid item xs={6} sm={6} md={5} lg={4}>
                                    <Typography 
                                      variant="h5" 
                                      component="div"
                                      sx={{
                                        fontSize: {
                                          xs: '1rem',
                                          sm: '1.2rem',
                                          md: '1.4rem'
                                        }
                                      }}
                                    >
                                      {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {product.subtitle}
                                    </Typography>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        my: '1rem'
                                      }}
                                    >
                                      <Typography variant="h6">
                                        &#8377;{product.price}/-
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid 
                                    item 
                                    xs={12} sm={3} md={3} lg={2}
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      my: {
                                        xs: '1rem',
                                        sm: 0
                                      }
                                    }}
                                  >
                                    <Box 
                                      sx={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                      }}
                                    >
                                      <Button
                                        name="decrementProduct"
                                        value={product.id}
                                        onClick={handleProductFrequencyChange}
                                        sx={{
                                          p: 0,
                                          border: '0.02rem solid lightgrey',
                                          borderRadius: '1rem',
                                          fontSize: '1rem',
                                          color: 'black'
                                        }}
                                      >
                                        -
                                      </Button>
                                      <Input 
                                        value={product.frequency}
                                        sx={{
                                          width: '20%',
                                          px: '0.4rem',
                                          mx: '0.4rem',
                                          border: '0.02rem solid lightgrey'
                                        }} 
                                      />
                                      <Button
                                        name="incrementProduct"
                                        value={product.id}
                                        onClick={handleProductFrequencyChange}
                                        sx={{
                                          p: 0,
                                          border: '0.02rem solid lightgrey',
                                          borderRadius: '1rem',
                                          fontSize: '1rem',
                                          color: 'black'
                                        }}
                                      >
                                        +
                                      </Button>
                                    </Box>
                                    <Button 
                                      type="button" 
                                      variant="outlined"
                                      sx={{
                                        width: '100%',
                                        mt: '1rem',
                                        borderRadius: '0.2rem',
                                        color: '#2874f0'
                                      }}
                                      onClick={
                                        () => { 
                                          dispatchCart({
                                            type: 'REMOVE_ALL_FROM_CART',
                                            productId: Number(product.id)
                                          }) 
                                        }
                                      }  
                                    >
                                      Remove
                                    </Button>
                                  </Grid>
                                </Grid>
                              </ListItem>
                            );
                          }
                        )
                      }
                    </List>
                  ) : (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '40vw'
                      }}
                    >
                      <Typography 
                        variant="h5"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          my: '2rem',
                          color: 'grey'
                        }}  
                      >
                        Cart is empty 
                        <SentimentDissatisfiedOutlinedIcon 
                          sx={{
                            fontSize: '2rem',
                            color: '#2874f0'
                          }}
                        />
                      </Typography>
                    </Box>
                  )
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
              {
                (cart.length !== 0)
                  ? (
                    <Grid container>
                      <Grid item xs={12} sm={12} md={8}>
                        <List>
                          {
                            products.map(
                              (product, index) => {
                                return (
                                  <ListItem key={index} sx={{ my: '1rem' }}>
                                    <Grid container item>
                                      <Grid item xs={10} sm={8} md={7}>
                                        <Typography 
                                          variant="h5" 
                                          component="div"
                                        >
                                          {product.title}
                                        </Typography>
                                        <Box
                                          sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            my: '0.4rem'
                                          }}
                                        >
                                          <Typography 
                                            variant="body1"
                                            sx={{
                                              color: 'dimgrey'
                                            }}
                                          >
                                            &#8377;{product.price}/-
                                          </Typography>
                                        </Box>
                                      </Grid>
                                      <Grid item xs={2} sm={4} md={2}>
                                        <Typography
                                          component="span"
                                          variant="h6"
                                        >
                                          x{product.frequency}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12} sm={12} md={3}
                                        sx={{
                                          my: {
                                            xs: '1rem',
                                            sm: 0
                                          }
                                        }}
                                      >
                                        <Box>
                                          <Typography
                                            component="span"
                                            variant="h6"
                                          >
                                            &#8377;{product.price * product.frequency}/-
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </ListItem>
                                );
                              }
                            )
                          }
                        </List>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}
                        sx={{
                          borderLeft: {
                            xs: 0,
                            md: '0.02rem solid lightgrey'
                          },
                          borderTop: {
                            xs: '0.02rem solid lightgrey',
                            md: 0
                          }
                        }}
                      >
                        <List sx={{ my: '0.5rem' }}>
                          <ListItem>
                            <Typography variant="h4">
                              Grand Total
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <Typography variant="h5">
                              &#8377;{ calculateGrandTotal() }/-
                            </Typography>
                          </ListItem>
                          <ListItem>
                            {
                              ( ! login.login)
                                ? (
                                    <Typography variant="overline">
                                      Login to place order
                                    </Typography>
                                  )
                                : (
                                  <Button 
                                    variant="outlined" 
                                    size="large"
                                    sx={{
                                      width: '100%',
                                      border: '0.02rem solid #2874f0',
                                      borderRadius: '0.2rem',
                                      my: 1
                                    }}
                                    onClick={placeOrder}
                                  >
                                    Place Order
                                  </Button>
                                )
                            }
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  ) : (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '40vw'
                      }}
                    >
                      <Typography 
                        variant="h5"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          my: '2rem',
                          color: 'grey'
                        }}  
                      >
                        Add products first 
                        <SentimentVerySatisfiedOutlinedIcon 
                          sx={{
                            fontSize: '2rem',
                            color: '#2874f0'
                          }}
                        />
                      </Typography>
                    </Box>
                  )
              }
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )

}
