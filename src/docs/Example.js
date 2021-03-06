import React, { useState } from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";
export default function Example(props) {
  const { code, description, name } = props.example;
  const { componentName } = props;
  const [showCode, setShowCode] = useState(false);
  const ExampleComponent = require(`./examples/${componentName}/${name}`)
    .default;

  function toggleCode(event) {
    event.preventDefault();
    setShowCode(!showCode);
  }

  return (
    <div className="example">
      {description && <h4>{description}</h4>}

      <ExampleComponent></ExampleComponent>
      <p>
        <button onClick={toggleCode}>{showCode ? "Hide" : "Show"} Code</button>
      </p>

      {showCode && <CodeExample>{code}</CodeExample>}
    </div>
  );
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
};
