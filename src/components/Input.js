import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';

const Input = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
      <InputField id="outlined-basic" label="add details" variant="outlined" />
      <Button variant="contained" size="large">
        Add
      </Button>
    </Box>
  );
};

const InputField = styled(TextField)`
  width: 80%;
  margin-right: 1.5rem;
`;

export default Input;
