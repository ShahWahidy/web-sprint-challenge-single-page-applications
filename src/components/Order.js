import React from 'react'

export default function Order(props) {
  const {values, submit, change, errors } = props;
 
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }


  return (
    <form className='form container' id='pizza-form' onSubmit={onSubmit}>
      <div className='form-group submit'>
       <div className='errors'>
          <div>{errors.name}</div>
        </div>
      </div>
     <div className='form-group inputs'>
        <h4>Please Build Your Pizza</h4>
        <label>Name
          <input id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        <label>Pizza Size
          <select id='size-dropdown'
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
            value={values.Olive}
            onChange={onChange}
            type='checkbox'
            name='Olive'
          />
        </label>
        <label>Onion
          <input
            value={values.onion}
            onChange={onChange}
            type='checkbox'
            name='Onion'
          />
        </label>
        <label>Mushroom
          <input
            value={values.mushroom}
            onChange={onChange}
            type='checkbox'
            name='mushroom'
          />
        </label>
        <label>Garlic
          <input
            value={values.garlic}
            onChange={onChange}
            type='checkbox'
            name='garlic'
          />
        </label>
        <label>Special Instructions
          <input id='special-text'
            value={values.specialText}
            onChange={onChange}
            name='specialText'
            type='text'
          />
        </label>
      </div>
      <button >submit</button>
      </div>
    </form>
  )
}
