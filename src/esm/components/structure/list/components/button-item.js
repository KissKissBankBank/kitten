import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import classNames from 'classnames';
const Item = styled.div.withConfig({
  displayName: "button-item__Item",
  componentId: "sc-c6wx4k-0"
})(["display:flex;position:relative;border:var(--border);border-top:none;cursor:pointer;padding-left:", ";padding-right:", ";background-color:", ";transition:background-color 0.2s ease;:hover{background-color:", ";}&:focus{z-index:1;}&.k-List__button--withTopBorder{border-top:var(--border);}&[aria-disabled='true']{color:", ";cursor:not-allowed;:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isActive:not([aria-disabled='true']){color:", ";background-color:", ";border-color:", ";:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isFocused:not([aria-disabled='true']){.k-List__button__arrowIcon{left:", ";}}", " .k-List__button__content{flex-grow:1;}.k-List__button__arrow{display:flex;align-items:center;}.k-List__button__arrowIcon{position:relative;left:0;transition:left 0.2s;}"], pxToRem(20), pxToRem(20), COLORS.background1, COLORS.background2, COLORS.line2, COLORS.background1, COLORS.line2, COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.primary2, COLORS.background1, pxToRem(5), _ref => {
  let {
    styles
  } = _ref;
  return styles;
});
export const ButtonItem = _ref2 => {
  let {
    children,
    disabled,
    style,
    withTopBorder,
    onClick,
    onKeyPress,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    className,
    hasArrow,
    active,
    ...others
  } = _ref2;
  const [focus, setFocus] = useState(false);

  const handleKeyPress = event => {
    const enterKey = 13;
    const spaceKey = 32;

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault;
        onClick();
        onKeyPress();
        break;
    }
  };

  const handleFocus = () => {
    setFocus(true);
    onFocus();
  };

  const handleBlur = () => {
    setFocus(false);
    onBlur();
  };

  const handleMouseEnter = () => {
    setFocus(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
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
    className: "k-List__button__arrowIcon"
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
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onKeyPress: () => {},
  hasArrow: true,
  active: false
};