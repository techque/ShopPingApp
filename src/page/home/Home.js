import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import { Box, Container, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import SecondaryHeader from '../../component/header/secondary-header/SecondaryHeader';

export default function Home() {

  return (
    <>
      <Grid container sx={{ mt: '4rem' }}>
        <Grid item xs={12}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide
              style={{
                width: '100vw',
              }}
            >
              <img 
                style={{
                  width: '100vw',
                }}
                src="../../../../../image/banner/banner1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                style={{
                  width: '100vw',
                }}
                src="../../../../../image/banner/banner2.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                style={{
                  width: '100vw',
                }}
                src="../../../../../image/banner/banner3.png"
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={12} sx={{ my: '1rem' }}>
          <SecondaryHeader />
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                my: '1rem', 
                textTransform: 'uppercase',
                textDecoration: 'solid underline #efc703 4px'
              }}
            >
              irresistible deals
            </Typography>
          </Grid>
          <Container maxWidth='xl'>
            <Grid item xs={12} container spacing={2} sx={{ mt: '1rem', mb: '3rem' }}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/lg/id1/lg1.png"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        LG
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/mi/id1/mi4.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        Mi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/nokia/id1/n1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        Nokia
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/oppo/id1/o1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        OPPO
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/realme/id1/r1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        Realme
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/samsung/id1/s1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        Samsung
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/sony/id1/s1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        SONY
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card 
                  sx={{
                    p: 2,
                    border: '0.02rem solid lightgrey',
                    borderRadius: '0.2rem',
                    boxShadow: 0
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="../../../../../image/products/vivo/id1/v1.webp"
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
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          textAlign : 'center'
                        }}
                      >
                        Vivo
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  )

}
