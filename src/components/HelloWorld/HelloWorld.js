import React from 'react'
import PropTypes from 'prop-types'
/** A super lame good component just say Hello World */
export default function HelloWorld ({ message }) {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
}

HelloWorld.defaultProps = {
  message: 'World'
}
