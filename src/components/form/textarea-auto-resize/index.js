"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaAutoResize = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var TextareaAutoResize = function TextareaAutoResize(_ref) {
  var minRows = _ref.minRows,
      maxRows = _ref.maxRows,
      rows = _ref.rows,
      onChange = _ref.onChange,
      value = _ref.value,
      lineHeight = _ref.lineHeight,
      style = _ref.style,
      others = (0, _objectWithoutProperties2.default)(_ref, ["minRows", "maxRows", "rows", "onChange", "value", "lineHeight", "style"]);

  var _useState = (0, _react.useState)(rows),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      innerRows = _useState2[0],
      setInnerRows = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      innerValue = _useState4[0],
      setInnerValue = _useState4[1];

  var handleChange = function handleChange(event) {
    var elementStyles = getComputedStyle(event.target);
    var verticalPadding = parseInt(elementStyles.paddingTop) + parseInt(elementStyles.paddingBottom);
    var previousRows = event.target.rows;
    event.target.rows = minRows; // `~~` ? http://rocha.la/JavaScript-bitwise-operators-in-practice

    var currentRows = ~~((event.target.scrollHeight - verticalPadding) / lineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setInnerValue(event.target.value);
    setInnerRows(Math.min(currentRows, maxRows));
    onChange(event);
  };

  return /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
    rows: innerRows,
    value: innerValue,
    onChange: handleChange,
    style: (0, _extends2.default)({}, style, {
      lineHeight: (0, _typography.pxToRem)(lineHeight)
    })
  }, others));
};

exports.TextareaAutoResize = TextareaAutoResize;
TextareaAutoResize.defaultProps = {
  minRows: 1,
  maxRows: 5,
  rows: 1,
  onChange: function onChange() {},
  lineHeight: 18
};
TextareaAutoResize.propTypes = {
  minRows: _propTypes.default.number,
  maxRows: _propTypes.default.number,
  rows: _propTypes.default.number,
  onChange: _propTypes.default.func,
  lineHeight: _propTypes.default.number
};