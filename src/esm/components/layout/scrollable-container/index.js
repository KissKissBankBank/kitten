import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["shadowColor", "children"];
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledScrollableContainer } from './styled';
import COLORS from '../../../constants/colors-config';
import throttle from 'lodash/throttle';
export var ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$shadowColor = _ref.shadowColor,
      shadowColor = _ref$shadowColor === void 0 ? COLORS.background1 : _ref$shadowColor,
      children = _ref.children,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(true),
      leftGradientState = _useState[0],
      setLeftGradientState = _useState[1];

  var _useState2 = useState(false),
      rightGradientState = _useState2[0],
      setRightGradientState = _useState2[1];

  var refScrollableContainer = useRef(null);
  useEffect(function () {
    var element = refScrollableContainer.current;

    function onScroll(event) {
      setLeftGradientState(event.target.scrollLeft === 0);
      setRightGradientState(event.target.scrollLeft === event.target.scrollWidth - event.target.parentNode.clientWidth);
    }

    element && element.addEventListener('scroll', throttle(onScroll, 200));
    return function () {
      return element && element.removeEventListener('scroll', throttle(onScroll, 200));
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledContainer, other, /*#__PURE__*/React.createElement(StyledScrollableContainer, {
    shadowColor: shadowColor,
    ref: refScrollableContainer,
    displayLeftGradient: !leftGradientState,
    displayRightGradient: !rightGradientState
  }, children));
};
ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string
};