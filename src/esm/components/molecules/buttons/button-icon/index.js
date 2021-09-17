import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "withoutHover", "size"];
import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../../components/molecules/buttons/button';
import { pxToRem } from '../../../../helpers/utils/typography';
import styled from 'styled-components';
var StyledButton = styled(Button).withConfig({
  displayName: "button-icon__StyledButton",
  componentId: "sc-yjuv04-0"
})(["svg,.k-ButtonIcon__svg{display:block;margin:0;padding:0;width:", ";height:", ";transition:fill 0.2s;pointer-events:none;.k-ButtonIcon__svg__stroke{transition:stroke 0.2s;}}&.k-ButtonIcon--nano svg,&.k-ButtonIcon--nano .k-ButtonIcon__svg{width:", ";height:", ";}&.k-ButtonIcon--withoutHover{pointer-events:none;}"], pxToRem(12), pxToRem(14), pxToRem(8), pxToRem(8));
export var ButtonIcon = function ButtonIcon(_ref) {
  var className = _ref.className,
      withoutHover = _ref.withoutHover,
      size = _ref.size,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-ButtonIcon', className, "k-ButtonIcon--" + size, {
      'k-ButtonIcon--withoutHover': withoutHover
    }),
    size: size
  }, others, {
    icon: true
  }));
};
ButtonIcon.defaultProps = {
  size: 'regular',
  withoutHover: false
};