import logo from "./logo.svg";
import "./App.css";
import Catalog from "./components/Catalog.js";
import Cart from "./components/Cart.js";
import Profile from "./components/Profile.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Navigation from "./components/Navigation.js";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Router>
      <Switch>
        <Route exact path="/">
          <h2>Home page</h2>
        </Route>
        <Route exact path="/products">
          <Catalog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      </Router>
    </>
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Product/>
       
    
      </header>
    </div>*/
  );
}

export default App;
