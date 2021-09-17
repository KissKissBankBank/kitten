"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StickyContainer = void 0;

require("core-js/modules/es.array.includes.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["children", "className", "top", "bottom", "isSticky"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledStickyContainer = _styledComponents.default.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "sc-5q91xd-0"
})(["will-change:transform;transition-duration:0.2s;transition-timing-function:ease;&.k-StickyContainer--alwaysSticky{position:fixed;}", ""], function (_ref) {
  var stickyContainerStyleProps = _ref.stickyContainerStyleProps;
  return stickyContainerStyleProps;
});

var StyledSpacer = _styledComponents.default.div.withConfig({
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
  var _useState = (0, _react.useState)(0),
      scrollPos = _useState[0],
      setScrollPos = _useState[1]; // useRef Hook to save the old scroll state.


  var oldScrollPos = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    var onScroll = function onScroll() {
      setScrollPos(window.pageYOffset); // save the old scroll position in the ref

      oldScrollPos.current = window.pageYOffset;
    };

    var scrollThrottle = (0, _throttle.default)(onScroll, 200);
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
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);
  var currentStickyContainer = (0, _react.useRef)(null);

  var _useState2 = (0, _react.useState)(false),
      stuck = _useState2[0],
      setStuckState = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      containerHeight = _useState3[0],
      setContainerHeight = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      currentlyUnsticking = _useState4[0],
      setCurrentlyUnstickingState = _useState4[1];

  var _useScrollDirection = useScrollDirection(),
      scrollDirectionDown = _useScrollDirection[0],
      scrollDirectionUp = _useScrollDirection[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setSticky: setSticky,
      setUnsticky: setUnsticky
    };
  });
  (0, _react.useEffect)(function () {
    var currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  (0, _react.useEffect)(function () {
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
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
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
      var alwaysStickyStyle = top ? (0, _styledComponents.css)(["top:", ";"], (0, _typography.pxToRem)(top)) : bottom ? (0, _styledComponents.css)(["bottom:", ";"], (0, _typography.pxToRem)(bottom)) : (0, _styledComponents.css)(["top:0;"]);
      return alwaysStickyStyle;
    }

    var distance = currentlyUnsticking || !stuck ? containerHeight : 0;
    var directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom';
    var basis = directionToAnimate === 'top' ? top || 0 : bottom || 0;
    var directionDistance = (0, _typography.pxToRem)(basis - distance);
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

var StickyContainer = /*#__PURE__*/(0, _react.forwardRef)(StickyContainerBase);
exports.StickyContainer = StickyContainer;
StickyContainer.propTypes = {
  top: _propTypes.default.number,
  bottom: _propTypes.default.number,
  isSticky: _propTypes.default.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never'])
};