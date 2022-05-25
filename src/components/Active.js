import React from 'react';
import Input from './Input';
import List from './List';
import styledComponents from 'styled-components';

const Active = () => {
  return (
    <Container>
      <Input />
      <List />
    </Container>
  );
};

const Container = styledComponents.div`
`;

export default Active;
