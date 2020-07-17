import React from "react";
import styles from "./styles.module.css";

function Search ({ handleInput, search }){

  
    return (
        <section>
        <span className={styles.title}><title>League Statistics</title></span>
        <input
          type="text"
          className={styles.inputSearch}
          id="addInput"
          placeholder="Search for a champion"
          onChange={handleInput}
          onKeyPress={search}
          />
        <button
          className="btn btn-info btn-sm m-2"
          styleButton={styles.styleButton}
        >
          Search
        </button>
        </section>
    );
}

export default Search;
