"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FlexWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "flex-wrapper__StyledWrapper",
  componentId: "sc-z0vdh1-0"
})(["display:flex;gap:var(--flexWrapper-gap);padding:var(--flexWrapper-padding);flex-direction:var(--flexWrapper-direction);"]);

const getCSSRule = value => {
  return typeof value === 'number' ? (0, _typography.pxToRem)(value) : value;
};

const getRuleFromProp = value => {
  if (Array.isArray(value)) {
    return value.map(rule => getCSSRule(rule)).join(' ');
  }

  return getCSSRule(value);
};

const FlexWrapper = _ref => {
  let {
    gap = null,
    padding = null,
    direction = 'column',
    className,
    style,
    ...props
  } = _ref;
  const gapRule = gap ? getRuleFromProp(gap) : null;
  let paddingRule = padding ? getRuleFromProp(padding) : null;
  let namedPaddingRule = {};

  if (padding && typeof padding === 'object' && !Array.isArray(padding)) {
    paddingRule = null;
    Object.entries(padding).forEach(_ref2 => {
      let [key, value] = _ref2;
      const cssRule = "padding" + (key[0].toUpperCase() + key.substring(1));
      namedPaddingRule[cssRule] = getCSSRule(value);
    });
  }

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-FlexWrapper', className),
    style: {
      '--flexWrapper-gap': gapRule,
      '--flexWrapper-padding': paddingRule,
      '--flexWrapper-direction': direction,
      ...namedPaddingRule,
      ...style
    }
  }, props));
};

exports.FlexWrapper = FlexWrapper;
FlexWrapper.propTypes = {
  gap: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array]),
  padding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  direction: _propTypes.default.oneOf(['column', 'row'])
};