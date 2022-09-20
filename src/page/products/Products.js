import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Box, Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

import { Cart } from '../../context/Context';

export default function Products() {

  const [products, setProducts] = useState([]);
  const {dispatchCart} = useContext(Cart);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`http://localhost:4000/products?${searchParams.toString()}`)
          .then(
            (response) => {
              setProducts(response.data);
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          );
    }, [searchParams]
  );

  const handleDetails = (event) => {
    const {value} = event.target;

    navigate(`/product/${value}`);
  };

  return (
    <Container maxWidth="xl">
      {
        (products.length !== 0)
          ? (
            <Grid 
              container 
              spacing={2}
              sx={{
                pt: '1rem',
                pb: '2rem'
              }}
            >
              {
                products.map(
                  (product, index) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                          sx={{
                            boxShadow: 0,
                            border: '0.02rem solid lightgrey',
                            borderRadius: '2%',
                          }}
                        >
                          <CardMedia
                            component="img"
                            alt={product.title}
                            image={
                              ( ! product.images)
                                ? '../../../../../image/products/lg/id1/lg1.png'
                                : product.images[0]
                            }
                            sx={{
                              width: '100%',
                              height: {
                                xs: '45vw',
                                sm: '30vw',
                                md: '25vw',
                                lg: '20vw',
                                xl: '15vw'
                              },
                              py: '1rem',
                              objectFit: 'scale-down'
                            }}
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">
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
                              <Typography variant="h6">
                                &#9733;{product.rating}
                              </Typography>
                            </Box>
                          </CardContent>
                          <CardActions
                            sx={{
                              flexDirection: 'column'
                            }}
                          >
                            <Button 
                              variant="outlined" 
                              size="large" 
                              startIcon={<ShoppingCartOutlinedIcon />} 
                              sx={{
                                width: '100%',
                                borderRadius: '0.2rem',
                                marginBottom: '0.4rem',
                                color: '#2874f0'
                              }}
                              onClick={
                                () => { 
                                  dispatchCart({
                                    type: 'ADD_TO_CART',
                                    productId: Number(product.id)
                                  }) 
                                }
                              }
                            >
                              Add To Cart
                            </Button>
                            <Button 
                              type="button"
                              name="detailsButton"
                              value={product.id}
                              variant="outlined" 
                              size="large"
                              startIcon={<FormatListBulletedOutlinedIcon />} 
                              sx={{
                                width: '100%',
                                marginLeft: '0 !important',
                                borderRadius: '0.2rem',
                                color: '#2874f0'
                              }}
                              onClick={handleDetails}
                            >
                              Details
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  }
                )
              }
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
                No product matched 
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
    </Container>
  )
}
