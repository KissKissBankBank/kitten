import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../helpers/utils/typography';
var StyledBadge = styled.span.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "sc-7liuod-0"
})(["", " ", ""], function (_ref) {
  var color = _ref.color;
  return color && css(["background-color:", ";"], color);
}, function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && css(["position:absolute;margin-left:", ";margin-top:", ";"], pxToRem(-8), pxToRem(-4));
});
export var Badge = function Badge(_ref3) {
  var className = _ref3.className,
      spaced = _ref3.spaced,
      Icon = _ref3.Icon,
      others = _objectWithoutProperties(_ref3, ["className", "spaced", "Icon"]);

  return /*#__PURE__*/React.createElement("div", null, Icon && /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement(StyledBadge, _extends({
    role: "alert",
    className: classNames('k-Badge', className, {
      'k-Badge--spaced': spaced
    }),
    withIcon: Icon !== null
  }, others)));
};
Badge.propTypes = {
  className: PropTypes.string,
  spaced: PropTypes.bool,
  color: PropTypes.string,
  Icon: PropTypes.func
};
Badge.defaultProps = {
  className: null,
  spaced: false,
  Icon: null,
  color: null
};