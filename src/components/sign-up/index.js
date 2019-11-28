import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { signUpStart } from '../../store/ducks/user/actions'

import { SignUpContainer, SignUpTitle } from './styles'

const SigUp = ({ signUpStart }) => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formData, setFormData] = useState(initialState)

  const { displayName, email, password, confirmPassword } = formData

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log("Passwords don't match")
      return
    }

    signUpStart({ email, password, displayName })
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>New user? Create an account!</SignUpTitle>
      <span>Sign up with email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          name='displayName'
          value={displayName}
          required
          type='text'
          onInputChange={onInputChange}
          label='Name'
        />
        <FormInput
          name='email'
          value={email}
          required
          type='email'
          onInputChange={onInputChange}
          label='Email'
        />
        <FormInput
          name='password'
          value={password}
          required
          type='password'
          onInputChange={onInputChange}
          label='Password'
        />
        <FormInput
          name='confirmPassword'
          value={confirmPassword}
          required
          type='password'
          onInputChange={onInputChange}
          label='Confirm Password'
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SigUp)
