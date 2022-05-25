import React from 'react';
import Input from './Input';
import List from './List';
import styledComponents from 'styled-components';

const Todo = () => {
  return (
    <Container>
      <Input />
      <List />
    </Container>
  );
};

const Container = styledComponents.div`
`;

export default Todo;
