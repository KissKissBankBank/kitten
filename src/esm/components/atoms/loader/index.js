import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';

var Circle = function Circle(_ref) {
  var color = _ref.color,
      others = _objectWithoutProperties(_ref, ["color"]);

  var size = 5;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(size * 2, " ").concat(size * 2)
  }, others), /*#__PURE__*/React.createElement("circle", {
    fill: color,
    cx: size,
    cy: size,
    r: size
  }));
};

var circleSize = pxToRem(5);
var spacing = pxToRem(2);
var easing = 'cubic-bezier(0.2, 0.68, 0.18, 1.08)';
var duration = '1.75s';
var loaderAnimationKeyframes = keyframes(["0%{transform:scale(1);opacity:1;}45%{transform:scale(.1);opacity:.7;}80%{transform:scale(1);opacity:1;}"]);
export var Loader = styled(function (_ref2) {
  var tag = _ref2.tag,
      className = _ref2.className,
      color = _ref2.color,
      others = _objectWithoutProperties(_ref2, ["tag", "className", "color"]);

  var Tag = tag;
  var loaderClassName = classNames('k-Loader', className);
  var circle = /*#__PURE__*/React.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  });
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: loaderClassName
  }, others), circle, circle, circle);
}).withConfig({
  displayName: "loader__Loader",
  componentId: "s50q4c-0"
})(["display:flex;height:", ";line-height:1;.k-Loader__circle{display:inline-block;margin-left:", ";width:", ";height:", ";border-radius:", ";animation:", " ", " 0s infinite ", ";animation-fill-mode:both;&:nth-child(1){animation-delay:calc(-", " / 3);margin-left:0;}&:nth-child(2){animation-delay:calc(-", " / 3 / 2);}&:nth-child(3){animation-delay:0s;}}"], circleSize, spacing, circleSize, circleSize, circleSize, loaderAnimationKeyframes, duration, easing, duration, duration);
Loader.PropTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string
};
Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null
};