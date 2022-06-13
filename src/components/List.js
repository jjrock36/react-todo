import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import styled from '@emotion/styled';
import { useGlobalContext } from '../context';

const List = ({ list = [] }) => {
  const { handleCheckboxChange, deleteItem } = useGlobalContext();

  return (
    <FormGroup sx={{ mb: 4 }}>
      <LabelControl>
        {list.map((item) => {
          const { id, name, isCompleted } = item;

          return (
            <Box className="checkbox" key={id}>
              <FormControlLabel
                control={
                  <Checkbox
                    id={id}
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                  />
                }
                label={name}
                className={isCompleted ? 'completed' : ''}
              />
              <span className="list-icon" onClick={() => deleteItem(id)}>
                <FaTrashAlt />
              </span>
            </Box>
          );
        })}
      </LabelControl>
    </FormGroup>
  );
};

const LabelControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 1rem;

  .checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .completed {
    text-decoration-line: line-through;
    text-decoration-color: rgba(0, 0, 0, 0.6);
  }
  .list-icon {
    cursor: pointer;
  }
`;

export default List;
