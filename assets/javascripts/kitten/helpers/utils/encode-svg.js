import { Base64 } from 'js-base64'

export const encodeSvgString = svgString => {
  return 'data:image/svg+xml;base64,' + Base64.encode(svgString)
}
