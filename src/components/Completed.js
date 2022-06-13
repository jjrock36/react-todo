import React from 'react';
import List from './List';
import { Box, Button } from '@mui/material';
import { useGlobalContext } from '../context';

const Completed = () => {
  const { todoList, deleteAll } = useGlobalContext();
  const list = todoList.filter((item) => item.isCompleted);

  return (
    <Box>
      <List list={list} />
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={deleteAll}
        sx={{ float: 'right' }}
      >
        delete all
      </Button>
    </Box>
  );
};

export default Completed;
