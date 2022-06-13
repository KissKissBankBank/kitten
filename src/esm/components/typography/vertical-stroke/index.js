import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "size"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var VerticalStroke = styled(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var verticalStrokeClassName = classNames('k-VerticalStroke', {
    'k-VerticalStroke--small': size === 'small',
    'k-VerticalStroke--medium': size === 'medium',
    'k-VerticalStroke--large': size === 'large',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-1gvmwyd-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--small{height:", ";width:", ";}&.k-VerticalStroke--medium{height:", ";width:", ";}&.k-VerticalStroke--large{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], COLORS.font1, pxToRem(20), pxToRem(2), pxToRem(30), pxToRem(4), pxToRem(50), pxToRem(4), pxToRem(100), pxToRem(6));
VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'medium'
};