import React, { useState } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });


  const apiUrl = "http://ec2-34-211-48-51.us-west-2.compute.amazonaws.com:8081/summoner/";

  const search = (e) => {
    if (e.key ==="Enter"){
        axios.get(apiUrl + state.s).then(({data}) => {
          let results = data;
          console.log(data);
          setState(prevState => {
            return {...prevState, results: results}
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
    <div className="App">
      <header className="App-header">
        <h1>League Statistics</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App
