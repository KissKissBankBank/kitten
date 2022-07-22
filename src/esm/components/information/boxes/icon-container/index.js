import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container } from '../../../layout/container';
import { pxToRem } from '../../../../helpers/utils/typography';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
const StyledContainer = styled(Container).withConfig({
  displayName: "icon-container__StyledContainer",
  componentId: "sc-dkec80-0"
})(["position:relative;padding:", ";background-color:", ";margin-left:", ";margin-right:", ";margin-top:", ";margin-bottom:", ";"], pxToRem(20), _ref => {
  let {
    color
  } = _ref;
  return color;
}, _ref2 => {
  let {
    position,
    halfWidth
  } = _ref2;
  return position === 'left' ? pxToRem(halfWidth) : 'auto';
}, _ref3 => {
  let {
    position,
    halfWidth
  } = _ref3;
  return position === 'right' ? pxToRem(halfWidth) : 'auto';
}, _ref4 => {
  let {
    position,
    halfHeight
  } = _ref4;
  return position === 'top' ? pxToRem(halfHeight) : 'auto';
}, _ref5 => {
  let {
    position,
    halfHeight
  } = _ref5;
  return position === 'bottom' ? pxToRem(halfHeight) : 'auto';
});
const IconWrapper = styled.div.withConfig({
  displayName: "icon-container__IconWrapper",
  componentId: "sc-dkec80-1"
})(["position:absolute;", ""], _ref6 => {
  let {
    position,
    marginHeight,
    marginWidth
  } = _ref6;

  if (position === 'top') {
    return css(["left:50%;margin-left:", ";top:", ";"], pxToRem(-marginWidth), pxToRem(-marginHeight));
  }

  if (position === 'bottom') {
    return css(["left:50%;margin-left:", ";bottom:", ";"], pxToRem(-marginWidth), pxToRem(-marginHeight));
  }

  if (position === 'left') {
    return css(["top:50%;margin-top:", ";left:", ";"], pxToRem(-marginHeight), pxToRem(-marginWidth));
  }

  if (position === 'right') {
    return css(["top:50%;margin-top:", ";right:", ";"], pxToRem(-marginHeight), pxToRem(-marginWidth));
  }
});
export const IconContainer = _ref7 => {
  let {
    icon,
    children,
    color,
    iconWidth,
    iconHeight,
    position,
    className,
    iconDescription
  } = _ref7;
  const height = iconHeight || iconWidth;
  return /*#__PURE__*/React.createElement(StyledContainer, {
    className: className,
    color: color,
    position: position,
    halfWidth: iconWidth / 2,
    halfHeight: height / 2
  }, iconDescription && /*#__PURE__*/React.createElement(VisuallyHidden, null, iconDescription), children, /*#__PURE__*/React.createElement(IconWrapper, {
    marginHeight: height / 2,
    marginWidth: iconWidth / 2,
    position: position
  }, /*#__PURE__*/React.cloneElement(icon, {
    width: iconWidth,
    height,
    ['aria-hidden']: true
  })));
};
IconContainer.propTypes = {
  icon: PropTypes.node.isRequired,
  iconDescription: PropTypes.string,
  color: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right'])
};
IconContainer.defaultProps = {
  iconWidth: 25,
  color: '#fff',
  iconDescription: undefined,
  iconHeight: undefined,
  position: 'top'
};