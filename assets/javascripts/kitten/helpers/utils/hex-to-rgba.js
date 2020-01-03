// https://stackoverflow.com/a/51564734
export const hexToRgba = (hex, alpha = 1) => {
  const hexColorRegexp = hex.length <= 4 ? /\w/g : /\w\w/g
  const [r, g, b] = hex
    .match(hexColorRegexp)
    .map(hexColor =>
      parseInt(hexColor.length < 2 ? `${hexColor}${hexColor}` : hexColor, 16),
    )
  return `rgba(${r},${g},${b},${alpha})`
}
