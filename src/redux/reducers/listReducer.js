const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST":
      return (state = action.payload);
    default:
      return state;
  }
};

export default listReducer;