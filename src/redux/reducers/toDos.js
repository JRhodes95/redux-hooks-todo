const intialState = [];

export default (state = intialState, action) => {
  switch (action.type) {
    case "POPULATE_INITIAL_TODOS":
      return action.payload;
    case "ADD_TODO":
      const newToDo = action.payload;
      state.push(newToDo);
      return state;
    case "REMOVE_TODO":
      const id = action.payload;
      const indexToRemove = state.findIndex(toDo => {
        return toDo.id === id;
      });
      state[indexToRemove].state = "INACTIVE";
      return state;
    default:
      return state;
  }
};
