"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Marger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenConfig = require("../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _isStringANumber = _interopRequireDefault(require("is-string-a-number"));

var _string = require("../../../helpers/utils/string");

const Marger = props => {
  const {
    top,
    bottom,
    style,
    ...others
  } = props;
  const gutter = 10 / _typographyConfig.default.root;

  const marginSize = value => value * gutter + "rem";

  const valueIsNumber = value => {
    // Retro-compatibility: this handles the case when the user enters `.5` as a
    // value for a margin.
    if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
      return true;
    }

    return (0, _isStringANumber.default)(String(value));
  };

  const propIsNumber = propName => valueIsNumber(props[propName]);

  const isSetValue = value => value || value === 0;

  const isPropWithViewportRange = (propName, viewportRange) => props[propName] && props[propName]["from" + (0, _string.upcaseFirst)(viewportRange)];

  const viewportRangeCssRule = viewportRange => "@media (min-width: " + _screenConfig.ScreenConfig[viewportRange.toUpperCase()].min + "px)";

  const propCssDeclarationForViewportRange = (propName, viewportRange) => {
    const size = props[propName]["from" + (0, _string.upcaseFirst)(viewportRange)];
    if (!isSetValue(size)) return;
    return "margin-" + propName + ": " + marginSize(size) + ";";
  };

  const viewportRangeStyleCondition = (propName, viewportRange) => {
    const hasValue = isPropWithViewportRange(propName, viewportRange);
    if (!isSetValue(hasValue)) return;
    const returnedViewportRangeCssRule = viewportRangeCssRule(viewportRange);
    const viewportRangeCssValue = propCssDeclarationForViewportRange(propName, viewportRange);
    if (!viewportRangeCssValue) return;
    return returnedViewportRangeCssRule + " { " + viewportRangeCssValue + " }";
  };

  const hasDefaultProp = propName => props[propName] && props[propName].default;

  const hasXxsProp = propName => props[propName] && props[propName].fromXxs;

  const defaultValue = propName => {
    if (propIsNumber(propName)) return marginSize(props[propName]);
    if (hasDefaultProp(propName)) return marginSize(props[propName].default);
    if (hasXxsProp(propName)) return marginSize(props[propName].fromXxs);
  };

  const stylesForName = propName => {
    const value = defaultValue(propName);
    if (value) return "margin-" + propName + ": " + defaultValue(propName) + ";";
  };

  const viewportRanges = Object.keys(_screenConfig.ScreenConfig).map(size => size.toLowerCase()).filter(size => size !== 'xxs');
  const viewportRangesStyles = viewportRanges.reduce((acc, viewportRange) => {
    return [...acc, viewportRangeStyleCondition('top', viewportRange), viewportRangeStyleCondition('bottom', viewportRange)];
  }, []);
  const styles = [stylesForName('top'), stylesForName('bottom'), viewportRangesStyles, style];
  return /*#__PURE__*/_react.default.createElement(StyledMarger, (0, _extends2.default)({
    styles: styles
  }, others));
};

exports.Marger = Marger;

const StyledMarger = _styledComponents.default.div.withConfig({
  displayName: "marger__StyledMarger",
  componentId: "sc-1qqifp5-0"
})(["", ""], props => props.styles);

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