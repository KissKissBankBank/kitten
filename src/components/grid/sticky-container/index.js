"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _typography = require("../../../helpers/utils/typography");

var StyledStickyContainer = _styledComponents.default.div.withConfig({
  displayName: "sticky-container__StyledStickyContainer",
  componentId: "trwgvt-0"
})(["will-change:transform;transition-duration:0.2s;transition-timing-function:ease;", ""], function (_ref) {
  var stickyContainerStyleProps = _ref.stickyContainerStyleProps;
  return stickyContainerStyleProps;
});

var StyledSpacer = _styledComponents.default.div.withConfig({
  displayName: "sticky-container__StyledSpacer",
  componentId: "trwgvt-1"
})(["height:", ";flex:0 0 auto;"], function (_ref2) {
  var containerHeight = _ref2.containerHeight;
  return (0, _typography.pxToRem)(containerHeight);
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
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scrollPos = _useState2[0],
      setScrollPos = _useState2[1]; // useRef Hook to save the old scroll state.


  var oldScrollPos = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    function onScroll() {
      setScrollPos(window.pageYOffset); // save the old scroll position in the ref

      oldScrollPos.current = window.pageYOffset;
    }

    window.addEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    return function () {
      return window.removeEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    };
  }, []); // current scroll position minus the old scroll position saved in state.

  var difference = scrollPos - oldScrollPos.current;
  return [difference > 0, difference < 0];
}

var StickyContainer = function StickyContainer(_ref3) {
  var children = _ref3.children,
      top = _ref3.top,
      bottom = _ref3.bottom,
      isSticky = _ref3.isSticky,
      other = (0, _objectWithoutProperties2.default)(_ref3, ["children", "top", "bottom", "isSticky"]);
  var currentStickyContainer = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      stuck = _useState4[0],
      setStuckState = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      containerHeight = _useState6[0],
      setContainerHeight = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      currentlyUnsticking = _useState8[0],
      setCurrentlyUnstickingState = _useState8[1];

  var _useScrollDirection = useScrollDirection(),
      _useScrollDirection2 = (0, _slicedToArray2.default)(_useScrollDirection, 2),
      scrollDirectionDown = _useScrollDirection2[0],
      scrollDirectionUp = _useScrollDirection2[1];

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

  (0, _react.useEffect)(function () {
    if (isSticky === 'always') {
      setSticky();
    }

    var currentContainerHeight = currentStickyContainer.current ? currentStickyContainer.current.clientHeight : 0;
    setContainerHeight(currentContainerHeight);
  }, []); // [] makes that Effect fire on Component mount only

  (0, _react.useEffect)(function () {
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
      return (0, _styledComponents.css)(["position:", ";top:", ";bottom:", ";"], position, top, bottom);
    }

    var distance = currentlyUnsticking || !stuck ? containerHeight : 0;
    var directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom';
    var basis = directionToAnimate === 'top' ? top || 0 : bottom || 0;
    var directionDistance = (0, _typography.pxToRem)(basis - distance);
    return (0, _styledComponents.css)(["position:", ";", ":", ";transition-property:", ";"], position, directionToAnimate, directionDistance, directionToAnimate);
  };

  return _react.default.createElement(_react.Fragment, null, stuck && _react.default.createElement(StyledSpacer, {
    containerHeight: containerHeight
  }), _react.default.createElement(StyledStickyContainer, (0, _extends2.default)({
    ref: currentStickyContainer,
    stickyContainerStyleProps: stickyContainerStyleProps
  }, other), children));
};

exports.StickyContainer = StickyContainer;
StickyContainer.propTypes = {
  top: _propTypes.default.number,
  bottom: _propTypes.default.number,
  isSticky: _propTypes.default.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always'])
};
StickyContainer.defaultProps = {
  top: 0,
  bottom: 0
};