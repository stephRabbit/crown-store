import React from 'react'

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './styles'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    }
  }

  componentDidCatch(err, info) {
    console.error('Something went wrong', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/DWO5Hzg.png' />
          <ErrorImageText>Sorry, this page is broken!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
