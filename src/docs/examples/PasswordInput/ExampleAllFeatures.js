import React, { useState } from 'react'
import PasswordInput from 'ps-react/PasswordInput'

/** All features enabled */
export default function ExampleAllFeatures (props) {
  const [password, setPassword] = useState('')

  function getQuality () {
    const length = password.length
    return length > 10 ? 100 : length * 10
  }

  return (
    <PasswordInput
      htmlId='password-input-example-all-features'
      name='password'
      onChange={event => setPassword(event.target.value)}
      value={password}
      minLength={8}
      placeholder='Enter password'
      showVisibilityToggle
      quality={getQuality()}
      {...props}
    />
  )
}
