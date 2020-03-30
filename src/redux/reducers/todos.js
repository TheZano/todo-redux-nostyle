let TODOS_STATE = {
  todos: ["mamam baso", "bobo cantik"]
};

export const todosReducer = (state = TODOS_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((elem, index) => index !== action.payload)
      };
    case "UPDATE_TODO":
      return {
        todos: state.todos.map((elem, index) => {
          if (index === action.payload.index) {
            return action.payload.text;
          }
          return elem;
        })
      };
    default:
      return state;
  }
};
