import React, { useState } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { auth, createUserProfileDocument } from '../../firebase'

import './sign-up.scss'

const SigUp = () => {
  const initialSate = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formData, setFormData] = useState(initialSate)

  const { displayName, email, password, confirmPassword } = formData

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log("Passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })
      setFormData(initialSate)
    } catch (err) {
      console.error(err)
    }
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>New user? Create an account!</h2>
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
    </div>
  )
}

export default SigUp
