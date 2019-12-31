import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const SaveState = styled.div``;

const ToDoList = () => {
  const [sync, setSync] = useState(false);
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const fetchToDos = async () => {
      setSync(false);
      const response = await fetch("http://localhost:3010/todos");
      const initialToDos = await response.json();
      setToDos(initialToDos);
      setSync(true);
    };
    fetchToDos();
  }, []);

  const addToStore = async ({ newToDo }) => {
    const response = await fetch("http://localhost:3010/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToDo)
    });
    console.log(await response.json());
  };

  const removeFromStore = async ({ id }) => {
    const response = await fetch(`http://localhost:3010/todos/${id}`, {
      method: "PUT"
    });
    console.log(await response.json());
  };

  const addToDo = async ({ info }) => {
    setSync(false);
    const currentToDos = [...toDos];
    const newToDo = { id: Date.now().toString(), info };
    currentToDos.push(newToDo);
    setToDos(currentToDos);
    await addToStore({ newToDo });
    setSync(true);
  };

  const removeToDo = async ({ id }) => {
    setSync(false);
    const indexToRemove = toDos.findIndex(toDo => {
      return toDo.id === id;
    });
    const newToDos = [...toDos];
    newToDos.splice(indexToRemove, 1);
    setToDos(newToDos);
    await removeFromStore({ id });
    setSync(true);
  };

  return (
    <ListContainer>
      <SaveState>{sync ? "In sync." : "Not in sync."}</SaveState>
      <ToDoInput addToDo={addToDo} />
      {toDos.map(({ id, info }) => (
        <ToDoItem key={id} id={id} info={info} removeToDo={removeToDo} />
      ))}
    </ListContainer>
  );
};

export default ToDoList;
