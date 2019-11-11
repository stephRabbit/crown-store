import React from 'react'

import { CustomButtonContainer } from './styles'

function CustomButton({ children, ...rest }) {
  return <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>
}

export default CustomButton
