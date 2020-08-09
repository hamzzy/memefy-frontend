import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Index from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route path="/">
            <Index />
          </Route>


        </Switch>
      </Router>



</div>
  );
}

export default App;
