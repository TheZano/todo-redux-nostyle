let COUNTER_STATE = {
  num: 0
};

export const counterReducer = (state = COUNTER_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { num: state.num + 1 };
    case "DECREMENT":
      return { num: state.num - 1 };
    default:
      return state;
  }
};
