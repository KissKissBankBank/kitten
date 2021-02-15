"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggletip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _gridConfig = require("../../../constants/grid-config");

var _questionMarkIcon = require("../../../components/icons/question-mark-icon");

var _warningIcon = require("../../../components/icons/warning-icon");

var StyledWrapper = _styledComponents.default.span.withConfig({
  displayName: "toggletip__StyledWrapper",
  componentId: "f1inv4-0"
})(["--toggletipAction-size:", ";position:relative;display:inline-block;&,&.k-Toggletip--info{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--warning{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--error{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--success{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--disabled{--toggletipAction-color:", ";--toggletipBubble-color:", ";}.k-Toggletip__action{position:relative;background-color:var(--toggletipAction-color);width:var(--toggletipAction-size);height:var(--toggletipAction-size);border-radius:50%;}.k-Toggletip__bubble{--toggletipBubble-arrowMainPosition:", ";z-index:var(--toggletipBubble-zIndex);box-sizing:border-box;padding:", ";background-color:var(--toggletipBubble-color);text-align:left;&:after{content:'';position:absolute;display:block;width:0;height:0;border:", " solid transparent;}@media (max-width:", "){border-radius:", ";position:absolute;top:calc(var(--toggletipAction-size) + ", ");left:calc( -1 * var(--toggletipAction-left) + ", " );width:calc(100vw - ", ");&:after{top:var(--toggletipBubble-arrowMainPosition);left:calc( var(--toggletipAction-left) - ", " - ", " + (var(--toggletipAction-size) / 2) );border-bottom-color:var(--toggletipBubble-color);}}@media (min-width:", "){border-radius:", ";position:absolute;top:calc(var(--toggletipAction-size) / 2);left:calc(100% + ", ");transform:translateY(-50%);min-width:", ";max-width:", ";width:max-content;&.k-Toggletip__bubble--rightLimit{max-width:calc( 100vw - var(--toggletipAction-left) - ", " - var(--toggletipAction-size) );}&:after{left:var(--toggletipBubble-arrowMainPosition);top:calc(50% - ", ");border-right-color:var(--toggletipBubble-color);}&.k-Toggletip__bubble--lowTop{top:calc( -1 * var(--toggletipAction-top) + ", " );transform:none;&:after{top:calc( var(--toggletipAction-top) - ", " - ", " + (var(--toggletipAction-size) / 2) );}}&.k-Toggletip__bubble--left{left:initial;right:calc(100% + ", ");&:after{left:initial;right:var(--toggletipBubble-arrowMainPosition);border-right-color:transparent;border-left-color:var(--toggletipBubble-color);}}}}"], (0, _typography.pxToRem)(24), _colorsConfig.default.primary1, _colorsConfig.default.primary4, _colorsConfig.default.orange, _colorsConfig.default.orange1, _colorsConfig.default.error, _colorsConfig.default.error2, _colorsConfig.default.valid, _colorsConfig.default.valid1, _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(-2 * 10), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN * 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(440), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN + 20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

var ButtonIcon = function ButtonIcon(_ref) {
  var modifier = _ref.modifier;

  if (modifier === 'info') {
    return /*#__PURE__*/_react.default.createElement(_questionMarkIcon.QuestionMarkIcon, {
      width: 6,
      height: 10,
      color: _colorsConfig.default.background1
    });
  }

  return /*#__PURE__*/_react.default.createElement(_warningIcon.WarningIcon, {
    width: 2,
    height: 10,
    color: _colorsConfig.default.background1
  });
};

var Toggletip = function Toggletip(_ref2) {
  var modifier = _ref2.modifier,
      style = _ref2.style,
      className = _ref2.className,
      children = _ref2.children,
      actionLabel = _ref2.actionLabel,
      actionProps = _ref2.actionProps,
      bubbleProps = _ref2.bubbleProps,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["modifier", "style", "className", "children", "actionLabel", "actionProps", "bubbleProps"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isHover = _useState2[0],
      setHoverState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      hasBeenClicked = _useState4[0],
      setClickedState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isOpen = _useState6[0],
      setOpen = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      actionPosition = _useState8[0],
      setActionPosition = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      bubbleOnLeftSide = _useState10[0],
      setBubbleOnLeftSide = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      bubbleLowTop = _useState12[0],
      setBubbleLowTop = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      bubbleRightLimit = _useState14[0],
      setBubbleRightLimit = _useState14[1];

  var actionElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (isHover) {
      setOpen(true);
    }

    if (!isHover && !hasBeenClicked) {
      setOpen(false);
    }
  }, [isHover, hasBeenClicked]);
  (0, _react.useEffect)(function () {
    var _actionElement$curren, _actionElement$curren2;

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeydownEscape);
    window.addEventListener('resize', throttleUpdateCoordinates);
    var bubbleElement = (_actionElement$curren = actionElement.current) === null || _actionElement$curren === void 0 ? void 0 : (_actionElement$curren2 = _actionElement$curren.nextElementSibling) === null || _actionElement$curren2 === void 0 ? void 0 : _actionElement$curren2.children[0];
    var bubbleElementCoords = (bubbleElement === null || bubbleElement === void 0 ? void 0 : bubbleElement.getBoundingClientRect()) || {};
    var shouldDisplayBubbleLowTop = actionPosition.top < bubbleElementCoords.height / 2;
    setBubbleLowTop(shouldDisplayBubbleLowTop);
    return function () {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeydownEscape);
      window.removeEventListener('resize', throttleUpdateCoordinates);
    };
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    updateCoordinates();
  }, [actionElement]);

  var throttleUpdateCoordinates = function throttleUpdateCoordinates() {
    (0, _throttle.default)(updateCoordinates, 50);
  };

  var updateCoordinates = function updateCoordinates() {
    if (!actionElement.current) return;
    var actionElementCoords = actionElement.current.getBoundingClientRect();
    setActionPosition({
      top: actionElementCoords.top,
      left: actionElementCoords.left
    });
    var bubblePlusMargins = 220 + 20 + _gridConfig.CONTAINER_PADDING_THIN;
    var shouldDisplayOnLeftSide = document.body.clientWidth < actionElementCoords.right + bubblePlusMargins;
    setBubbleOnLeftSide(shouldDisplayOnLeftSide);
    var shouldDisplayBubbleRightLimit = document.body.clientWidth - (actionElementCoords.right + _gridConfig.CONTAINER_PADDING_THIN + 20) < 440;
    setBubbleRightLimit(shouldDisplayBubbleRightLimit);
  };

  var handleOutsideClick = function handleOutsideClick(event) {
    if (actionElement.current !== event.target) {
      setClickedState(false);
      setOpen(false);
    }
  };

  var handleKeydownEscape = function handleKeydownEscape(event) {
    if (event.key === 'Escape') {
      setClickedState(false);
      setOpen(false);
    }
  };

  var handleClick = function handleClick(event) {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(function () {
      setOpen(true);
      setClickedState(true);
    }, 100);
  };

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Toggletip', className, "k-Toggletip--".concat(modifier)),
    style: (0, _extends2.default)({
      '--toggletipAction-top': actionPosition.top ? (0, _typography.pxToRem)(actionPosition.top) : undefined,
      '--toggletipAction-left': actionPosition.left ? (0, _typography.pxToRem)(actionPosition.left) : undefined
    }, style),
    onMouseEnter: function onMouseEnter() {
      return setHoverState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoverState(false);
    }
  }, props), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, actionProps, {
    className: (0, _classnames.default)('k-Toggletip__action', 'k-u-reset-button', actionProps.className),
    type: "button",
    "aria-label": actionLabel,
    onClick: handleClick,
    onBlur: function onBlur() {
      return setOpen(false);
    },
    ref: actionElement,
    style: (0, _extends2.default)({
      '--toggletipAction-color': actionProps.color || null
    }, actionProps.style)
  }), /*#__PURE__*/_react.default.createElement(ButtonIcon, {
    modifier: modifier
  })), /*#__PURE__*/_react.default.createElement("span", {
    role: "status"
  }, isOpen && /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, bubbleProps, {
    className: (0, _classnames.default)('k-Toggletip__bubble', 'k-u-weight-light', 'k-u-size-tiny', 'k-u-line-height-1-3', bubbleProps.className, {
      'k-Toggletip__bubble--left': bubbleOnLeftSide,
      'k-Toggletip__bubble--lowTop': bubbleLowTop,
      'k-Toggletip__bubble--rightLimit': !bubbleOnLeftSide && bubbleRightLimit
    }),
    style: (0, _extends2.default)({
      '--toggletipBubble-zIndex': bubbleProps.zIndex || 1,
      '--toggletipBubble-color': bubbleProps.color || null
    }, bubbleProps.style)
  }), children)));
};

exports.Toggletip = Toggletip;
Toggletip.defaultProps = {
  modifier: 'info',
  actionProps: {},
  bubbleProps: {}
};
Toggletip.propTypes = {
  modifier: _propTypes.default.oneOf(['info', 'warning', 'error', 'success', 'disabled']),
  actionLabel: _propTypes.default.string.isRequired,
  actionProps: _propTypes.default.object,
  bubbleProps: _propTypes.default.object
};