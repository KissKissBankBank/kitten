import { Base64 } from 'js-base64';
export var encodeSvgString = function encodeSvgString(svgString) {
  return "data:image/svg+xml;base64,".concat(Base64.encode(svgString));
};