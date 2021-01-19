import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { LINK_CLASSNAME } from '../index';
var StyledParagraph = styled.span.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-11s9i6i-0"
})(["margin:0;padding:0;line-height:1;.k-Stepepers-VerticalStepper__link{", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;transition:color 0.4s;&:hover,&:focus,&:active{color:", ";}}.k-Stepepers-VerticalStepper__link--orion{font-size:", ";:before{padding:0 ", ";content:'\u25CF';font-size:", ";color:", ";}}"], TYPOGRAPHY.fontStyles.regular, pxToRem(12), COLORS.primary1, COLORS.primary3, pxToRem(14), pxToRem(8), pxToRem(8), COLORS.font1);
export var Link = function Link(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["variant", "className"]);

  return /*#__PURE__*/React.createElement(StyledParagraph, null, /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classNames(LINK_CLASSNAME, 'k-Stepepers-VerticalStepper__link', "k-Stepepers-VerticalStepper__link--".concat(variant), className)
  })));
};
Link.protoTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Link.defaultProps = {
  variant: 'andromeda'
};