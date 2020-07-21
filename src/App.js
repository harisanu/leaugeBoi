import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*
import Search from './components/Search'
import Results from './components/Results'
*/
import axios from 'axios'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import MatchDetails from './components/league/MatchDetails';

import { Provider } from './context';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });


  const apiUrl = "http://127.0.0.1:8081/summoner/";

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiUrl + state.s).then(({ data }) => {
        let results = data;
        console.log(data);
        setState(prevState => {
          return { ...prevState, results: results }
        });
      });
    }
  }


  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
    console.log(state.s);
  }

  return (
    <Provider>
      <Router>
        <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/matches/match/:id" component={MatchDetails} />
              </Switch>
            </div>
        </React.Fragment>
      </Router>
    </Provider>


  );
}

export default App
