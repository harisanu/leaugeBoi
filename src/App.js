import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import MatchDetails from './components/league/MatchDetails';
import './App.css';

function App() {
  
  return (

    <div className="test">
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
    </div>
      
  );
}

export default App
