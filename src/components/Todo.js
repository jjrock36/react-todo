import React from 'react';
import Input from './Input';
import List from './List';
import { Box } from '@mui/material';
import { useGlobalContext } from '../context';

const Todo = () => {
  const { todoList } = useGlobalContext();

  return (
    <Box>
      <Input />
      <List list={todoList} />
    </Box>
  );
};

export default Todo;
