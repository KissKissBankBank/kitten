"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var modifierStyles = function modifierStyles(modifier) {
  var borderColor;
  var borderStyle = 'solid';
  var backgroundColor;
  var color;

  switch (modifier) {
    case 'hydrogen':
      borderColor = _colorsConfig.default.line1;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      break;

    case 'helium':
      borderColor = _colorsConfig.default.primary1;
      backgroundColor = _colorsConfig.default.primary1;
      color = _colorsConfig.default.background1;
      break;

    case 'lithium':
    case 'checked':
      borderColor = _colorsConfig.default.primary4;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.primary1;
      break;

    case 'beryllium':
      borderColor = _colorsConfig.default.font1;
      backgroundColor = _colorsConfig.default.font1;
      color = _colorsConfig.default.background1;
      break;

    case 'carbon':
      borderColor = _colorsConfig.default.background1;
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.font1;
      break;

    case 'oxygen':
      borderColor = _colorsConfig.default.primary4;
      borderStyle = 'dashed';
      backgroundColor = _colorsConfig.default.background1;
      color = _colorsConfig.default.primary1;
      break;
  }

  return (0, _styledComponents.css)(["border:", " ", " ", ";background-color:", ";color:", ";svg{fill:", ";}transition:background-color 0.2s,color 0.2s,border-color 0.2s;", ":disabled{border-color:", ";background-color:", ";color:", ";svg{fill:", ";}}"], (0, _typography.pxToRem)(2), borderStyle, borderColor, backgroundColor, color, color, modifier !== 'checked' && (0, _styledComponents.css)([":hover,:focus{border-color:", ";background-color:", ";color:", ";svg{fill:", ";}}:active{border-color:", ";background-color:", ";color:", ";svg{fill:", ";}}"], _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary3, _colorsConfig.default.primary3, _colorsConfig.default.background1, _colorsConfig.default.background1), _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1);
};

exports.modifierStyles = modifierStyles;