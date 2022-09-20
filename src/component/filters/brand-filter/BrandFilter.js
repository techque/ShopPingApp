import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const brandNames = [
  { name: 'LG' },
  { name: 'Mi' },
  { name: 'Nokia' },
  { name: 'OPPO' },
  { name: 'Realme' },
  { name: 'Samsung' },
  { name: 'SONY' },
  { name: 'Vivo' }
];

export default function BrandFilter(props) {

  const { brands, setBrands } = props;

  const handleChange = (event, brands) => {
    setBrands(brands);
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
            brand
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 0
          }}
        >
          <FormControl fullWidth>
            <Autocomplete
              value={brands}
              size="small"
              multiple
              disableCloseOnSelect
              options={brandNames}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option, { selected }) => (
                <li 
                  {...props} 
                  style={{
                    padding: '0'
                  }}
                >
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                  />
                  {option.name}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} placeholder="Search Brand" variant="outlined" />
              )}
              onChange={handleChange}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </>
  )

}
