import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BatteryFilter(props) {

  const {battery, setBattery} = props;

  const handleChange = (event) => {
    const {name, checked} = event.target;

    setBattery({
      ...battery,
      [name]: checked
    });
  };

  return (
    <>
      <Accordion
        sx={{
          width: '100%',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            px: 0
          }}
        >
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 450
            }}
          >
            battery capacity
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 0
          }}
        >
          <FormControl fullWidth>
            <FormControlLabel 
              label="3000 - 3999 mAh"
              control={
                <Checkbox 
                  name="smallCapacity" 
                  checked={battery.smallCapacity} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="4000 - 4999 mAh"
              control={
                <Checkbox 
                  name="mediumCapacity" 
                  checked={battery.mediumCapacity} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="5000 - 5999 mAh"
              control={
                <Checkbox 
                  name="largeCapacity" 
                  checked={battery.largeCapacity} 
                  onChange={handleChange} 
                />
              } 
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </>
  )

}
