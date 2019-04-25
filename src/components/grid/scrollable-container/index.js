"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? _colorsConfig.default.background1 : _ref$backgroundColor,
      _ref$shadowColor = _ref.shadowColor,
      shadowColor = _ref$shadowColor === void 0 ? _colorsConfig.default.font1 : _ref$shadowColor,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, ["backgroundColor", "shadowColor", "children"]);
  return _react.default.createElement(_styled.StyledContainer, other, _react.default.createElement(_styled.StyledScrollableContainer, {
    backgroundColor: backgroundColor,
    shadowColor: shadowColor
  }, children));
};

exports.ScrollableContainer = ScrollableContainer;
ScrollableContainer.propTypes = {
  backgroundColor: _propTypes.default.string,
  shadowColor: _propTypes.default.string
};