import React from 'react'

export default function Order() {
 
  return (
    <form className='form container' id='pizza-form'>
     <div className='form-group inputs'>
        <h4>Please Build Your Pizza</h4>
        <label>Name
          <input id='name'
            name='name'
            type='text'
          />
        </label>
        <label>Pizza Size
          <select
            name='size'
          >
            <option value=''>-- Select a size --</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
      <div className='form-group checkboxes'>
        <h4>Toppings</h4>
        <label>Olive
          <input
            type='checkbox'
            name='Olive'
          />
        </label>
        <label>Onion
          <input
            type='checkbox'
            name='Onions'
          />
        </label>
        <label>Mushroom
          <input
            type='checkbox'
            name='mushroom'
          />
        </label>
        <label>Garlic
          <input
            type='checkbox'
            name='garlic'
          />
        </label>
        <label>Special Instructions
          <input id='special-instructions'
            name='special-instruction'
            type='text'
          />
        </label>
      </div>
      </div>
    </form>
  )
}
