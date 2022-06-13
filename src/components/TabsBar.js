import React, { useState } from 'react';
import Todo from './Todo';
import Completed from './Completed';
import Active from './Active';
import TabPanel from './TabPanel';
import { Tabs, Tab, Box } from '@mui/material';

const TabsBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{ borderBottom: '1px solid gray' }}
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Todo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Active />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Completed />
      </TabPanel>
    </Box>
  );
};

export default TabsBar;
