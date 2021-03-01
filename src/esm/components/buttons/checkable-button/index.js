import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/buttons/button/button';
import styled, { css } from 'styled-components';
import { checkedCircleIconAsString } from '../../icons/checked-circle-icon';
import { encodeSvgString } from '../../../helpers/utils/encode-svg';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';

var checkedCircleIconStyle = function checkedCircleIconStyle(size) {
  return css(["width:", ";height:", ";bottom:-", ";"], pxToRem(size), pxToRem(size), pxToRem(size / 2 + 1));
};

var getCircleIcon = function getCircleIcon(color) {
  return encodeSvgString(checkedCircleIconAsString({
    circleColor: color,
    checkedColor: COLORS.background1
  }));
};

var StyledCheckableButton = styled(Button).withConfig({
  displayName: "checkable-button__StyledCheckableButton",
  componentId: "b6e3u-0"
})(["&::after{content:'';position:absolute;", " ", " background-repeat:no-repeat;background-position:50% 50%;opacity:0;transform-origin:50% 50%;transition:opacity 0.2s ease,transform 0.2s cubic-bezier(0.3,-0.5,0.8,1);transform:scale(0);}&[aria-checked]::after{opacity:1;transform:scale(1);transition-timing-function:ease,cubic-bezier(0.2,2,0.7,1);}&:focus{outline-offset:", ";}", " &[aria-checked]:focus{outline:", " solid ", ";border-color:", ";}"], function (_ref) {
  var tiny = _ref.tiny,
      big = _ref.big;
  if (tiny === true) return checkedCircleIconStyle(15);
  if (big === true) return checkedCircleIconStyle(24);
  return checkedCircleIconStyle(20);
}, function (_ref2) {
  var modifier = _ref2.modifier,
      disabled = _ref2.disabled;
  var color = COLORS.primary1;

  if (modifier === 'copper') {
    color = COLORS.error;
  }

  if (disabled) {
    color = COLORS.line2;
  }

  return css(["background-image:url(", ");"], getCircleIcon(color));
}, pxToRem(-2), function (_ref3) {
  var modifier = _ref3.modifier;
  return modifier !== 'copper' && css([":hover:not(:disabled),:focus:not(:disabled){border-color:", ";background-color:", ";color:", ";}:active:not(:disabled){border-color:", ";background-color:", ";color:", ";}"], COLORS.primary4, COLORS.background1, COLORS.primary1, COLORS.primary2, COLORS.background1, COLORS.primary2);
}, COLORS.primary1, pxToRem(2), COLORS.primary1);
export var CheckableButton = function CheckableButton(_ref4) {
  var isChecked = _ref4.isChecked,
      children = _ref4.children,
      error = _ref4.error,
      props = _objectWithoutProperties(_ref4, ["isChecked", "children", "error"]);

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

  return /*#__PURE__*/React.createElement(StyledCheckableButton, _extends({}, props, {
    "aria-checked": isChecked || null,
    modifier: checkedModifier
  }), children);
};
CheckableButton.propTypes = {
  big: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  tiny: PropTypes.bool
};
CheckableButton.defaultProps = {
  big: false,
  disabled: false,
  error: false,
  isChecked: false,
  tiny: false
};