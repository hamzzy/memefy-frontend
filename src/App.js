import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Jumbotron,Button,Container,Form,FormControl,Row,Col,Card} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App ">
           <Header/>

      <div>
    <Jumbotron className='hero' fluid>
      <Container  className='text-center '>
        

  <h2 className='txt'>
    The best place  to find funny meme Photos and video
  </h2>
  <p>
  <Form className='search'>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>  </p>
  </Container>

</Jumbotron>
</div>


</div>
  );
}

export default App;
