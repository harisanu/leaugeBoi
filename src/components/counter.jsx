import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: <h1>Leauge statistics</h1>,
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.title}</span>
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search for a champion"
        ></input>
        <button className="btn btn-secondary btn-sm m-2">Search</button>
      </React.Fragment>
    );
  }
}

export default Counter;
