import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProgressBar extends Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green'
    return this.props.percent > 50 ? 'lightgreen' : 'red'
  }

  getWidthAsPercentOfTotalWidth = () => {
    const { percent, width } = this.props
    return parseInt(width * (percent / 100), 10)
  }
  
  render() {
    const { percent, width, height = 5 } = this.props
    return (
      <div style={{ border: '1px solid lightgray', width: width }}>
      <div
        style={{
          height,
          width:this.getWidthAsPercentOfTotalWidth(),
          backgroundColor: this.getColor(percent)
        }}
      />
    </div>
    )
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,
  /** Bar height */
  height: PropTypes.number,
  /** Bar width */
  width: PropTypes.number.isRequired
}
