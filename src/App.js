import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fields from './components/Fields';
import Doctors from './components/Doctors';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Fields} />
            <Route exact path='/doctors/:field' component={Doctors} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
