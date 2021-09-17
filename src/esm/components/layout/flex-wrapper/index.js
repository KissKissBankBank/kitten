import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["gap", "padding", "direction", "className", "style"];
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.entries.js";
import "core-js/modules/es.object.assign.js";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledWrapper = styled.div.withConfig({
  displayName: "flex-wrapper__StyledWrapper",
  componentId: "sc-z0vdh1-0"
})(["display:flex;gap:var(--flexWrapper-gap);padding:var(--flexWrapper-padding);flex-direction:var(--flexWrapper-direction);"]);

var getCSSRule = function getCSSRule(value) {
  return typeof value === 'number' ? pxToRem(value) : value;
};

var getRuleFromProp = function getRuleFromProp(value) {
  if (Array.isArray(value)) {
    return value.map(function (rule) {
      return getCSSRule(rule);
    }).join(' ');
  }

  return getCSSRule(value);
};

export var FlexWrapper = function FlexWrapper(_ref) {
  var _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? null : _ref$gap,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? null : _ref$padding,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var gapRule = gap ? getRuleFromProp(gap) : null;
  var paddingRule = padding ? getRuleFromProp(padding) : null;
  var namedPaddingRule = {};

  if (padding && typeof padding === 'object' && !Array.isArray(padding)) {
    paddingRule = null;
    Object.entries(padding).forEach(function (_ref2) {
      var key = _ref2[0],
          value = _ref2[1];
      var cssRule = "padding" + (key[0].toUpperCase() + key.substring(1));
      namedPaddingRule[cssRule] = getCSSRule(value);
    });
  }

  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-FlexWrapper', className),
    style: Object.assign({
      '--flexWrapper-gap': gapRule,
      '--flexWrapper-padding': paddingRule,
      '--flexWrapper-direction': direction
    }, namedPaddingRule, style)
  }, props));
};
FlexWrapper.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array, PropTypes.object]),
  direction: PropTypes.oneOf(['column', 'row'])
};