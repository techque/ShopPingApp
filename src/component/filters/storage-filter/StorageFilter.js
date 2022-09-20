import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function StorageFilter(props) {

  const {storage, setStorage} = props;

  const handleChange = (event) => {
    const {name, checked} = event.target;

    setStorage({
      ...storage,
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
            storage
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 0
          }}
        >
          <FormControl fullWidth>
            <FormControlLabel 
              label="64 GB"
              control={
                <Checkbox 
                  name="sixtyFourGb" 
                  checked={storage.sixtyFourGb} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="128 GB"
              control={
                <Checkbox 
                  name="oneHundredTwentyEightGb" 
                  checked={storage.oneHundredTwentyEightGb} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="256 GB"
              control={
                <Checkbox 
                  name="twoHundredFiftySixGb" 
                  checked={storage.twoHundredFiftySixGb} 
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
