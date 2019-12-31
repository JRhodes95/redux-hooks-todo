import React from "react";
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import useToDoList from "../hooks/useToDoList";

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const SaveState = styled.div``;

const ToDoList = () => {
  const { toDos, isSynced, addToDo, removeToDo } = useToDoList("ACTIVE");

  return (
    <ListContainer>
      <SaveState>{isSynced ? "In sync." : "Not in sync."}</SaveState>
      <ToDoInput addToDo={addToDo} />
      {toDos.map(({ id, info }) => (
        <ToDoItem key={id} id={id} info={info} removeToDo={removeToDo} />
      ))}
    </ListContainer>
  );
};

export default ToDoList;
