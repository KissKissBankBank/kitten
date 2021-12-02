"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["color", "title"];

var CrossIconNext = function CrossIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 17 18",
    width: "17",
    height: "18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M12.693 4.707a1 1 0 0 0-1.415 0L8.485 7.5 5.692 4.707a1 1 0 1 0-1.414 1.414l2.793 2.793-2.864 2.864a1 1 0 1 0 1.414 1.414l2.864-2.864 2.864 2.864a1 1 0 0 0 1.415-1.414L9.9 8.914l2.793-2.793a1 1 0 0 0 0-1.414Z"
  }));
};

exports.CrossIconNext = CrossIconNext;
CrossIconNext.prototype = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CrossIconNext.defaultProps = {
  color: _colorsConfig.default.font1
};