import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["shadowColor", "className", "children", "style"];
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledContainer, StyledScrollableContainer } from './styled';
import COLORS from '../../../constants/colors-config';
import throttle from 'lodash/throttle';
export var ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$shadowColor = _ref.shadowColor,
      shadowColor = _ref$shadowColor === void 0 ? COLORS.background1 : _ref$shadowColor,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(true),
      leftGradientState = _useState[0],
      setLeftGradientState = _useState[1];

  var _useState2 = useState(true),
      rightGradientState = _useState2[0],
      setRightGradientState = _useState2[1];

  var refScrollableContainer = useRef(null);

  var checkRight = function checkRight(element) {
    if (!element) return false;
    return element.scrollLeft === element.scrollWidth - element.parentNode.clientWidth;
  };

  var onScroll = function onScroll(event) {
    setLeftGradientState(event.target.scrollLeft === 0);
    setRightGradientState(checkRight(event.target));
  };

  useEffect(function () {
    var element = refScrollableContainer.current;
    element && element.addEventListener('scroll', throttle(onScroll, 200));
    setRightGradientState(checkRight(element));
    return function () {
      return element && element.removeEventListener('scroll', throttle(onScroll, 200));
    };
  });
  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, other, {
    className: classNames('k-ScrollableContainer__wrapper', className)
  }), /*#__PURE__*/React.createElement(StyledScrollableContainer, {
    ref: refScrollableContainer,
    className: classNames('k-ScrollableContainer', {
      'k-ScrollableContainer--hasLeftGradient': !leftGradientState,
      'k-ScrollableContainer--hasRightGradient': !rightGradientState
    }),
    style: _extends({}, style, {
      '--scrollableContainer-gradient': shadowColor
    })
  }, children));
};
ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string
};