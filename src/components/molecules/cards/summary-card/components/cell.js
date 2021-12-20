"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Cell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["name", "className", "style"];

var Cell = function Cell(_ref) {
  var name = _ref.name,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-SummaryCard__cell', className, "k-SummaryCard__cell__" + name),
    style: (0, _extends2.default)({}, style, {
      '--summaryCardCell-name': name
    })
  }));
};

exports.Cell = Cell;
Cell.propTypes = {
  name: _propTypes.default.string.isRequired
};