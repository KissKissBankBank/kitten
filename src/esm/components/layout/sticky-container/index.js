import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledStickyContainer = styled.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "sc-5q91xd-0"
})(["will-change:transform;transition-duration:var(--transition-timing);transition-timing-function:var(--transition-timing-function);&.k-StickyContainer--alwaysSticky{position:fixed;}", ""], function (_ref) {
  var stickyContainerStyleProps = _ref.stickyContainerStyleProps;
  return stickyContainerStyleProps;
});
var StyledSpacer = styled.div.withConfig({
  displayName: "sticky-container__StyledSpacer",
  componentId: "sc-5q91xd-1"
})(["height:var(--StickyContainer-height,0);flex:0 0 auto;"]);

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

var StickyContainerBase = function StickyContainerBase(_ref2, ref) {
  var children = _ref2.children,
      className = _ref2.className,
      top = _ref2.top,
      bottom = _ref2.bottom,
      isSticky = _ref2.isSticky,
      onChange = _ref2.onChange,
      other = _objectWithoutProperties(_ref2, ["children", "className", "top", "bottom", "isSticky", "onChange"]);

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
  useEffect(function () {
    var currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  useEffect(function () {
    onChange({
      isStuck: stuck || isSticky === 'always'
    });
  }, [stuck, isSticky]);
  useEffect(function () {
    if (['always', 'never'].includes(isSticky)) return;

    if (shouldUnstickContainer()) {
      setUnsticky();
    } else if (shouldStickContainer()) {
      setSticky();
    } else if (shouldUnstickContainerWithTransition()) {
      setUnstickyWithTransition();
    }
  }, [scrollDirectionDown, scrollDirectionUp]);

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

  if (isSticky === 'never') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

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
    style: {
      '--StickyContainer-height': pxToRem(containerHeight)
    }
  }), /*#__PURE__*/React.createElement(StyledStickyContainer, _extends({
    ref: currentStickyContainer,
    stickyContainerStyleProps: stickyContainerStyleProps,
    className: classNames('k-StickyContainer', className, {
      'k-StickyContainer--alwaysSticky': isSticky === 'always'
    }),
    isSticky: isSticky
  }, other), children));
};

export var StickyContainer = forwardRef(StickyContainerBase);
StickyContainer.defaultProps = {
  onChange: function onChange() {}
};
StickyContainer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  isSticky: PropTypes.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never']),
  onChange: PropTypes.func
};