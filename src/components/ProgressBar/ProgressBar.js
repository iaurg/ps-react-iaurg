import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar({ percent, width, height = 5 }) {
  function getColor(percent) {
    if (percent === 100) return "green";
    return percent > 50 ? "lightgreen" : "red";
  }
  function getWithAsPercentOfTotalWidth() {
    return parseInt(width * (percent / 100), 10);
  }

  return (
    <div style={{ border: "1px solid lightgray", width }}>
      <div
        style={{
          height,
          width: getWithAsPercentOfTotalWidth(),
          backgroundColor: getColor(percent),
        }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,
  /** Bar height */
  height: PropTypes.number,
  /** Bar width */
  width: PropTypes.number.isRequired,
};
