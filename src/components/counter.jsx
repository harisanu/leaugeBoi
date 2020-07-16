import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: <h1>Leauge statistics</h1>,
  };

  styleSearchBar = {
    width: "500px",
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
        <button
          className="btn btn-info btn-sm m-2"
          styleButton={this.styleButton}
        >
          Search
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
