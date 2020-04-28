// Returns the width of a percent of total width, as a integer
export function getWidthAsPercentOfTotalWidth (percent, totalWidth) {
  return parseInt(totalWidth * (percent / 100), 10)
}
