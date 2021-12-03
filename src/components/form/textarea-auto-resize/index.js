"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextareaAutoResize = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["minRows", "maxRows", "rows", "onChange", "value", "lineHeight", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextareaAutoResize = function TextareaAutoResize(_ref) {
  var minRows = _ref.minRows,
      maxRows = _ref.maxRows,
      rows = _ref.rows,
      onChange = _ref.onChange,
      value = _ref.value,
      lineHeight = _ref.lineHeight,
      style = _ref.style,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(rows),
      innerRows = _useState[0],
      setInnerRows = _useState[1];

  var _useState2 = (0, _react.useState)(value),
      innerValue = _useState2[0],
      setInnerValue = _useState2[1];

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