import React from "react";
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const ToDoList = () => {
  return (
    <ListContainer>
      <ToDoInput />
      <ToDoItem></ToDoItem>
      <ToDoItem></ToDoItem>
      <ToDoItem></ToDoItem>
      <ToDoItem></ToDoItem>
    </ListContainer>
  );
};

export default ToDoList;
