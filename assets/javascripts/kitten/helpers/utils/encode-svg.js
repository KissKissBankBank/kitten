import { encode } from 'js-base64'

export const encodeSvgString = svgString => {
  return `data:image/svg+xml;base64,${encode(svgString)}`
}
