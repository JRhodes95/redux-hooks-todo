import { useSelector, useDispatch } from "react-redux";

const useToDoList = filter => {
  const { toDos, isSynced } = useSelector(state => state);

  const dispatch = useDispatch();

  const fetchToDos = async () => {
    dispatch({
      type: "PENDING"
    });
    const response = await fetch("http://localhost:3010/todos");
    const initialToDos = await response.json();
    dispatch({ type: "POPULATE_INITIAL_TODOS", payload: initialToDos });
    dispatch({ type: "SUCCESS" });
  };

  if (isSynced === "NOT_FETCHED") fetchToDos();

  const addToDo = async ({ info }) => {
    dispatch({
      type: "PENDING"
    });
    const newToDo = { id: Date.now().toString(), info, state: "ACTIVE" };
    dispatch({ type: "ADD_TODO", payload: newToDo });
    await addToStore({ newToDo });
    dispatch({ type: "SUCCESS" });
  };

  const addToStore = async ({ newToDo }) => {
    await fetch("http://localhost:3010/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToDo)
    });
  };

  // const removeToDo = async ({ id }) => {
  //   setSynced(false);
  //   const indexToRemove = toDos.findIndex(toDo => {
  //     return toDo.id === id;
  //   });
  //   const newToDos = [...toDos];
  //   newToDos[indexToRemove].state = "INACTIVE";
  //   setToDos(newToDos);
  //   await removeFromStore({ id });
  //   setSynced(true);
  // };

  // const removeFromStore = async ({ id }) => {
  //   await fetch(`http://localhost:3010/todos/${id}`, {
  //     method: "PUT"
  //   });
  // };

  // return { toDos: filterByState(filter), isSynced, addToDo, removeToDo };
  let removeToDo;

  const filterByState = filter =>
    filter ? toDos.filter(({ state }) => state === filter) : toDos;
  return { toDos: filterByState(filter), isSynced, addToDo, removeToDo };
};

export default useToDoList;
