import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

const CustomGridContainer = styled(Grid)(
  () => ({
    padding: '1rem 0',
    backgroundColor: '#172337',
    borderTop: '0.02rem solid #878787'
  })
);

const CustomGridItem = styled(Grid)(
  () => ({
    padding: '1rem',
    fontSize: '1rem'
  })
);

const CustomTextItem = styled(Typography)(
  () => ({
    padding: '0 0.5rem',
    color: 'white',
    verticalAlign: 'top'
  })
);

export default function SecondaryFooter() {
  return (
    <>
      <CustomGridContainer container rowSpacing={2}>
        <CustomGridItem item xs={12} sm={6} md={3}>
          <img src="../../../../../image/secondary-footer/become-a-seller.svg" />
          <CustomTextItem component="span" variant="body2">
            Become a seller
          </CustomTextItem>
        </CustomGridItem>
        <CustomGridItem item xs={12} sm={6} md={3}>
          <img src="../../../../../image/secondary-footer/advertise.svg" />
          <CustomTextItem component="span" variant="body2">
            Advertise
          </CustomTextItem>
        </CustomGridItem>
        <CustomGridItem item xs={12} sm={6} md={3}>
          <img src="../../../../../image/secondary-footer/gift-cards.svg" />
          <CustomTextItem component="span" variant="body2">
            Gift Cards
          </CustomTextItem>
        </CustomGridItem>
        <CustomGridItem item xs={12} sm={6} md={3}>
          <img src="../../../../../image/secondary-footer/help-center.svg" />
          <CustomTextItem component="span" variant="body2">
            Help Center
          </CustomTextItem>
        </CustomGridItem>
        <Grid 
          item 
          xs={12} sm={12} md={12}
          sx={{
            p: 2,
            textAlign: {
              xs: 'left',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'center'
            },
          }}
        >
          <Typography 
            component="span" 
            variant="body2"
            sx={{
              fontSize: '1rem',
              color: 'white'
            }}
          >
            &#169; { new Date().getFullYear() } ShopPing.com
          </Typography>
        </Grid>
      </CustomGridContainer>
    </>
  )
}
