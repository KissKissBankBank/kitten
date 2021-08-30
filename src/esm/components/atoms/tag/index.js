import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
var StyledTag = styled.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-1dt82ne-0"
})(["height:", ";box-sizing:border-box;display:inline-block;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:", ";&.k-Tag--info{background-color:", ";}&.k-Tag--warning{background-color:", ";}&.k-Tag--success{background-color:", ";}&.k-Tag--error{background-color:", ";}&.k-Tag--disabled{background-color:", ";}"], pxToRem(30), pxToRem(10), pxToRem(30), TYPOGRAPHY.fontStyles.light, stepToRem(-1), pxToRem(4), COLORS.primary5, COLORS.orange1, COLORS.valid1, COLORS.error2, COLORS.line1);
export var Tag = function Tag(_ref) {
  var type = _ref.type,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "className"]);

  return /*#__PURE__*/React.createElement(StyledTag, _extends({
    className: classNames('k-Tag', className, "k-Tag--".concat(type))
  }, props));
};
Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled'])
};
Tag.defaultProps = {
  type: 'info'
};