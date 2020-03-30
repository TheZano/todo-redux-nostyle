import { counterReducer } from "./counter";
import { combineReducers } from "redux";
import { userReducer } from "./user";
import { todosReducer } from "./todos";

export default combineReducers({
  counter: counterReducer,
  name: userReducer,
  todoState: todosReducer
});
