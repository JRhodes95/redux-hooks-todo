import { useState, useEffect } from "react";

const useToDoList = filter => {
  const [isSynced, setSynced] = useState(false);
  const [toDos, setToDos] = useState([]);

  const filterByState = filter =>
    filter ? toDos.filter(({ state }) => state === filter) : toDos;

  useEffect(() => {
    const fetchToDos = async () => {
      setSynced(false);
      const response = await fetch("http://localhost:3010/todos");
      const initialToDos = await response.json();
      setToDos(initialToDos);
      setSynced(true);
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
  };

  const removeFromStore = async ({ id }) => {
    const response = await fetch(`http://localhost:3010/todos/${id}`, {
      method: "PUT"
    });
  };

  const addToDo = async ({ info }) => {
    setSynced(false);
    const currentToDos = [...toDos];
    const newToDo = { id: Date.now().toString(), info, state: "ACTIVE" };
    currentToDos.push(newToDo);
    setToDos(currentToDos);
    await addToStore({ newToDo });
    setSynced(true);
  };

  const removeToDo = async ({ id }) => {
    setSynced(false);
    const indexToRemove = toDos.findIndex(toDo => {
      return toDo.id === id;
    });
    const newToDos = [...toDos];
    newToDos[indexToRemove].state = "INACTIVE";
    setToDos(newToDos);
    await removeFromStore({ id });
    setSynced(true);
  };

  return { toDos: filterByState(filter), isSynced, addToDo, removeToDo };
};

export default useToDoList;
