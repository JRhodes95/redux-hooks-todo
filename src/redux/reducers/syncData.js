const initialState = "NOT_FETCHED";

export default (state = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return false;
    case "SUCCESS":
      return true;

    default:
      return state;
  }
};
