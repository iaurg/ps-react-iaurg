import React from "react";
import PropTypes from "prop-types";
export default function HelloWorld({ message }) {
  return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
  message: PropTypes.string,
};
