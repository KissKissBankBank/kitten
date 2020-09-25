import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ArrowIcon } from '../../../icons/arrow-icon';
import classNames from 'classnames';
var Item = styled.div.withConfig({
  displayName: "button-item__Item",
  componentId: "sc-1xwobvm-0"
})(["display:flex;border:", " solid ", ";border-top:none;cursor:pointer;padding-left:", ";padding-right:", ";background-color:", ";:hover{background-color:", ";}&.k-List__button--withTopBorder{border-top:", " solid ", ";}&[aria-disabled='true']{color:", ";cursor:not-allowed;:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isActive:not([aria-disabled='true']){color:", ";background-color:", ";border-color:", ";:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isFocused:not([aria-disabled='true']){.k-List__button__arrowIcon{left:", ";}}", " .k-List__button__content{flex-grow:1;}.k-List__button__arrow{display:flex;align-items:center;}.k-List__button__arrowIcon{position:relative;left:0;transition:left 0.2s;}"], pxToRem(2), COLORS.line1, pxToRem(20), pxToRem(20), COLORS.background1, COLORS.background2, pxToRem(2), COLORS.line1, COLORS.line2, COLORS.background1, COLORS.line2, COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.primary2, COLORS.background1, pxToRem(5), function (_ref) {
  var styles = _ref.styles;
  return styles;
});
export var ButtonItem = function ButtonItem(_ref2) {
  var children = _ref2.children,
      disabled = _ref2.disabled,
      style = _ref2.style,
      withTopBorder = _ref2.withTopBorder,
      onClick = _ref2.onClick,
      onKeyPress = _ref2.onKeyPress,
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onMouseEnter = _ref2.onMouseEnter,
      onMouseLeave = _ref2.onMouseLeave,
      className = _ref2.className,
      hasArrow = _ref2.hasArrow,
      active = _ref2.active,
      others = _objectWithoutProperties(_ref2, ["children", "disabled", "style", "withTopBorder", "onClick", "onKeyPress", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave", "className", "hasArrow", "active"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var handleKeyPress = function handleKeyPress(event) {
    var enterKey = 13;
    var spaceKey = 32;

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault;
        onClick();
        onKeyPress();
        break;
    }
  };

  var handleFocus = function handleFocus() {
    setFocus(true);
    onFocus();
  };

  var handleBlur = function handleBlur() {
    setFocus(false);
    onBlur();
  };

  var handleMouseEnter = function handleMouseEnter() {
    setFocus(true);
    onMouseEnter();
  };

  var handleMouseLeave = function handleMouseLeave() {
    setFocus(false);
    onMouseLeave();
  };

  return /*#__PURE__*/React.createElement(Item, _extends({
    role: others.as !== 'a' ? 'button' : null,
    tabIndex: disabled ? '-1' : '0',
    onClick: disabled ? null : onClick,
    onKeyPress: disabled ? null : handleKeyPress,
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    onMouseLeave: handleMouseLeave,
    onBlur: handleBlur,
    styles: style,
    "aria-disabled": disabled,
    className: classNames('k-List__button', className, {
      'k-List__button--withTopBorder': withTopBorder,
      'k-List__button--isActive': active,
      'k-List__button--isFocused': focus
    })
  }, others), /*#__PURE__*/React.createElement("div", {
    className: "k-List__button__content"
  }, children), hasArrow && /*#__PURE__*/React.createElement("div", {
    className: "k-List__button__arrow",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    className: "k-Button__icon k-List__button__arrowIcon"
  })));
};
ButtonItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  withTopBorder: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onKeyPress: PropTypes.func,
  hasArrow: PropTypes.bool,
  active: PropTypes.bool
};
ButtonItem.defaultProps = {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onKeyPress: function onKeyPress() {},
  hasArrow: true,
  active: false
};