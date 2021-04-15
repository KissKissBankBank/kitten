import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/buttons/button';
import styled, { css } from 'styled-components';
import { checkedCircleIconAsString } from '../../icons/checked-circle-icon';
import { encodeSvgString } from '../../../helpers/utils/encode-svg';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';

var getCircleIcon = function getCircleIcon(color) {
  return encodeSvgString(checkedCircleIconAsString({
    circleColor: color,
    checkedColor: COLORS.background1
  }));
};

var StyledCheckableButton = styled(Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "b6e3u-0"
})(["&::after{content:'';box-sizing:border-box;border-radius:50%;width:", ";height:", ";width:var(--CheckableButton-radius);height:var(--CheckableButton-radius);background-repeat:no-repeat;background-position:50% 50%;background-size:var(--CheckableButton-radius) var(--CheckableButton-radius);}&.k-CheckableButton--bottom,&.k-CheckableButton--left[aria-checked]{&::after{background-image:url(", ");}&.k-Button--copper::after{background-image:url(", ");}&:disabled::after{background-image:url(", ");}}&.k-CheckableButton--bottom{&::after{position:absolute;bottom:-", ";bottom:calc((var(--CheckableButton-radius) / 2 + ", ") * -1);opacity:0;transform-origin:50% 50%;transition:opacity 0.2s ease,transform 0.2s cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}}&.k-CheckableButton--left{display:flex;flex-direction:row-reverse;justify-content:flex-end;padding-left:0;&::after{margin:0 ", ";margin:0 var(--CheckableButton-checkMargin);border:", " solid ", ";background-color:", ";transition:border-color 0.2s ease,background 0.2s ease;}&[aria-checked]::after{border-color:", ";background-color:", ";}&.k-Button--copper::after{border-color:", ";background-color:", ";}&:disabled::after{border-color:", ";background-color:", ";}}&.k-Button--micro,&.k-Button--tiny{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--regular{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--big,&.k-Button--huge,&.k-Button--giant{--CheckableButton-radius:", ";--CheckableButton-checkMargin:", ";}&.k-Button--lithium,&.k-Button--hydrogen{&:not(:disabled){&:hover,&:focus{border-color:", ";background-color:", ";color:", ";&:not([aria-checked])::after{border-color:", ";}}&:active{border-color:", ";background-color:", ";color:", ";}}}&:focus{outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-checked]:focus{outline:", " solid ", ";border-color:", ";}"], pxToRem(20), pxToRem(20), getCircleIcon(COLORS.primary1), getCircleIcon(COLORS.error), getCircleIcon(COLORS.line2), pxToRem(20 / 2 + 1), pxToRem(1), pxToRem(15), pxToRem(2), COLORS.line2, COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.error, COLORS.background1, COLORS.background1, COLORS.line2, pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(15), pxToRem(24), pxToRem(20), COLORS.primary4, COLORS.background1, COLORS.primary1, COLORS.primary4, COLORS.primary2, COLORS.background1, COLORS.primary2, pxToRem(-2), COLORS.primary4, COLORS.primary1, pxToRem(2), COLORS.primary1);
export var CheckableButton = function CheckableButton(_ref) {
  var checkPosition = _ref.checkPosition,
      isChecked = _ref.isChecked,
      className = _ref.className,
      children = _ref.children,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["checkPosition", "isChecked", "className", "children", "error"]);

  var checkedModifier = function () {
    switch (true) {
      case error:
        return 'copper';

      case isChecked:
        return 'lithium';

      default:
        return 'hydrogen';
    }
  }();

  return /*#__PURE__*/React.createElement(StyledCheckableButton, _extends({
    className: classNames('k-CheckableButton', className, "k-CheckableButton--".concat(checkPosition))
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