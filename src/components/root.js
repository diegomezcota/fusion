/**
 * Create the boilerplate to get React to render something on the screen
 * Render an <App /> component, which you'll need to create separately
 */
import React from 'react'
import App from './App'

class Root extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

export default <Root />