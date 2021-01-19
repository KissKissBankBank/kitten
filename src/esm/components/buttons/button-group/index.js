import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/buttons/button/button';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var borderRadius = pxToRem(4);
var borderSize = pxToRem(2);
var StyledButtonGroup = styled.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-11uu9oe-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{z-index:0;min-width:auto;width:auto;&:not(:last-child){margin-right:-", ";}&:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}&:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:active,&:hover,&:focus,&.k-ButtonGroup__button--isActive{border-radius:", ";z-index:1;}}"], borderSize, borderRadius, borderRadius, borderRadius, borderRadius, borderRadius);
export var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    role: "group"
  }, props, {
    className: classNames('k-ButtonGroup', className)
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