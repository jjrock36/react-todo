import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Delete = () => {
  return (
    <Container>
      <FaTrashAlt />
      delete all
    </Container>
  );
};

const Container = styled.button`
  padding: 1.25rem 2.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #eb5757;
  color: #ffffff;
`;

export default Delete;
