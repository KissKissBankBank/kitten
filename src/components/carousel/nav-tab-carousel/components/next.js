"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Next = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowIcon = require("./../../../icons/arrow-icon");

var _typographyConfig = _interopRequireDefault(require("./../../../../constants/typography-config"));

var _typography = require("./../../../../helpers/utils/typography");

var RightArrowContainerStyles = _styledComponents.default.div.withConfig({
  displayName: "next__RightArrowContainerStyles",
  componentId: "sc-1gb9cus-0"
})(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;&:hover{transform:translate(", ");cursor:pointer;color:", ";svg{fill:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(8), function (_ref) {
  var hoverColor = _ref.hoverColor;
  return hoverColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
});

var TextStyles = _styledComponents.default.div.withConfig({
  displayName: "next__TextStyles",
  componentId: "sc-1gb9cus-1"
})(["margin-right:", ";"], (0, _typography.pxToRem)(6));

var Next = function Next(_ref3) {
  var children = _ref3.children,
      hoverColor = _ref3.hoverColor;
  return _react.default.createElement(RightArrowContainerStyles, {
    hoverColor: hoverColor
  }, _react.default.createElement(TextStyles, null, children), _react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    fill: "#fff"
  }));
};

exports.Next = Next;