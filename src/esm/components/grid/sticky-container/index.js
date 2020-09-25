import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledStickyContainer = styled.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "trwgvt-0"
})(["will-change:transform;transition-duration:0.2s;transition-timing-function:ease;", " ", ""], function (_ref) {
  var isSticky = _ref.isSticky;
  return isSticky === 'always' && css(["position:fixed;"]);
}, function (_ref2) {
  var stickyContainerStyleProps = _ref2.stickyContainerStyleProps;
  return stickyContainerStyleProps;
});
var StyledSpacer = styled.div.withConfig({
  displayName: "sticky-container__StyledSpacer",
  componentId: "trwgvt-1"
})(["height:", ";flex:0 0 auto;"], function (_ref3) {
  var containerHeight = _ref3.containerHeight;
  return pxToRem(containerHeight);
});

function useScrollDirection() {
  // Returns an array with booleans:
  //
  //     [true, false] // => user is scrolling to the bottom of the page.
  //     [false, true] // => user is scrolling to the top of the page.
  //     [false, false] // => no scroll change.
  //
  // See also https://www.iwakoscott.com/blog/useRef
  // save the new scroll position in state
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollPos = _useState2[0],
      setScrollPos = _useState2[1]; // useRef Hook to save the old scroll state.


  var oldScrollPos = useRef(0);
  useEffect(function () {
    var onScroll = function onScroll() {
      setScrollPos(window.pageYOffset); // save the old scroll position in the ref

      oldScrollPos.current = window.pageYOffset;
    };

    var scrollThrottle = throttle(onScroll, 200);
    window.addEventListener('scroll', scrollThrottle);
    return function () {
      return window.removeEventListener('scroll', scrollThrottle);
    };
  }, []); // current scroll position minus the old scroll position saved in state.

  var difference = scrollPos - oldScrollPos.current;
  return [difference > 0, difference < 0];
}

var StickyContainerBase = function StickyContainerBase(_ref4, ref) {
  var children = _ref4.children,
      top = _ref4.top,
      bottom = _ref4.bottom,
      isSticky = _ref4.isSticky,
      other = _objectWithoutProperties(_ref4, ["children", "top", "bottom", "isSticky"]);

  var currentStickyContainer = useRef(null);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      stuck = _useState4[0],
      setStuckState = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      containerHeight = _useState6[0],
      setContainerHeight = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      currentlyUnsticking = _useState8[0],
      setCurrentlyUnstickingState = _useState8[1];

  var _useScrollDirection = useScrollDirection(),
      _useScrollDirection2 = _slicedToArray(_useScrollDirection, 2),
      scrollDirectionDown = _useScrollDirection2[0],
      scrollDirectionUp = _useScrollDirection2[1];

  useImperativeHandle(ref, function () {
    return {
      setSticky: setSticky,
      setUnsticky: setUnsticky
    };
  });

  var setSticky = function setSticky() {
    setStuckState(true);
  };

  var setUnstickyWithTransition = function setUnstickyWithTransition() {
    setCurrentlyUnstickingState(true);
    setTimeout(function () {
      setStuckState(false);
      setCurrentlyUnstickingState(false);
    }, 220);
  };

  var setUnsticky = function setUnsticky() {
    setStuckState(false);
  };

  var isOriginalContainerOutOfViewport = function isOriginalContainerOutOfViewport() {
    if (isSticky === 'topOnScrollUp') {
      var distanceToBorder = top || 0;
      return window.pageYOffset > containerHeight + distanceToBorder;
    }

    if (isSticky === 'bottomOnScrollDown') {
      var _distanceToBorder = bottom || 0;

      return window.pageYOffset + window.innerHeight < document.body.clientHeight - (containerHeight + _distanceToBorder);
    }
  };

  var shouldStickContainerOnTop = function shouldStickContainerOnTop() {
    return scrollDirectionUp && isSticky === 'topOnScrollUp' && isOriginalContainerOutOfViewport();
  };

  var shouldStickContainerOnBottom = function shouldStickContainerOnBottom() {
    return scrollDirectionDown && isSticky === 'bottomOnScrollDown' && isOriginalContainerOutOfViewport();
  };

  var shouldStickContainer = function shouldStickContainer() {
    return shouldStickContainerOnTop() || shouldStickContainerOnBottom();
  };

  var shouldUnstickContainer = function shouldUnstickContainer() {
    return !isOriginalContainerOutOfViewport();
  };

  var shouldUnstickContainerWithTransition = function shouldUnstickContainerWithTransition() {
    return scrollDirectionDown && isSticky === 'topOnScrollUp' || scrollDirectionUp && isSticky === 'bottomOnScrollDown';
  };

  useEffect(function () {
    var currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  useEffect(function () {
    if (isSticky === 'always') return;

    if (shouldUnstickContainer()) {
      setUnsticky();
    } else if (shouldStickContainer()) {
      setSticky();
    } else if (shouldUnstickContainerWithTransition()) {
      setUnstickyWithTransition();
    }
  }, [scrollDirectionDown, scrollDirectionUp]);

  var stickyContainerStyleProps = function stickyContainerStyleProps() {
    var position = stuck ? 'fixed' : 'static';

    if (isSticky === 'always') {
      var alwaysStickyStyle = top ? css(["top:", ";"], pxToRem(top)) : bottom ? css(["bottom:", ";"], pxToRem(bottom)) : css(["top:0;"]);
      return alwaysStickyStyle;
    }

    var distance = currentlyUnsticking || !stuck ? containerHeight : 0;
    var directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom';
    var basis = directionToAnimate === 'top' ? top || 0 : bottom || 0;
    var directionDistance = pxToRem(basis - distance);
    return css(["position:", ";", ":", ";transition-property:", ";"], position, directionToAnimate, directionDistance, directionToAnimate);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, (stuck || isSticky === 'always') && /*#__PURE__*/React.createElement(StyledSpacer, {
    className: "k-Spacer",
    containerHeight: containerHeight
  }), /*#__PURE__*/React.createElement(StyledStickyContainer, _extends({
    ref: currentStickyContainer,
    stickyContainerStyleProps: stickyContainerStyleProps,
    isSticky: isSticky
  }, other), children));
};

export var StickyContainer = forwardRef(StickyContainerBase);
StickyContainer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  isSticky: PropTypes.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always'])
};