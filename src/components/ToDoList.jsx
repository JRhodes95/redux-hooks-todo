import React, { useState } from "react";
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = ({ info }) => {
    const newToDos = [...toDos];
    newToDos.push({ id: Date.now().toString(), info });
    setToDos(newToDos);
  };

  const removeToDo = ({ id }) => {
    const indexToRemove = toDos.findIndex(toDo => {
      return toDo.id === id;
    });
    const newToDos = [...toDos];
    newToDos.splice(indexToRemove, 1);
    setToDos(newToDos);
  };

  return (
    <ListContainer>
      <ToDoInput addToDo={addToDo} />
      {toDos.map(({ id, info }) => (
        <ToDoItem key={id} id={id} info={info} removeToDo={removeToDo} />
      ))}
    </ListContainer>
  );
};

export default ToDoList;
