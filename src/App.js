import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Order from "./components/Order";
import * as yup from 'yup';
import schema from './validation/formSchema'

const initialFormValues = {
  name: '',
  Olive: '',
  Onion: '',
  garlic: '',
  mushroom: '',
  specialText: ''
}

const initialErrors = {
  name: ''
}

const initialOrders = [];


const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState(initialErrors);
  
  const getOrder = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res =>{
      //console.log(res);
      setOrders(res.data.data);
    })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res =>{
      setOrders([res.data.data, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues));
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormError({ ...formError, [name]: '' }))
      .catch(err => setFormError({ ...formError, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  useEffect(() => {
    getOrder()
  }, [])


  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      specialText: formValues.specialText.trim(),
      hobbies: ['Olive', 'onion', 'garlic', 'mushroom'].filter(topping => !!formValues[topping])
    }

    postNewOrder(newOrder);
  }
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
          <Order
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formError}   
          />
        </Route>
        <Route  path='/'>
          <Home />
        </Route>

      </Switch>

    </>
  );
};
export default App;
