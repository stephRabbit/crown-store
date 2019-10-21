import React from 'react'

import './custom-button.scss'

function CustomButton({ children, isGoogleSignIn, inverted, ...rest }) {
  return (
    <button
      className={`${inverted ? 'inverted ' : ''}${
        isGoogleSignIn ? 'google-sign-in ' : ''
      }custom-button`}
      {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
