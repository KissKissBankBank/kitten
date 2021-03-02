import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var StyledBadge = styled.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-1nhhmea-0"
})(["box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:", ";background-color:", ";&.k-IconBadge--empty{border:", " solid ", ";background-color:", ";}&.k-IconBadge--valid{background-color:", ";}&.k-IconBadge--disabled{background-color:", ";}&.k-IconBadge--tiny{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";&,& svg{max-width:", ";}}}&.k-IconBadge--big{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}&.k-IconBadge--huge{min-width:", ";min-height:", ";border-radius:", ";.k-IconBadge__content{font-size:", ";}}.k-IconBadge__content{flex-basis:", ";color:", ";text-align:center;font-weight:bold;font-size:", ";line-height:0;}svg{fill:", ";}"], pxToRem(30), pxToRem(30), pxToRem(30), COLORS.primary1, pxToRem(2), COLORS.line1, COLORS.background1, COLORS.valid, COLORS.line2, pxToRem(20), pxToRem(20), pxToRem(20), stepToRem(-1), pxToRem(14), pxToRem(40), pxToRem(40), pxToRem(40), stepToRem(-1), pxToRem(50), pxToRem(50), pxToRem(50), stepToRem(-1), pxToRem(11), COLORS.background1, stepToRem(-2), COLORS.background1);
export var IconBadge = function IconBadge(_ref) {
  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      valid = _ref.valid,
      empty = _ref.empty,
      big = _ref.big,
      huge = _ref.huge,
      size = _ref.size,
      others = _objectWithoutProperties(_ref, ["className", "children", "disabled", "valid", "empty", "big", "huge", "size"]);

  return /*#__PURE__*/React.createElement(StyledBadge, _extends({
    className: classNames('k-IconBadge', className, "k-IconBadge--".concat(size), {
      'k-IconBadge--disabled': disabled,
      'k-IconBadge--valid': valid,
      'k-IconBadge--empty': empty,
      'k-IconBadge--big': big,
      'k-IconBadge--huge': huge
    })
  }, others), /*#__PURE__*/React.createElement("span", {
    className: "k-IconBadge__content"
  }, children));
};
IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  size: 'normal'
};
IconBadge.propTypes = {
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  empty: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge'])
};