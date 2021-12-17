import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Order from "./components/Order";

const App = () => {
  return (
    <>
      <nav>
        <h1 className='store-header'>Bloom Tech Pizza Day</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/order-pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='order-pizza'>
          <Order />
        </Route>

      </Switch>

    </>
  );
};
export default App;
