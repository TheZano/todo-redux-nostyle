import React from "react";
import List from "./List";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "./redux/actions/todos";

class Todos extends React.Component {
  render() {
    console.log("from Todos", this.props.todoState.todos, this.props.addTodo);
    return (
      <ul>
        {this.props.todoState.todos.map((elem, index) => (
          <List
            deleteTodo={this.props.deleteTodo}
            index={index}
            key={index}
            updateTodo={this.props.updateTodo}
          >
            {elem}
          </List>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { todoState: state.todoState };
};

const mapDispatchToProps = () => {
  return { deleteTodo, updateTodo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Todos);
