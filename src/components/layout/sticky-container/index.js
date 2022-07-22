"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StickyContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _typography = require("../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledStickyContainer = _styledComponents.default.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "sc-5q91xd-0"
})(["will-change:transform;transition-duration:var(--transition-timing);transition-timing-function:var(--transition-timing-function);&.k-StickyContainer--alwaysSticky{position:fixed;}", ""], _ref => {
  let {
    stickyContainerStyleProps
  } = _ref;
  return stickyContainerStyleProps;
});

const StyledSpacer = _styledComponents.default.div.withConfig({
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
  const [scrollPos, setScrollPos] = (0, _react.useState)(0); // useRef Hook to save the old scroll state.

  const oldScrollPos = (0, _react.useRef)(0);
  (0, _react.useEffect)(() => {
    const onScroll = () => {
      setScrollPos(window.pageYOffset); // save the old scroll position in the ref

      oldScrollPos.current = window.pageYOffset;
    };

    const scrollThrottle = (0, _throttle.default)(onScroll, 200);
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
  const currentStickyContainer = (0, _react.useRef)(null);
  const [stuck, setStuckState] = (0, _react.useState)(false);
  const [containerHeight, setContainerHeight] = (0, _react.useState)(0);
  const [currentlyUnsticking, setCurrentlyUnstickingState] = (0, _react.useState)(false);
  const [scrollDirectionDown, scrollDirectionUp] = useScrollDirection();
  (0, _react.useImperativeHandle)(ref, () => ({
    setSticky,
    setUnsticky
  }));
  (0, _react.useEffect)(() => {
    const currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  (0, _react.useEffect)(() => {
    onChange({
      isStuck: stuck || isSticky === 'always'
    });
  }, [stuck, isSticky]);
  (0, _react.useEffect)(() => {
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
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
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
      const alwaysStickyStyle = top ? (0, _styledComponents.css)(["top:", ";"], (0, _typography.pxToRem)(top)) : bottom ? (0, _styledComponents.css)(["bottom:", ";"], (0, _typography.pxToRem)(bottom)) : (0, _styledComponents.css)(["top:0;"]);
      return alwaysStickyStyle;
    }

    const distance = currentlyUnsticking || !stuck ? containerHeight : 0;
    const directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom';
    const basis = directionToAnimate === 'top' ? top || 0 : bottom || 0;
    const directionDistance = (0, _typography.pxToRem)(basis - distance);
    return (0, _styledComponents.css)(["position:", ";", ":", ";transition-property:", ";"], position, directionToAnimate, directionDistance, directionToAnimate);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (stuck || isSticky === 'always') && /*#__PURE__*/_react.default.createElement(StyledSpacer, {
    className: "k-Spacer",
    style: {
      '--StickyContainer-height': (0, _typography.pxToRem)(containerHeight)
    }
  }), /*#__PURE__*/_react.default.createElement(StyledStickyContainer, (0, _extends2.default)({
    ref: currentStickyContainer,
    stickyContainerStyleProps: stickyContainerStyleProps,
    className: (0, _classnames.default)('k-StickyContainer', className, {
      'k-StickyContainer--alwaysSticky': isSticky === 'always'
    }),
    isSticky: isSticky
  }, other), children));
};

const StickyContainer = /*#__PURE__*/(0, _react.forwardRef)(StickyContainerBase);
exports.StickyContainer = StickyContainer;
StickyContainer.defaultProps = {
  onChange: () => {}
};
StickyContainer.propTypes = {
  top: _propTypes.default.number,
  bottom: _propTypes.default.number,
  isSticky: _propTypes.default.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never']),
  onChange: _propTypes.default.func
};