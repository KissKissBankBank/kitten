import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
var StyledBadge = styled.span.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "d8v7s7-0"
})(["--Badge-background-color:", ";display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;padding:", " ", ";line-height:1;min-height:", ";min-width:", ";border-radius:", ";color:", ";", ";font-size:", ";line-height:1.2;border:", " solid white;background-color:var(--Badge-background-color);&.k-Badge--spaced{margin:0 ", ";}&.k-Badge--no-border{min-height:", ";min-width:", ";border:0;}&.k-Badge--hasIcon{position:relative;left:", ";top:", ";}"], COLORS.primary1, pxToRem(2), pxToRem(5), pxToRem(18 + 2), pxToRem(18 + 2), pxToRem(10), COLORS.background1, TYPOGRAPHY.fontStyles.regular, stepToRem(-4), pxToRem(2), pxToRem(5), pxToRem(18), pxToRem(18), pxToRem(-8), pxToRem(-8));
export var Badge = function Badge(_ref) {
  var className = _ref.className,
      spaced = _ref.spaced,
      Icon = _ref.Icon,
      a11yText = _ref.a11yText,
      color = _ref.color,
      withBorder = _ref.withBorder,
      style = _ref.style,
      others = _objectWithoutProperties(_ref, ["className", "spaced", "Icon", "a11yText", "color", "withBorder", "style"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, Icon ? /*#__PURE__*/React.createElement("div", {
    className: "k-Badge__wrapper k-u-flex k-u-flex-alignItems-center"
  }, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(StyledBadge, _extends({
    "aria-label": a11yText,
    className: classNames('k-Badge', 'k-Badge--hasIcon', className, {
      'k-Badge--spaced': spaced,
      'k-Badge--no-border': !withBorder
    }),
    style: _extends({
      '--Badge-background-color': color
    }, style)
  }, others))) : /*#__PURE__*/React.createElement(StyledBadge, _extends({
    "aria-label": a11yText,
    className: classNames('k-Badge', className, {
      'k-Badge--spaced': spaced,
      'k-Badge--no-border': !withBorder
    }),
    style: _extends({
      '--Badge-background-color': color
    }, style)
  }, others)));
};
Badge.propTypes = {
  spaced: PropTypes.bool,
  withBorder: PropTypes.bool,
  color: PropTypes.string,
  Icon: PropTypes.func,
  a11yText: PropTypes.string
};
Badge.defaultProps = {
  spaced: false,
  withBorder: true,
  Icon: null,
  color: null,
  a11yText: null
};