import React, { useState, useContext } from 'react';
import { v1 as uuidv1 } from 'uuid';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [item, setItem] = useState({
    id: uuidv1(),
    name: '',
    isCompleted: false,
  });
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setItem((prevState) => ({
      ...prevState,
      name: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    const id = e.target.id;
    const updatedTodoList = todoList.map((checkbox) => {
      if (checkbox.id === id) checkbox.isCompleted = !checkbox.isCompleted;
      return checkbox;
    });
    setTodoList(updatedTodoList);
  };

  const addItem = () => {
    const updatedTodoList = todoList.concat(item);
    setTodoList(updatedTodoList);
    setItem({ id: uuidv1(), name: '', isCompleted: false });
  };
  const deleteItem = (id) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  };
  const deleteAll = () => {
    setTodoList([]);
  };
  return (
    <GlobalContext.Provider
      value={{
        item,
        todoList,

        handleInputChange,
        handleCheckboxChange,
        addItem,
        deleteItem,
        deleteAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
