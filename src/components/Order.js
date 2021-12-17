import React from 'react'

export default function Order(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build your pizza</h2>
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>
      <div className='form-group inputs'>
        <h4>Select topping and size</h4>
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>

        <label>Pizza Size
          <select
            onChange={onChange}
            value={values.size}
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
            checked={values.Olive}
            onChange={onChange}
          />
        </label>

        <label>Onion
          <input
            type='checkbox'
            name='Onions'
            checked={values.Onion}
            onChange={onChange}
          />
        </label>

        <label>Mushroom
          <input
            type='checkbox'
            name='mushroom'
            checked={values.mushroom}
            onChange={onChange}
          />
        </label>

        <label>Garlic
          <input
            type='checkbox'
            name='garlic'
            checked={values.garlic}
            onChange={onChange}
          />
        </label>
      </div>
      </div>
    </form>
  )
}
