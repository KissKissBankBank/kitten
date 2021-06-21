import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../components/buttons/button';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import classNames from 'classnames';
var borderRadius = pxToRem(4);
var borderSize = pxToRem(2);
var StyledButtonGroup = styled.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-11uu9oe-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{z-index:0;min-width:auto;width:auto;&:not(:last-child){margin-right:-", ";}&:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}&:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:active,&:hover,&:focus,&.k-ButtonGroup__button--isActive{border-radius:", ";z-index:1;}}&.k-ButtonGroup--orion{.k-ButtonGroup__button{border-radius:", ";color:", ";border-color:", ";background-color:", ";&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}&.k-ButtonGroup__button--isActive{color:", ";border-color:", ";background-color:", ";}&:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}&:last-child{border-top-left-radius:0;border-bottom-left-radius:0;}}}"], borderSize, borderRadius, borderRadius, borderRadius, borderRadius, borderRadius, pxToRem(4), COLORS.font1, COLORS.line1, COLORS.background1, COLORS.font1, COLORS.primary2, COLORS.background1, COLORS.font1, COLORS.primary1, COLORS.primary5);
export var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["className", "variant"]);

  return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    role: "group"
  }, props, {
    className: classNames('k-ButtonGroup', className, "k-ButtonGroup--".concat(variant))
  }));
};

var ButtonGroupButton = function ButtonGroupButton(_ref2) {
  var className = _ref2.className,
      active = _ref2.active,
      props = _objectWithoutProperties(_ref2, ["className", "active"]);

  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    className: classNames('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active
    })
  }));
};

ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  active: PropTypes.bool
};
ButtonGroup.defaultProps = {
  variant: 'andromeda',
  active: false
};