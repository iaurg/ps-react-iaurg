import React from "react";

export default function HelloWorld({ message }) {
  return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
  message: PropTypes.string,
};
