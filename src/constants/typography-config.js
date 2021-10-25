"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var TYPOGRAPHY = {
  root: 16,
  // px
  fontSize: 1,
  // rem
  fontWeight: 400,
  lineHeight: 1.5,
  // rem
  fontStyles: {
    light: {
      fontFamily: 'Maax, Helvetica, Arial, sans-serif',
      fontWeight: 400
    },
    regular: {
      fontFamily: 'Maax, Helvetica, Arial, sans-serif',
      fontWeight: 500
    },
    bold: {
      fontFamily: 'Maax, Helvetica, Arial, sans-serif',
      letterSpacing: '.01rem',
      fontWeight: 600
    },
    regularUppercase: {
      fontFamily: 'Maax, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    boldUppercase: {
      fontFamily: 'Maax, Helvetica, Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: '.1rem',
      textTransform: 'uppercase'
    }
  }
};
var _default = TYPOGRAPHY;
exports.default = _default;