import React, { useState } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { signInWithGoogle } from '../../firebase'

import './sign-in.scss'

function SignIn() {
  const [formData, setFormData] = useState({ password: '', email: '' })

  const onSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
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
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn={true}
            onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
