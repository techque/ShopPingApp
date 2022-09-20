import React from 'react'

import { Typography, Box, Container } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

export default function Orders() {

  return (
    <Container maxWidth="xl">
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
          Orders placed  
          <EmojiEmotionsOutlinedIcon
            sx={{
              fontSize: '2rem',
              color: '#2874f0'
            }}
          />
        </Typography>
      </Box>
    </Container>
  )

}
