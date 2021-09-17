import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["modifier", "style", "className", "children", "actionLabel", "actionProps", "bubbleProps", "targetElement"],
    _excluded2 = ["className", "zIndex", "color", "style"];
import "core-js/modules/es.object.assign.js";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash/throttle';
import styled from 'styled-components';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config';
import { QuestionMarkIcon } from '../../../components/graphics/icons/question-mark-icon';
import { WarningIcon } from '../../../components/graphics/icons/warning-icon';
var StyledWrapper = styled.span.withConfig({
  displayName: "toggletip__StyledWrapper",
  componentId: "sc-662n6t-0"
})(["--toggletipAction-size:", ";position:relative;display:inline-block;&,&.k-Toggletip--info{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--warning{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--error{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--success{--toggletipAction-color:", ";--toggletipBubble-color:", ";}&.k-Toggletip--disabled{--toggletipAction-color:", ";--toggletipBubble-color:", ";}.k-Toggletip__action{position:relative;background-color:var(--toggletipAction-color);width:var(--toggletipAction-size);height:var(--toggletipAction-size);border-radius:50%;}.k-Toggletip__bubble{--toggletipBubble-arrowMainPosition:", ";z-index:var(--toggletipBubble-zIndex);box-sizing:border-box;padding:", ";background-color:var(--toggletipBubble-color);text-align:left;&:after{content:'';position:absolute;display:block;width:0;height:0;border:", " solid transparent;}@media (max-width:", "){border-radius:", ";position:absolute;top:calc(var(--toggletipAction-size) + ", ");left:calc( -1 * var(--toggletipAction-left) + ", " );width:calc(100vw - ", ");&:after{top:var(--toggletipBubble-arrowMainPosition);left:calc( var(--toggletipAction-left) - ", " - ", " + (var(--toggletipAction-size) / 2) );border-bottom-color:var(--toggletipBubble-color);}}@media (min-width:", "){border-radius:", ";position:absolute;top:50%;transform:translateY(-50%);left:calc(100% + ", ");transform:translateY(-50%);min-width:", ";max-width:", ";width:max-content;&.k-Toggletip__bubble--rightLimit{max-width:calc( 100vw - var(--toggletipAction-left) - ", " - var(--toggletipAction-size) );}&:after{left:var(--toggletipBubble-arrowMainPosition);top:calc(50% - ", ");border-right-color:var(--toggletipBubble-color);}&.k-Toggletip__bubble--lowTop{top:calc( -1 * var(--toggletipAction-top) + ", " );transform:none;&:after{top:calc( var(--toggletipAction-top) - ", " - ", " + (var(--toggletipAction-size) / 2) );}}&.k-Toggletip__bubble--left{left:initial;right:calc(100% + ", ");&:after{left:initial;right:var(--toggletipBubble-arrowMainPosition);border-right-color:transparent;border-left-color:var(--toggletipBubble-color);}}}}"], pxToRem(24), COLORS.primary1, COLORS.primary4, COLORS.orange, COLORS.orange1, COLORS.error, COLORS.error2, COLORS.valid, COLORS.valid1, COLORS.font2, COLORS.line1, pxToRem(-2 * 10), pxToRem(12), pxToRem(10), pxToRem(ScreenConfig.XS.max), pxToRem(6), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN * 2), pxToRem(CONTAINER_PADDING_THIN), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(8), pxToRem(20), pxToRem(220), pxToRem(440), pxToRem(CONTAINER_PADDING_THIN + 20), pxToRem(10), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(10), pxToRem(20));

var ButtonIcon = function ButtonIcon(_ref) {
  var modifier = _ref.modifier;

  if (modifier === 'info') {
    return /*#__PURE__*/React.createElement(QuestionMarkIcon, {
      width: 6,
      height: 10,
      color: COLORS.background1
    });
  }

  return /*#__PURE__*/React.createElement(WarningIcon, {
    width: 2,
    height: 10,
    color: COLORS.background1
  });
};

