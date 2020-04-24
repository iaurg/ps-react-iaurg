import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextBox with error */
export default function ExampleError () {
  return (
    <TextInputBEM
      htmlId='example-optional'
      label='First Name'
      name='firstname'
      onChange={() => {}}
      required
      error='First name is required.'
    />
  )
}
