import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Typography, Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PriceFilter(props) {

  const { price, setPrice } = props;
  const [ minPrice, maxPrice ] = price;

  const handlePriceChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'sliderPrice':
        setPrice(value);
        break;

      case 'minSelectPrice':
        setPrice([value, maxPrice]);
        break;

      case 'maxSelectPrice':
        setPrice([minPrice, value]);
        break;
      
      default:
        throw new Error('Invalid input name');
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '96%',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          sx={{
            py: '1rem',
            textTransform: 'uppercase',
            fontWeight: 450
          }}
        >
          Price
        </Typography>
        <Slider
          name="sliderPrice"
          value={price}
          min={10000}
          step={5000}
          max={30000}
          marks
          valueLabelDisplay="auto"
          size="small"
          onChange={handlePriceChange}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: '1rem'
          }}
        >
          <FormControl 
            size="small"
            sx={{
              width: '45%'
            }}
          >
            <InputLabel id="min-price-select-label">Min</InputLabel>
            <Select
              id="min-price-select"
              labelId="min-price-select-label"
              label="Min"
              name="minSelectPrice"
              value={minPrice}
              onChange={handlePriceChange}
            >
              <MenuItem value={10000}>10000</MenuItem>
              <MenuItem value={15000}>15000</MenuItem>
              <MenuItem value={20000}>20000</MenuItem>
              <MenuItem value={25000}>25000</MenuItem>
              <MenuItem value={30000}>30000</MenuItem>
            </Select>
          </FormControl>
          <Box component="span">to</Box>
          <FormControl 
            size="small"
            sx={{
              width: '45%'
            }}
          >
            <InputLabel id="max-price-select-label">Max</InputLabel>
            <Select
              id="max-price-select"
              labelId="max-price-select-label"
              label="Max"
              name="maxSelectPrice"
              value={maxPrice}
              onChange={handlePriceChange}
            >
              <MenuItem value={10000}>10000</MenuItem>
              <MenuItem value={15000}>15000</MenuItem>
              <MenuItem value={20000}>20000</MenuItem>
              <MenuItem value={25000}>25000</MenuItem>
              <MenuItem value={30000}>30000</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  )

}
