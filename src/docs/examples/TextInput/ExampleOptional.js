import React from "react";
import TextInput from "ps-react/TextInput";

/** Optional TextBox */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
    />
  );
}
