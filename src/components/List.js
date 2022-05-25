import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import styled from '@emotion/styled';

const List = () => {
  return (
    <FormGroup>
      <LabelControl>
        <FormControlLabel control={<Checkbox />} label="hello" />
        <FaTrashAlt />
      </LabelControl>
      <FormControlLabel control={<Checkbox defaultChecked />} label="hello" />
      <Button variant="contained" color="error" size="large">
        delete all
      </Button>
    </FormGroup>
  );
};

const LabelControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default List;
