import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./redux/actions/counter";

export class CounterWithRedux extends Component {
  render() {
    console.log("from CounterWithRedux", this.props.counter);
    return (
      <div>
        <button onClick={this.props.incrementCounter}>+</button>
        {this.props.counter.num}
        <button onClick={this.props.decrementCounter}>-</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { counter: state.counter };
};
const mapDispatchToProps = state => {
  return { incrementCounter, decrementCounter };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CounterWithRedux);
