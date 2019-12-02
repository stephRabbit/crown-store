import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import {
  emailSignInStart,
  googleSignInStart
} from '../../store/ducks/user/actions'

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './styles'

function SignIn({ googleSignInStart, emailSignInStart }) {
  const initialState = { password: '', email: '' }
  const [formData, setFormData] = useState(initialState)
  const { password, email } = formData

  const onSubmit = async e => {
    e.preventDefault()
    if (!email || !password) {
      console.log('Invalid credentials')
      return
    }

    emailSignInStart(email, password)
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          name='email'
          value={formData.email}
          required
          type='email'
          onInputChange={onInputChange}
          label='Email'
        />
        <FormInput
          name='password'
          value={formData.password}
          required
          type='password'
          onInputChange={onInputChange}
          label='Password'
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn={true}
            onClick={googleSignInStart}>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
