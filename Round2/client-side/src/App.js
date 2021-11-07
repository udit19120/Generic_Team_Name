import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VirtualTryOn from './components/pages/VirtualTryOn';
import Games from './components/pages/Games';
import SignUp from './components/pages/SignUp';
import AccesoriesTryOn from './components/pages/AccesoriesTryOn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/virtualtryon' component={VirtualTryOn} />
          <Route path='/accesories' component={AccesoriesTryOn}/>
          <Route path='/games' component={Games} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
