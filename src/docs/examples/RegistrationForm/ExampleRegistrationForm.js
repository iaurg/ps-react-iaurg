import React from 'react'
import RegistrationForm from 'ps-react/RegistrationForm'

export default function ExampleRegistrationForm () {
  function onSubmit (user) {
    console.log(user)
  }
  return (
    <RegistrationForm onSubmit={onSubmit} />
  )
}
