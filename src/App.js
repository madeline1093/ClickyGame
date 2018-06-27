import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home"
import './App.css';
import './components/Container';

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path ="/" component={Home} />
    </div>
  </Router>
  <div>
    <Container/>
  </div>
);


export default App;
