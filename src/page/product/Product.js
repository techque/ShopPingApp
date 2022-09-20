import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid, Box, Typography, Button, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Cart } from '../../context/Context';

export default function Product() {

  const [product, setProduct] = useState();
  const {dispatchCart} = useContext(Cart);

  const { productId } = useParams();
  const navigate = useNavigate();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(
    () => {
      axios
        .get(`http://localhost:4000/products?id=${productId}`)
          .then(
            (response) => {
              setProduct(response.data[0]);
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          );
    }, [productId]
  );

  const handleBuyNow = (event) => {
    dispatchCart({
      type: 'ADD_TO_CART',
      productId: Number(productId)
    });

    navigate('/cart-details');
  };

  return (
    <Container maxWidth="xl">
      {
        ( ! product)
          ? (
              <Grid container>
                <Grid 
                  item 
                  xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'
                  }}
                >
                  <CircularProgress 
                    size="3rem"
                    sx={{
                      color: '#2874f0'
                    }}
                  />
                </Grid>
              </Grid>
            )
          : (
              <Grid 
                container 
                spacing={4}
                sx={{
                  pt: '1rem',
                  pb: '2rem'
                }}
              >
                <Grid item xs={12} sm={6} md={6} lg={5}>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "lightgrey",
                      "--swiper-pagination-color": "lightgrey",
                      height: '30vw'
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                  >
                    {
                      product.images.map(
                        (image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img               
                                src={image}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  height: '30vw',
                                  margin: 'auto',
                                  objectFit: 'scale-down'
                                }}
                              />
                            </SwiperSlide>      
                          );
                        }
                      )
                    }
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    style={{
                      margin: '2rem auto'
                    }}
                  >
                    {
                      product.images.map(
                        (image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img               
                                src={image}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  height: '6vw',
                                  margin: 'auto',
                                  objectFit: 'scale-down'
                                }}
                              />
                            </SwiperSlide>      
                          );
                        }
                      )
                    }
                  </Swiper>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={3}>
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
                    <Typography variant="h4">
                      &#8377;{product.price}/-
                    </Typography>
                    <Typography variant="h6">
                      &#9733;{product.rating}
                    </Typography>
                  </Box>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${product.memory} GB Memory`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${product.storage} GB Storage`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${product.camera} Camera`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${product.battery} mAh Battery`} />
                    </ListItem>
                  </List>
                  <Box
                    sx={{
                      my: '1rem'
                    }}
                  >
                    <Box>
                      <Button 
                        variant="outlined" 
                        size="large"
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{
                          width: '100%',
                          my: '0.2rem',
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
                    </Box>
                    <Box>
                      <Button 
                        variant="outlined" 
                        size="large"
                        startIcon={<ShoppingBagOutlinedIcon />}
                        sx={{
                          width: '100%',
                          my: '0.2rem',
                          color: '#2874f0'
                        }}
                        onClick={handleBuyNow}
                      > 
                        Buy Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )
      }
    </Container>
  )
}
