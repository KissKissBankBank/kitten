import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "variant"],
    _excluded2 = ["className", "active"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../../components/molecules/buttons/button';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import classNames from 'classnames';
var StyledButtonGroup = styled.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-gkwk7e-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{position:relative;z-index:0;min-width:auto;width:auto;&:not(:last-child){margin-right:", ";}&:first-child{border-top-left-radius:var(--border-radius-s);border-bottom-left-radius:var(--border-radius-s);}&:last-child{border-top-right-radius:var(--border-radius-s);border-bottom-right-radius:var(--border-radius-s);}&.k-ButtonGroup__button--isActive{border-radius:var(--border-radius-s);z-index:1;}&:active,&:hover,&:focus{border-radius:var(--border-radius-s);z-index:2;}}&.k-ButtonGroup--orion{.k-ButtonGroup__button{border-radius:var(--border-radius-s);color:", ";border:var(--border);background-color:", ";&:hover,&:focus,&:active{color:", ";border:var(--border-hover);background-color:", ";}&.k-ButtonGroup__button--isActive{color:", ";border:var(--border-active);background-color:", ";}&:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}&:last-child{border-top-left-radius:0;border-bottom-left-radius:0;}}}"], pxToRem(-1), COLORS.font1, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.font1, COLORS.primary5);
export var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    role: "group"
  }, props, {
    className: classNames('k-ButtonGroup', className, "k-ButtonGroup--" + variant)
  }));
};

var ButtonGroupButton = function ButtonGroupButton(_ref2) {
  var className = _ref2.className,
      active = _ref2.active,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    className: classNames('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active
    })
  }));
};

ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
ButtonGroup.defaultProps = {
  variant: 'orion'
};