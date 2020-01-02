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
  // const addToDo = async ({ info }) => {
  //   setSynced(false);
  //   const currentToDos = [...toDos];
  //   const newToDo = { id: Date.now().toString(), info, state: "ACTIVE" };
  //   currentToDos.push(newToDo);
  //   setToDos(currentToDos);
  //   await addToStore({ newToDo });
  //   setSynced(true);
  // };

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

  // const filterByState = filter =>
  //   filter ? toDos.filter(({ state }) => state === filter) : toDos;

  // const addToStore = async ({ newToDo }) => {
  //   await fetch("http://localhost:3010/todos", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newToDo)
  //   });
  // };

  // const removeFromStore = async ({ id }) => {
  //   await fetch(`http://localhost:3010/todos/${id}`, {
  //     method: "PUT"
  //   });
  // };

  // return { toDos: filterByState(filter), isSynced, addToDo, removeToDo };
  let addToDo, removeToDo;

  return { toDos, isSynced, addToDo, removeToDo };
};

export default useToDoList;
