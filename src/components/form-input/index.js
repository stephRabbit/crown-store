import React from 'react'

import './form-input.scss'

function FormInput({ onInputChange, label, ...rest }) {
  return (
    <div className='group'>
      <input className='form-input' onChange={onInputChange} {...rest} />
      {label && (
        <label
          className={`${rest.value.length ? 'shrink ' : ''}form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
