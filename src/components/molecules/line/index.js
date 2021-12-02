"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Line = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var StyledLine = _styledComponents.default.div.withConfig({
  displayName: "line__StyledLine",
  componentId: "sc-1737aao-0"
})(["display:flex;align-items:center;gap:", ";"], (0, _typography.pxToRem)(10));

var Line = function Line(props) {
  return /*#__PURE__*/_react.default.createElement(StyledLine, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-Line', props.className)
  }));
};

exports.Line = Line;

Line.Item = function (props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-Line__item', props.className)
  }));
};

Line.defaultProps = {
  className: null,
  children: null
};
Line.Item.defaultProps = {
  className: null,
  children: null
};