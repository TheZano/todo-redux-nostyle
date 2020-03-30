import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { createStore } from "redux";
import CounterWithRedux from "./CounterWithRedux";
import Navbar from "./Navbar";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const myStore = createStore(reducers);

export default function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <Navbar />
        {/* <CounterWithRedux /> */}
        <Todos />
        <AddTodo />
      </div>
    </Provider>
  );
}
