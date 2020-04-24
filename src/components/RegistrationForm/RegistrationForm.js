import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import PasswordInput from '../PasswordInput'

/** Registration form with built-in validation */
export default function RegisrationForm ({ confirmationMessage = 'Thanks for registering', minPasswordLength = 8, ...props }) {
  const [submitted, setSubmitted] = useState(false)
  const [user, setUser] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  function onChange (event) {
    const { name, value } = event.target

    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  function passwordQuality (password) {
    if (!user.password) return null
    if (user.password.length >= minPasswordLength) return 100
    const percentOfMinLength = parseInt(user.password.length / minPasswordLength * 100, 10)
    return percentOfMinLength
  }

  function validate ({ email, password }) {
    const errors = {}

    if (!email) errors.email = 'Email required'
    if (password.length < minPasswordLength) errors.password = `Password be at least ${minPasswordLength}`

    setErrors(errors)

    const formIsValid = Object.getOwnPropertyNames(errors).length === 0
    return formIsValid
  }

  function onSubmit () {
    const formIsValid = validate(user)
    if (formIsValid) {
      props.onSubmit(user)
      setSubmitted(true)
    }
  }

  return (
    submitted
      ? <h2>{confirmationMessage}</h2>
      : <div>
        <TextInput
          htmlId='registration-form-email'
          name='email'
          value={user.email}
          onChange={onChange}
          label='email'
          error={errors.email}
          required
        />
        <PasswordInput
          htmlId='registration-form-password'
          name='password'
          value={user.password}
          onChange={onChange}
          quality={passwordQuality(user.password)}
          showVisibilityToggle
          maxLength={50}
          error={errors.password}
        />

        <input type='submit' value='Register' onClick={onSubmit} />
      </div>
  )
}

RegisrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */

  minPasswordLength: PropTypes.number
}
