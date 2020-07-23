import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import MatchDetails from './components/league/MatchDetails';


function App() {
  
  return (

    
      <Router>
        <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/matches/match/:id" component={MatchDetails} />
              </Switch>
            </div>
        </>
      </Router>
  );
}

export default App
