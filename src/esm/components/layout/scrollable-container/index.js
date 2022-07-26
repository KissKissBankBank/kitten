import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Container } from '../../../components/layout/container';
const gradientWidth = 20;
export const StyledContainer = styled(Container).withConfig({
  displayName: "scrollable-container__StyledContainer",
  componentId: "sc-x0e0cn-0"
})(["position:relative;padding-left:0;padding-right:0;width:100%;.k-ScrollableContainer{display:flex;white-space:nowrap;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}scrollbar-width:none;&::before,&::after{content:'';display:block;position:absolute;top:0;bottom:0;pointer-events:none;touch-action:none;z-index:5;width:", ";opacity:0;transition:opacity var(--transition);}&::before{left:0;background-image:linear-gradient( to right,var(--scrollableContainer-gradient),transparent );}&::after{right:0;background-image:linear-gradient( to left,var(--scrollableContainer-gradient),transparent );}&.k-ScrollableContainer--hasLeftGradient::before,&.k-ScrollableContainer--hasRightGradient::after{opacity:1;}}"], pxToRem(gradientWidth));
export const ScrollableContainer = _ref => {
  let {
    shadowColor = COLORS.background1,
    className,
    children,
    style,
    ...other
  } = _ref;
  const [leftGradientState, setLeftGradientState] = useState(true);
  const [rightGradientState, setRightGradientState] = useState(true);
  const refScrollableContainer = useRef(null);

  const checkRight = element => {
    if (!element) return false;
    return element.scrollLeft === element.scrollWidth - element.parentNode.clientWidth;
  };

  const onScroll = event => {
    setLeftGradientState(event.target.scrollLeft === 0);
    setRightGradientState(checkRight(event.target));
  };

  useEffect(() => {
    const element = refScrollableContainer.current;
    element && element.addEventListener('scroll', throttle(onScroll, 200));
    setRightGradientState(checkRight(element));
    return () => element && element.removeEventListener('scroll', throttle(onScroll, 200));
  });
  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, other, {
    className: classNames('k-ScrollableContainer__wrapper', className)
  }), /*#__PURE__*/React.createElement("div", {
    ref: refScrollableContainer,
    className: classNames('k-ScrollableContainer', {
      'k-ScrollableContainer--hasLeftGradient': !leftGradientState,
      'k-ScrollableContainer--hasRightGradient': !rightGradientState
    }),
    style: { ...style,
      '--scrollableContainer-gradient': shadowColor
    }
  }, children));
};
ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string
};