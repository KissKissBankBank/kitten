import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors-config';
import styled, { css } from 'styled-components';
import { pxToRem, stepToRem } from '../../helpers/utils/typography';
var StyledBadge = styled.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-13mitia-0"
})(["display:flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:", ";background-color:", ";", " ", " ", " ", ""], pxToRem(30), pxToRem(30), pxToRem(30), COLORS.primary1, function (_ref) {
  var valid = _ref.valid;
  return valid && css(["background-color:", ";"], COLORS.valid);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && css(["background-color:", ";"], COLORS.line2);
}, function (_ref3) {
  var big = _ref3.big;
  return big && css(["min-width:", ";min-height:", ";border-radius:", ";"], pxToRem(40), pxToRem(40), pxToRem(40));
}, function (_ref4) {
  var huge = _ref4.huge;
  return huge && css(["min-width:", ";min-height:", ";border-radius:", ";"], pxToRem(50), pxToRem(50), pxToRem(50));
});
var StyledContent = styled.span.withConfig({
  displayName: "icon-badge__StyledContent",
  componentId: "sc-13mitia-1"
})(["flex-basis:", ";fill:", ";color:", ";text-align:center;font-weight:bold;font-size:", ";line-height:0;", ""], pxToRem(11), COLORS.background1, COLORS.background1, stepToRem(-2), function (_ref5) {
  var big = _ref5.big,
      huge = _ref5.huge;
  return (big || huge) && css(["font-size:", ";"], stepToRem(-1));
});
export var IconBadge = function IconBadge(_ref6) {
  var children = _ref6.children,
      disabled = _ref6.disabled,
      valid = _ref6.valid,
      big = _ref6.big,
      huge = _ref6.huge,
      others = _objectWithoutProperties(_ref6, ["children", "disabled", "valid", "big", "huge"]);

  return /*#__PURE__*/React.createElement(StyledBadge, _extends({
    disabled: disabled,
    valid: valid,
    big: big,
    huge: huge
  }, others), /*#__PURE__*/React.createElement(StyledContent, {
    big: big,
    huge: huge
  }, children));
};
IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  big: false,
  huge: false
};
IconBadge.propTypes = {
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool
};