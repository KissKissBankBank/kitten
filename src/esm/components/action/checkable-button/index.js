import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../action/button';
import styled from 'styled-components';
import { checkedCircleIconAsString } from '../../graphics/icons/checked-circle-icon';
import { encodeSvgString } from '../../../helpers/utils/encode-svg';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';

const getCircleIcon = color => encodeSvgString(checkedCircleIconAsString({
  circleColor: color,
  checkedColor: COLORS.background1
}));

const StyledCheckableButton = styled(Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "sc-1j2xgxx-0"
})(["gap:0;&::after{flex-shrink:0;content:'';box-sizing:border-box;border-radius:var(--border-radius-rounded);width:var(--CheckableButton-dimension);height:var(--CheckableButton-dimension);background-repeat:no-repeat;background-position:50% 50%;background-size:var(--CheckableButton-dimension) var(--CheckableButton-dimension);}&.k-CheckableButton--bottom,&.k-CheckableButton--left[aria-checked]{&::after{background-image:url(", ");}&.k-Button--copper::after{background-image:url(", ");}&:disabled::after{background-image:url(", ");}}&.k-CheckableButton--bottom{&::after{position:absolute;bottom:-", ";bottom:calc((var(--CheckableButton-dimension) / 2 + ", ") * -1);opacity:0;transform-origin:50% 50%;transition:opacity var(--transition),transform var(--transition-duration) cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}}&.k-CheckableButton--left{display:flex;flex-direction:row-reverse;justify-content:flex-end;padding-left:0;text-align:left;&::after{margin:0 ", ";margin:0 var(--CheckableButton-checkMargin);border:var(--border);background-color:", ";transition:border-color var(--transition),background-color var(--transition);}&[aria-checked]::after{border-color:", ";background-color:", ";}&.k-Button--copper::after{border-color:", ";background-color:", ";}&:disabled::after{border-color:", ";background-color:", ";}}&.k-Button--micro,&.k-Button--small{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}&.k-Button--medium{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}&.k-Button--large,&.k-Button--huge,&.k-Button--giant{--CheckableButton-dimension:", ";--CheckableButton-checkMargin:", ";}"], getCircleIcon(COLORS.primary1), getCircleIcon(COLORS.error), getCircleIcon(COLORS.font3), pxToRem(20 / 2 + 1), pxToRem(1), pxToRem(15), COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.error, COLORS.background1, COLORS.background1, COLORS.line2, pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(15), pxToRem(24), pxToRem(20));
export const CheckableButton = _ref => {
  let {
    checkPosition,
    isChecked,
    className,
    children,
    error,
    ...props
  } = _ref;

  const checkedModifier = (() => {
    switch (true) {
      case error:
        return 'copper';

      case isChecked:
        return 'lithium';

      default:
        return 'hydrogen';
    }
  })();

  return /*#__PURE__*/React.createElement(StyledCheckableButton, _extends({
    className: classNames('k-CheckableButton', className, "k-CheckableButton--" + checkPosition),
    role: "checkbox"
  }, props, {
    "aria-checked": isChecked || null,
    modifier: checkedModifier
  }), children);
};
CheckableButton.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  checkPosition: PropTypes.oneOf(['bottom', 'left'])
};
CheckableButton.defaultProps = {
  disabled: false,
  error: false,
  isChecked: false,
  checkPosition: 'bottom'
};