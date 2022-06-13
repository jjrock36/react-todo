import React from 'react';
import Input from './Input';
import List from './List';
import { Box } from '@mui/material';
import { useGlobalContext } from '../context';

const Active = () => {
  const { todoList } = useGlobalContext();
  const list = todoList.filter((item) => !item.isCompleted);

  return (
    <Box>
      <Input />
      <List list={list} />
    </Box>
  );
};

export default Active;
