import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MemoryFilter(props) {

  const {memory, setMemory} = props;

  const handleChange = (event) => {
    const {name, checked} = event.target;

    setMemory({
      ...memory,
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
            memory
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 0
          }}
        >
          <FormControl fullWidth>
            <FormControlLabel 
              label="4 GB"
              control={
                <Checkbox 
                  name="fourGb" 
                  checked={memory.fourGb} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="6 GB"
              control={
                <Checkbox 
                  name="sixGb" 
                  checked={memory.sixGb} 
                  onChange={handleChange} 
                />
              } 
            />
            <FormControlLabel 
              label="8 GB"
              control={
                <Checkbox 
                  name="eightGb" 
                  checked={memory.eightGb} 
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
