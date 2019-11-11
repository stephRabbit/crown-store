import React from 'react'

import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'

import { AccountContainer } from './styles'

function Account() {
  return (
    <AccountContainer>
      <SignIn />
      <SignUp />
    </AccountContainer>
  )
}

export default Account
