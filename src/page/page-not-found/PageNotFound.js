import { Container, Box, Typography } from '@mui/material';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export default function PageNotFound() {

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
          Page Not Found 
          <SentimentDissatisfiedOutlinedIcon
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
