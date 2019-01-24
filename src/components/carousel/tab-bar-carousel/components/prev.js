"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prev = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowIcon = require("./../../../icons/arrow-icon");

var _typographyConfig = _interopRequireDefault(require("./../../../../constants/typography-config"));

var _typography = require("./../../../../helpers/utils/typography");

var LeftArrowContainerStyles = _styledComponents.default.div.withConfig({
  displayName: "prev__LeftArrowContainerStyles",
  componentId: "n0wx91-0"
})(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;&:hover{transform:translate(-", ");cursor:pointer;color:", ";svg{fill:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(8), function (_ref) {
  var hoverColor = _ref.hoverColor;
  return hoverColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
});

var TextStyles = _styledComponents.default.div.withConfig({
  displayName: "prev__TextStyles",
  componentId: "n0wx91-1"
})(["margin-left:", ";"], (0, _typography.pxToRem)(6));

var Prev = function Prev(_ref3) {
  var children = _ref3.children,
      hoverColor = _ref3.hoverColor;
  return _react.default.createElement(LeftArrowContainerStyles, {
    hoverColor: hoverColor
  }, _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: "left",
    fill: "#fff"
  }), _react.default.createElement(TextStyles, null, children));
};

exports.Prev = Prev;