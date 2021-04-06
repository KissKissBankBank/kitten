"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _isStringANumber = _interopRequireDefault(require("is-string-a-number"));

var _string = require("../../../helpers/utils/string");

var Marger = function Marger(props) {
  var top = props.top,
      bottom = props.bottom,
      style = props.style,
      others = (0, _objectWithoutProperties2.default)(props, ["top", "bottom", "style"]);
  var gutter = 10 / _typographyConfig.default.root;

  var marginSize = function marginSize(value) {
    return "".concat(value * gutter, "rem");
  };

  var valueIsNumber = function valueIsNumber(value) {
    // Retro-compatibility: this handles the case when the user enters `.5` as a
    // value for a margin.
    if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
      return true;
    }

    return (0, _isStringANumber.default)(String(value));
  };

  var propIsNumber = function propIsNumber(propName) {
    return valueIsNumber(props[propName]);
  };

  var isSetValue = function isSetValue(value) {
    return value || value === 0;
  };

  var isPropWithViewportRange = function isPropWithViewportRange(propName, viewportRange) {
    return props[propName] && props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];
  };

  var viewportRangeCssRule = function viewportRangeCssRule(viewportRange) {
    return "@media (min-width: ".concat(_screenConfig.ScreenConfig[viewportRange.toUpperCase()].min, "px)");
  };

  var propCssDeclarationForViewportRange = function propCssDeclarationForViewportRange(propName, viewportRange) {
    var size = props[propName]["from".concat((0, _string.upcaseFirst)(viewportRange))];
    if (!isSetValue(size)) return;
    return "margin-".concat(propName, ": ").concat(marginSize(size), ";");
  };

  var viewportRangeStyleCondition = function viewportRangeStyleCondition(propName, viewportRange) {
    var hasValue = isPropWithViewportRange(propName, viewportRange);
    if (!isSetValue(hasValue)) return;
    var returnedViewportRangeCssRule = viewportRangeCssRule(viewportRange);
    var viewportRangeCssValue = propCssDeclarationForViewportRange(propName, viewportRange);
    if (!viewportRangeCssValue) return;
    return "".concat(returnedViewportRangeCssRule, " { ").concat(viewportRangeCssValue, " }");
  };

  var hasDefaultProp = function hasDefaultProp(propName) {
    return props[propName] && props[propName].default;
  };

  var hasXxsProp = function hasXxsProp(propName) {
    return props[propName] && props[propName].fromXxs;
  };

  var defaultValue = function defaultValue(propName) {
    if (propIsNumber(propName)) return marginSize(props[propName]);
    if (hasDefaultProp(propName)) return marginSize(props[propName].default);
    if (hasXxsProp(propName)) return marginSize(props[propName].fromXxs);
  };

  var stylesForName = function stylesForName(propName) {
    var value = defaultValue(propName);
    if (value) return "margin-".concat(propName, ": ").concat(defaultValue(propName), ";");
  };

  var viewportRanges = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
    return size.toLowerCase();
  }).filter(function (size) {
    return size !== 'xxs';
  });
  var viewportRangesStyles = viewportRanges.reduce(function (acc, viewportRange) {
    return [].concat((0, _toConsumableArray2.default)(acc), [viewportRangeStyleCondition('top', viewportRange), viewportRangeStyleCondition('bottom', viewportRange)]);
  }, []);
  var styles = [stylesForName('top'), stylesForName('bottom'), viewportRangesStyles, style];
  return /*#__PURE__*/_react.default.createElement(StyledMarger, (0, _extends2.default)({
    styles: styles
  }, others));
};

exports.Marger = Marger;

var StyledMarger = _styledComponents.default.div.withConfig({
  displayName: "marger__StyledMarger",
  componentId: "sc-1qqifp5-0"
})(["", ""], function (props) {
  return props.styles;
});

Marger.defaultProps = {
  top: null,
  bottom: null
};
Marger.propTypes = {
  top: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    fromXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })]),
  bottom: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.shape({
    default: _propTypes.default.number,
    fromXxs: _propTypes.default.number,
    fromXs: _propTypes.default.number,
    fromS: _propTypes.default.number,
    fromM: _propTypes.default.number,
    fromL: _propTypes.default.number,
    fromXl: _propTypes.default.number
  })])
};