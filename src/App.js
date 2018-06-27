import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home"
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path ="/" component={Home} />
    </div>
  </Router>
)


export default App;
