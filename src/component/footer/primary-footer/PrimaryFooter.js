import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomListItem = styled(ListItem)(
  () => ({
    padding: '0 2rem',
  })
);

const LinkHeaderTypography = styled(Typography)(
  () => ({
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#878787',
    textTransform: 'uppercase'
  })
);

const LinkBodyTypography = styled(Typography)(
  () => ({
    color: 'white',
    textTransform: 'capitalize'
  })
);

export default function PrimaryFooter() {

  return (
    <>
      <Grid 
        container
        sx={{
          backgroundColor: '#172337',
          pt: '2rem', pb: '2rem',
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List dense>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkHeaderTypography variant="overline">about</LinkHeaderTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">stories</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">press</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">wholesale</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">corporate</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">career</LinkBodyTypography>
              </Link>
            </CustomListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List dense>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkHeaderTypography variant="overline">help</LinkHeaderTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">payment</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">shipping</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">cancelation</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">report</LinkBodyTypography>
              </Link>
            </CustomListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List dense>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkHeaderTypography variant="overline">policy</LinkHeaderTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">return policy</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">terms of use</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">security</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">privacy</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">sitemap</LinkBodyTypography>
              </Link>
            </CustomListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List dense>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkHeaderTypography variant="overline">social</LinkHeaderTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">facebook</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">twitter</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">youtube</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">instagram</LinkBodyTypography>
              </Link>
            </CustomListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <List dense>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkHeaderTypography variant="overline">contact</LinkHeaderTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">e-mail: care@shopping.com</LinkBodyTypography>
              </Link>
            </CustomListItem>
            <CustomListItem>
              <Link href="#" underline="none">
                <LinkBodyTypography variant="overline">Telephone: (055) 5698 8956</LinkBodyTypography>
              </Link>
            </CustomListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )

}
