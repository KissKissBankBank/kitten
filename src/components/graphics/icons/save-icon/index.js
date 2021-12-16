"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SaveIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var SaveIcon = function SaveIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: 16,
    height: 17
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 0l4 4v13H0V0h12zM8 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4-6H4v3h8V3z",
    fill: color,
    fillRule: "evenodd"
  }));
};

exports.SaveIcon = SaveIcon;
SaveIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
SaveIcon.defaultProps = {
  color: '#222',
  title: ''
};