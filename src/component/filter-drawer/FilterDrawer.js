import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';

import PriceFilter from '../filters/price-filter/PriceFilter';
import BrandFilter from '../filters/brand-filter/BrandFilter';
import RatingFilter from '../filters/rating-filter/RatingFilter';
import MemoryFilter from '../filters/memory-filter/MemoryFilter';
import StorageFilter from '../filters/storage-filter/StorageFilter';
import BatteryFilter from '../filters/battery-filter/BatteryFilter';

import useGenerateQueryPart from '../../hook/useGenerateQueryPart';

export default function FilterDrawer() {

  const navigate = useNavigate();

  // Filter Drawer
  const anchor = 'left';
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Filter Form  
  const handleFilterFormSubmit = (event) => {
    event.preventDefault();

    const queryStringParameters = [pricePart, brandPart, ratingPart, memoryPart, storagePart, batteryPart];
    const queryString = queryStringParameters
      .filter((parameter) => parameter !== '')
      .join('&');

    navigate({
      pathname: '/products',
      search: queryString
    });
  };

  // Price
  const [price, setPrice] = React.useState([15000, 20000]);
  const [minPrice, maxPrice] = price;
  const pricePart = `price_gte=${minPrice}&price_lte=${maxPrice}`;

  // Brands
  const [brands, setBrands] = React.useState([]);
  const brandPart = brands.map(brand => `brand=${brand.name}`).join('&');

  // Ratings
  const [ratings, setRatings] = React.useState({
    fourStarAndAbove: false,
    threeStarAndAbove: false,
  });

  const ratingSlugToQueryParts = {
    fourStarAndAbove: 'rating_gte=4&rating_lte=4.99',
    threeStarAndAbove: 'rating_gte=3&rating_lte=3.99'
  };
  const ratingPart = useGenerateQueryPart(ratings, ratingSlugToQueryParts);

  // Memory
  const [memory, setMemory] = React.useState({
    fourGb: false,
    sixGb: false,
    eightGb: false
  });

  const memorySlugToQueryParts = {
    fourGb: 'memory=4',
    sixGb: 'memory=6',
    eightGb: 'memory=8'
  };
  const memoryPart = useGenerateQueryPart(memory, memorySlugToQueryParts);

  // Storage
  const [storage, setStorage] = React.useState({
    sixtyFourGb: false,
    oneHundredTwentyEightGb: false,
    twoHundredFiftySixGb: false
  });

  const storageSlugToQueryParts = {
    sixtyFourGb: 'storage=64',
    oneHundredTwentyEightGb: 'storage=128',
    twoHundredFiftySixGb: 'storage=256'
  };
  const storagePart = useGenerateQueryPart(storage, storageSlugToQueryParts);

  // Battery
  const [battery, setBattery] = React.useState({
    smallCapacity: false,
    mediumCapacity: false,
    largeCapacity: false
  });

  const batterySlugToQueryParts = {
    smallCapacity: 'battery_gte=3000&battery_lte=3999',
    mediumCapacity: 'battery_gte=4000&battery_lte=4999',
    largeCapacity: 'battery_gte=5000&battery_lte=5999'
  };
  const batteryPart = useGenerateQueryPart(battery, batterySlugToQueryParts);

  const filterForm = () => (
    <Box
      component="form"
      sx={{ width: '16rem' }}
      onSubmit={handleFilterFormSubmit}
    >
      <Typography
        sx={{
          p: '1rem',
          fontSize: '1.4rem',
          fontWeight: '400'
        }}
      >
        Filters
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <PriceFilter 
            price={price}
            setPrice={setPrice}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <BrandFilter
            brands={brands}
            setBrands={setBrands} 
          />
        </ListItem>
        <Divider />
        <ListItem>
          <RatingFilter 
            ratings={ratings}
            setRatings={setRatings}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <MemoryFilter 
            memory={memory}
            setMemory={setMemory}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <StorageFilter 
            storage={storage}
            setStorage={setStorage}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <BatteryFilter 
            battery={battery}
            setBattery={setBattery}
          />
        </ListItem>
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: '1rem'
        }}
      >
        <Button 
          type="submit"
          variant="outlined"
          sx={{
            width: '100%',
            p: '1rem',
            color: '#2874f0'
          }}
          onClick={toggleDrawer(anchor, false)}
        >
          Search
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <React.Fragment key={anchor}>
        <MenuIcon 
          sx={{
            padding: '1rem'
          }}
          onClick={toggleDrawer(anchor, true)}
        />
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {filterForm(anchor)}
        </Drawer>
      </React.Fragment>
    </>
  );

}
