import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabsBar = () => {
  const [value, setValue] = useState('all');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        centered
        sx={{ borderBottom: '1px solid gray' }}
      >
        <Tab value="all" label="All" />
        <Tab value="active" label="Active" />
        <Tab value="completed" label="Completed" />
      </Tabs>
    </Box>
  );
};

export default TabsBar;
