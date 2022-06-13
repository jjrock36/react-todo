import { Tab } from '@mui/material';
import React from 'react';

const TabLinks = (props) => {
  return (
    <>
      <Tab value={props.value} label={props.value} {...props} />
    </>
  );
};

export default TabLinks;
