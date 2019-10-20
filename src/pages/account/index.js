import React from 'react'

import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'

import './account.scss'

function Account() {
  return (
    <div className='account'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Account
