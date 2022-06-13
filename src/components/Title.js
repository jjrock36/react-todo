import React from 'react';
import { Typography } from '@mui/material';

const Title = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      align="center"
      sx={{ mt: 4, mb: 5 }}
    >
      #todo
    </Typography>
  );
};

export default Title;
