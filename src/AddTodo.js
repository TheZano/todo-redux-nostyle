import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./redux/actions/todos";

const mapDispatchToProps = () => {
  return { addTodo: addTodo };
};
export default connect(
  null,
  mapDispatchToProps()
)(props => {
  const [inputValue, setInputValue] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    console.log(props.addTodo);
    props.addTodo(inputValue);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
});
