import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function RatingFilter(props) {

  const {ratings, setRatings} = props;

  const handleChange = (event) => {
    const {name, checked} = event.target;

    setRatings({
      ...ratings,
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
            rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 0
          }}
        >
          <FormControl fullWidth>
            <FormControlLabel 
              label="4 &#9733; &#38; above"
              control={
                <Checkbox 
                  name="fourStarAndAbove" 
                  checked={ratings.fourStarAndAbove} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="3 &#9733; &#38; above"
              control={
                <Checkbox 
                  name="threeStarAndAbove" 
                  checked={ratings.threeStarAndAbove} 
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
