import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectOperation({setOperation, operation}) {
  const handleChange = (event) => {
    setOperation(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operation}
          label="Operation"
          onChange={handleChange}
        >
          <MenuItem value={1}> + </MenuItem>
          <MenuItem value={2}> - </MenuItem>
          <MenuItem value={3}> x </MenuItem>
        </Select>
    </Box>
  );
}