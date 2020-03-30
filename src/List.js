import React from "react";

function List(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(props.children);

  function handleEditClick() {
    setInputValue(props.children);
    setIsEdit(true);
  }

  function handleCancelClick() {
    setIsEdit(false);
  }

  function handleDeleteClick() {
    props.deleteTodo(props.index);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.updateTodo(inputValue, props.index);
    setIsEdit(false);
    setInputValue("");
  }

  return (
    <li>
      {!isEdit ? (
        <>
          <span>{props.children}</span>{" "}
          <button onClick={handleEditClick}>edit</button>
          <button onClick={handleDeleteClick}>delete</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button type="submit">save</button>
          <button onClick={handleCancelClick}>cancel</button>
        </form>
      )}
    </li>
  );
}

export default List;
