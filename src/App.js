import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Order from "./components/Order";
import * as yup from 'yup';
import formSchema from "./validation/formSchema";

const initialFormValues = {
    name: '',
    olive: false,
    onion: false,
    garlic: false,
    mushroom: false,
    specialText: '',
    size: '',
  }
const initialErrors = {
  name: ''
}

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const postNewOrder = newOrder => {
   
   axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(resp => {
        setOrders([ resp.data, ...orders ]);
        console.log(resp.data)
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      username: formValues.name.trim(),
      toppings: ['olive', 'onion', 'garlic', 'mushroom'].filter(topping => !!formValues[topping])
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
          errors={formErrors} 
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


// const initialFormValues = {
//   name: '',
//   Olive: false,
//   Onion: false,
//   garlic: false,
//   mushroom: false,
//   specialText: ''
// }



// const initialOrders = [];
 // const [orders, setOrders] = useState(initialOrders);
  // const [formValues, setFormValues] = useState(initialFormValues)
  // const [formError, setFormError] = useState(initialErrors);
  
  // const getOrder = () => {
  //   axios.get('https://reqres.in/api/orders')
  //   .then(res =>{
  //     //console.log(res);
  //     setOrders(res.data.data);
  //   })
  // }

  // const postNewOrder = newOrder => {
  //   axios.post('https://reqres.in/api/orders', newOrder)
  //   .then(res =>{
  //     setOrders(res.data.data, ...orders)
  //   })
  //   .catch(err => console.err(err))
  //   .finally(() => setFormValues(initialFormValues));
  // }
  
  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormError({ ...formError, [name]: '' }))
  //     .catch(err => setFormError({ ...formError, [name]: err.errors[0] }))
  // }

  // const inputChange = (name, value) => {
  //   validate(name, value);
  //   setFormValues({
  //     ...formValues,
  //     [name]: value 
  //   })
  // }

  // useEffect(() => {
  //   getOrder()
  // }, [])


  // const formSubmit = () => {
  //   const newOrder = {
  //     name: formValues.name.trim(),
  //     specialText: formValues.specialText.trim(),
  //     toppings: ['Olive', 'onion', 'garlic', 'mushroom'].filter(topping => !!formValues[topping])
  //   }

  //   postNewOrder(newOrder);
  // }