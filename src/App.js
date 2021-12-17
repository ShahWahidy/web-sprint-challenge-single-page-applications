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
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Order />
        </Route>
        <Route  path='/'>
          <Home />
        </Route>

      </Switch>

    </>
  );
};
export default App;
