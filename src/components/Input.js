import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useGlobalContext } from '../context';
import styled from '@emotion/styled';

const Input = () => {
  const { item, handleInputChange, addItem } = useGlobalContext();
  const { id, name } = item;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
      <InputField
        id={id}
        label="add details"
        variant="outlined"
        value={name}
        onChange={handleInputChange}
      />
      <Button variant="contained" size="large" onClick={addItem}>
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
