/*
import React, { useState, useEffect } from "react";
import axios from "axios";
export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    match_list: [],
    heading: "",
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8081/matches/`
      )
      .then((res) => {
        setState({
          match_list: res.data.matches,
          heading: "Recent Matches",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}

*/