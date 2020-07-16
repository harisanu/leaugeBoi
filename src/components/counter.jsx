import React, { Component } from "react";
import styles from "./styles.module.css";

class Counter extends Component {
  state = {
    title: <h1>Leauge statistics</h1>,
  };

  styleButton = {
    width: "500px",
  };

  render() {
    return (
      <React.Fragment>
        <span className={styles.title}>{this.state.title}</span>
        <input
          type="text"
          className={styles.inputSearch}
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
