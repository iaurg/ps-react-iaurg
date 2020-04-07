import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";

export default function CodeExample({ children }) {
  let element = useRef(null);
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightBlock(element);
  }, []);

  return (
    <pre
      ref={(ref) => {
        element = ref;
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};
