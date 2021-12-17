import React from 'react'

export default function Order() {
 
  return (
    <form className='form container'>
     <div className='form-group inputs'>
        <h4>Please Build Your Pizza</h4>
        <label>Username&nbsp;
          <input
            name='username'
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
      </div>
      </div>
    </form>
  )
}
