import React from 'react'

import { GroupContainer, FormInputContainer, FormInputLabel } from './styles'

function FormInput({ onInputChange, label, ...rest }) {
  return (
    <GroupContainer>
      <FormInputContainer
        className='form-input'
        onChange={onInputChange}
        {...rest}
      />
      {label && (
        <FormInputLabel
          className={`${rest.value.length ? 'shrink ' : ''}form-input-label`}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  )
}

export default FormInput
