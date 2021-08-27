"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["gap", "padding", "direction", "className", "style"];

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "flex-wrapper__StyledWrapper",
  componentId: "z0vdh1-0"
})(["display:flex;gap:var(--flexWrapper-gap);padding:var(--flexWrapper-padding);flex-direction:var(--flexWrapper-direction);"]);

var getCSSRule = function getCSSRule(value) {
  return typeof value === 'number' ? (0, _typography.pxToRem)(value) : value;
};

var getRuleFromProp = function getRuleFromProp(value) {
  if (Array.isArray(value)) {
    return value.map(function (rule) {
      return getCSSRule(rule);
    }).join(' ');
  }

  return getCSSRule(value);
};

var FlexWrapper = function FlexWrapper(_ref) {
  var _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? null : _ref$gap,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? null : _ref$padding,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var gapRule = gap ? getRuleFromProp(gap) : null;
  var paddingRule = padding ? getRuleFromProp(padding) : null;
  var namedPaddingRule = {};

  if (padding && (0, _typeof2.default)(padding) === 'object' && !Array.isArray(padding)) {
    paddingRule = null;
    Object.entries(padding).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      var cssRule = "padding".concat(key[0].toUpperCase() + key.substring(1));
      namedPaddingRule[cssRule] = getCSSRule(value);
    });
  }

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-FlexWrapper', className),
    style: (0, _extends2.default)({
      '--flexWrapper-gap': gapRule,
      '--flexWrapper-padding': paddingRule,
      '--flexWrapper-direction': direction
    }, namedPaddingRule, style)
  }, props));
};

exports.FlexWrapper = FlexWrapper;
FlexWrapper.propTypes = {
  gap: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array]),
  padding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  direction: _propTypes.default.oneOf(['column', 'row'])
};