export var Toggletip = function Toggletip(_ref2) {
  var modifier = _ref2.modifier,
      style = _ref2.style,
      className = _ref2.className,
      children = _ref2.children,
      actionLabel = _ref2.actionLabel,
      actionProps = _ref2.actionProps,
      bubbleProps = _ref2.bubbleProps,
      targetElement = _ref2.targetElement,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var _useState = useState(false),
      isHover = _useState[0],
      setHoverState = _useState[1];

  var _useState2 = useState(false),
      hasBeenClicked = _useState2[0],
      setClickedState = _useState2[1];

  var _useState3 = useState(false),
      isOpen = _useState3[0],
      setOpen = _useState3[1];

  var _useState4 = useState({}),
      actionPosition = _useState4[0],
      setActionPosition = _useState4[1];

  var _useState5 = useState(false),
      bubbleOnLeftSide = _useState5[0],
      setBubbleOnLeftSide = _useState5[1];

  var _useState6 = useState(false),
      bubbleLowTop = _useState6[0],
      setBubbleLowTop = _useState6[1];

  var _useState7 = useState(false),
      bubbleRightLimit = _useState7[0],
      setBubbleRightLimit = _useState7[1];

  var actionElement = useRef(null);

  var bubbleClassName = bubbleProps.className,
      bubbleZIndex = bubbleProps.zIndex,
      bubbleColor = bubbleProps.color,
      bubbleStyle = bubbleProps.style,
      otherBubbleProps = _objectWithoutPropertiesLoose(bubbleProps, _excluded2);

  useEffect(function () {
    if (isHover) {
      setOpen(true);
    }

    if (!isHover && !hasBeenClicked) {
      setOpen(false);
    }
  }, [isHover, hasBeenClicked]);
  useEffect(function () {
    var _actionElement$curren, _actionElement$curren2;

    if (!domElementHelper.canUseDom()) return;
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeydownEscape);
    window.addEventListener('DOMContentLoaded', updateCoordinates);
    window.addEventListener('resize', throttleUpdateCoordinates);
    var bubbleElement = (_actionElement$curren = actionElement.current) == null ? void 0 : (_actionElement$curren2 = _actionElement$curren.nextElementSibling) == null ? void 0 : _actionElement$curren2.children[0];
    var bubbleElementCoords = (bubbleElement == null ? void 0 : bubbleElement.getBoundingClientRect()) || {};
    var shouldDisplayBubbleLowTop = actionPosition.top < bubbleElementCoords.height / 2;
    setBubbleLowTop(shouldDisplayBubbleLowTop);
    return function () {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeydownEscape);
      window.removeEventListener('DOMContentLoaded', updateCoordinates);
      window.removeEventListener('resize', throttleUpdateCoordinates);
    };
  }, [isOpen]);
  useEffect(function () {
    if (!domElementHelper.canUseDom()) return;

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      updateCoordinates();
    }
  }, []);

  var updateCoordinates = function updateCoordinates() {
    if (!actionElement.current) return;
    var actionElementCoords = actionElement.current.getBoundingClientRect();
    setActionPosition({
      top: actionElementCoords.top,
      left: actionElementCoords.left
    });
    var bubblePlusMargins = 220 + 20 + CONTAINER_PADDING_THIN;
    var shouldDisplayOnLeftSide = document.body.clientWidth < actionElementCoords.right + bubblePlusMargins;
    setBubbleOnLeftSide(shouldDisplayOnLeftSide);
    var shouldDisplayBubbleRightLimit = document.body.clientWidth - (actionElementCoords.right + CONTAINER_PADDING_THIN + 20) < 440;
    setBubbleRightLimit(shouldDisplayBubbleRightLimit);
  };

  var throttleUpdateCoordinates = throttle(updateCoordinates, 100);

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

  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-Toggletip', className, "k-Toggletip--" + modifier),
    style: Object.assign({
      '--toggletipAction-top': actionPosition.top ? pxToRem(actionPosition.top) : undefined,
      '--toggletipAction-left': actionPosition.left ? pxToRem(actionPosition.left) : undefined
    }, style),
    onMouseEnter: function onMouseEnter() {
      return setHoverState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoverState(false);
    }
  }, props), !!targetElement && /*#__PURE__*/React.isValidElement(targetElement) ? /*#__PURE__*/React.createElement("button", _extends({}, actionProps, {
    ref: actionElement,
    type: "button",
    "aria-label": actionLabel,
    className: "k-u-reset-button"
  }), targetElement) : /*#__PURE__*/React.createElement("button", _extends({}, actionProps, {
    className: classNames('k-Toggletip__action', 'k-u-reset-button', actionProps.className),
    type: "button",
    "aria-label": actionLabel,
    onClick: handleClick,
    onBlur: function onBlur() {
      return setOpen(false);
    },
    ref: actionElement,
    style: Object.assign({
      '--toggletipAction-color': actionProps.color || null
    }, actionProps.style)
  }), /*#__PURE__*/React.createElement(ButtonIcon, {
    modifier: modifier
  })), /*#__PURE__*/React.createElement("span", {
    role: "status"
  }, isOpen && /*#__PURE__*/React.createElement("span", _extends({
    className: classNames('k-Toggletip__bubble', 'k-u-weight-light', 'k-u-size-tiny', 'k-u-line-height-1-3', bubbleClassName, {
      'k-Toggletip__bubble--left': bubbleOnLeftSide,
      'k-Toggletip__bubble--lowTop': bubbleLowTop,
      'k-Toggletip__bubble--rightLimit': !bubbleOnLeftSide && bubbleRightLimit
    }),
    style: Object.assign({
      '--toggletipBubble-zIndex': bubbleZIndex || 1,
      '--toggletipBubble-color': bubbleColor || null
    }, bubbleStyle)
  }, otherBubbleProps), children)));
};
Toggletip.defaultProps = {
  modifier: 'info',
  actionProps: {},
  bubbleProps: {},
  targetElement: null
};
Toggletip.propTypes = {
  modifier: PropTypes.oneOf(['info', 'warning', 'error', 'success', 'disabled']),
  actionLabel: PropTypes.string.isRequired,
  actionProps: PropTypes.object,
  bubbleProps: PropTypes.object,
  targetElement: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};