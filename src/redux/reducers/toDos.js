const intialState = [];

export default (state = intialState, action) => {
  switch (action.type) {
    case "POPULATE_INITIAL_TODOS":
      return action.payload;
    case "ADD_TODO":
      const newToDo = action.payload;
      state.push(newToDo);
      return state;
    case "MARK_TODO_DONE":
      console.log(action.type);
      return state;
    default:
      return state;
  }
};
