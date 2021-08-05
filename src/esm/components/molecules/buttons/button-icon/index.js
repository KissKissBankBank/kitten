import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../../components/molecules/buttons/button';
import { pxToRem } from '../../../../helpers/utils/typography';
import styled from 'styled-components';
var StyledButton = styled(function (_ref) {
  var tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["tag"]);

  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    as: tag
  }));
}).withConfig({
  displayName: "button-icon__StyledButton",
  componentId: "yjuv04-0"
})(["svg,.k-ButtonIcon__svg{display:block;margin:0;padding:0;width:", ";height:", ";transition:fill 0.2s;pointer-events:none;.k-ButtonIcon__svg__stroke{transition:stroke 0.2s;}}&.k-ButtonIcon--nano svg,&.k-ButtonIcon--nano .k-ButtonIcon__svg{width:", ";height:", ";}.k-ButtonIcon--withoutHover{pointer-events:none;}"], pxToRem(12), pxToRem(14), pxToRem(8), pxToRem(8));
export var ButtonIcon = function ButtonIcon(_ref2) {
  var className = _ref2.className,
      tag = _ref2.tag,
      withoutHover = _ref2.withoutHover,
      verticalArrow = _ref2.verticalArrow,
      size = _ref2.size,
      others = _objectWithoutProperties(_ref2, ["className", "tag", "withoutHover", "verticalArrow", "size"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-ButtonIcon', className, "k-ButtonIcon--".concat(size), {
      'k-ButtonIcon--withoutHover': withoutHover,
      'k-ButtonIcon--verticalArrow': verticalArrow
    }),
    size: size,
    tag: tag
  }, others, {
    icon: true
  }));
};
ButtonIcon.defaultProps = {
  tag: 'button',
  size: 'regular',
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false
};