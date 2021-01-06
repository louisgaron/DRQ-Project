import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Player } from './components/Player';

class App extends Component{
  render(){
    return (
      <Router>
      <div className="App">

        <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Player">Create</Nav.Link>
        </Nav>
        </Navbar>


        <br />

        <Switch>
        <Route path='/' component={msContentScript.js} exact/>
        <Route path='/Player' component={Create} exact/>
        </Switch>

        
      </div>
      </Router>
    );

  }
}


export default App;
