import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/home';
import OneCompany from './components/oneCompany/oneCompany';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/company/:id" component={OneCompany}></Route>
      </Router>

    </div>
  );
}

export default App;
