import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ScreenConfig } from '../../../constants/screen-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import isStringANumber from 'is-string-a-number';
import { upcaseFirst } from '../../../helpers/utils/string';
export var Marger = function Marger(props) {
  var top = props.top,
      bottom = props.bottom,
      style = props.style,
      others = _objectWithoutProperties(props, ["top", "bottom", "style"]);

  var gutter = 10 / TYPOGRAPHY.root;

  var marginSize = function marginSize(value) {
    return "".concat(value * gutter, "rem");
  };

  var valueIsNumber = function valueIsNumber(value) {
    // Retro-compatibility: this handles the case when the user enters `.5` as a
    // value for a margin.
    if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
      return true;
    }

    return isStringANumber(String(value));
  };

  var propIsNumber = function propIsNumber(propName) {
    return valueIsNumber(props[propName]);
  };

  var isSetValue = function isSetValue(value) {
    return value || value === 0;
  };

  var isPropWithViewportRange = function isPropWithViewportRange(propName, viewportRange) {
    return props[propName] && props[propName]["from".concat(upcaseFirst(viewportRange))];
  };

  var viewportRangeCssRule = function viewportRangeCssRule(viewportRange) {
    return "@media (min-width: ".concat(ScreenConfig[viewportRange.toUpperCase()].min, "px)");
  };

  var propCssDeclarationForViewportRange = function propCssDeclarationForViewportRange(propName, viewportRange) {
    var size = props[propName]["from".concat(upcaseFirst(viewportRange))];
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

  var viewportRanges = Object.keys(ScreenConfig).map(function (size) {
    return size.toLowerCase();
  }).filter(function (size) {
    return size !== 'xxs';
  });
  var viewportRangesStyles = viewportRanges.reduce(function (acc, viewportRange) {
    return [].concat(_toConsumableArray(acc), [viewportRangeStyleCondition('top', viewportRange), viewportRangeStyleCondition('bottom', viewportRange)]);
  }, []);
  var styles = [stylesForName('top'), stylesForName('bottom'), viewportRangesStyles, style];
  return /*#__PURE__*/React.createElement(StyledMarger, _extends({
    styles: styles
  }, others));
};
var StyledMarger = styled.div.withConfig({
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
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
    default: PropTypes.number,
    fromXxs: PropTypes.number,
    fromXs: PropTypes.number,
    fromS: PropTypes.number,
    fromM: PropTypes.number,
    fromL: PropTypes.number,
    fromXl: PropTypes.number
  })]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
    default: PropTypes.number,
    fromXxs: PropTypes.number,
    fromXs: PropTypes.number,
    fromS: PropTypes.number,
    fromM: PropTypes.number,
    fromL: PropTypes.number,
    fromXl: PropTypes.number
  })])
};