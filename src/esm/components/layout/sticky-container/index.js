import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { pxToRem } from '../../../helpers/utils/typography';
const StyledStickyContainer = styled.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "sc-5q91xd-0"
})(["will-change:transform;transition-duration:var(--transition-timing);transition-timing-function:var(--transition-timing-function);&.k-StickyContainer--alwaysSticky{position:fixed;}", ""], _ref => {
  let {
    stickyContainerStyleProps
  } = _ref;
  return stickyContainerStyleProps;
});
const StyledSpacer = styled.div.withConfig({
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
  const [scrollPos, setScrollPos] = useState(0); // useRef Hook to save the old scroll state.

  const oldScrollPos = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.pageYOffset); // save the old scroll position in the ref

      oldScrollPos.current = window.pageYOffset;
    };

    const scrollThrottle = throttle(onScroll, 200);
    window.addEventListener('scroll', scrollThrottle);
    return () => window.removeEventListener('scroll', scrollThrottle);
  }, []); // current scroll position minus the old scroll position saved in state.

  const difference = scrollPos - oldScrollPos.current;
  return [difference > 0, difference < 0];
}

const StickyContainerBase = (_ref2, ref) => {
  let {
    children,
    className,
    top,
    bottom,
    isSticky,
    onChange,
    ...other
  } = _ref2;
  const currentStickyContainer = useRef(null);
  const [stuck, setStuckState] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [currentlyUnsticking, setCurrentlyUnstickingState] = useState(false);
  const [scrollDirectionDown, scrollDirectionUp] = useScrollDirection();
  useImperativeHandle(ref, () => ({
    setSticky,
    setUnsticky
  }));
  useEffect(() => {
    const currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  useEffect(() => {
    onChange({
      isStuck: stuck || isSticky === 'always'
    });
  }, [stuck, isSticky]);
  useEffect(() => {
    if (['always', 'never'].includes(isSticky)) return;

    if (shouldUnstickContainer()) {
      setUnsticky();
    } else if (shouldStickContainer()) {
      setSticky();
    } else if (shouldUnstickContainerWithTransition()) {
      setUnstickyWithTransition();
    }
  }, [scrollDirectionDown, scrollDirectionUp]);

  const setSticky = () => {
    setStuckState(true);
  };

  const setUnstickyWithTransition = () => {
    setCurrentlyUnstickingState(true);
    setTimeout(() => {
      setStuckState(false);
      setCurrentlyUnstickingState(false);
    }, 220);
  };

  const setUnsticky = () => {
    setStuckState(false);
  };

  if (isSticky === 'never') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  const isOriginalContainerOutOfViewport = () => {
    if (isSticky === 'topOnScrollUp') {
      const distanceToBorder = top || 0;
      return window.pageYOffset > containerHeight + distanceToBorder;
    }

    if (isSticky === 'bottomOnScrollDown') {
      const distanceToBorder = bottom || 0;
      return window.pageYOffset + window.innerHeight < document.body.clientHeight - (containerHeight + distanceToBorder);
    }
  };

  const shouldStickContainerOnTop = () => {
    return scrollDirectionUp && isSticky === 'topOnScrollUp' && isOriginalContainerOutOfViewport();
  };

  const shouldStickContainerOnBottom = () => {
    return scrollDirectionDown && isSticky === 'bottomOnScrollDown' && isOriginalContainerOutOfViewport();
  };

  const shouldStickContainer = () => {
    return shouldStickContainerOnTop() || shouldStickContainerOnBottom();
  };

  const shouldUnstickContainer = () => {
    return !isOriginalContainerOutOfViewport();
  };

  const shouldUnstickContainerWithTransition = () => {
    return scrollDirectionDown && isSticky === 'topOnScrollUp' || scrollDirectionUp && isSticky === 'bottomOnScrollDown';
  };

  const stickyContainerStyleProps = () => {
    const position = stuck ? 'fixed' : 'static';

    if (isSticky === 'always') {
      const alwaysStickyStyle = top ? css(["top:", ";"], pxToRem(top)) : bottom ? css(["bottom:", ";"], pxToRem(bottom)) : css(["top:0;"]);
      return alwaysStickyStyle;
    }

    const distance = currentlyUnsticking || !stuck ? containerHeight : 0;
    const directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom';
    const basis = directionToAnimate === 'top' ? top || 0 : bottom || 0;
    const directionDistance = pxToRem(basis - distance);
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

export const StickyContainer = /*#__PURE__*/forwardRef(StickyContainerBase);
StickyContainer.defaultProps = {
  onChange: () => {}
};
StickyContainer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  isSticky: PropTypes.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never']),
  onChange: PropTypes.func
};