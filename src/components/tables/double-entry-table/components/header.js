"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var Header = function Header(_ref) {
  var children = _ref.children,
      headerRowProps = _ref.headerRowProps,
      others = (0, _objectWithoutProperties2.default)(_ref, ["children", "headerRowProps"]);
  return _react.default.createElement("thead", others, _react.default.createElement("tr", headerRowProps, children));
};

exports.Header = Header;
Header.defaultProps = {
  headerRowProps: {}
};
Header.propTypes = {
  headerRowProps: _propTypes.default.object
};