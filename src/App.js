import React from 'react';
import './App.css';
import Index from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/dashboard";
import Search from "./pages/SearchPage";
function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" component={Index} exact/>


          <Route path="/login" component={Login} />

          <Route path="/signUp" component={Register}/>

          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/search'  component={Search}/>



        </Switch>
      </Router>



</main>
  );
}

export default App;
