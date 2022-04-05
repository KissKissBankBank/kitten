import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "size"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
export var VerticalStroke = styled(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);
  var verticalStrokeClassName = classNames('k-VerticalStroke', {
    'k-VerticalStroke--tiny': size === 'tiny',
    // Deprecated
    'k-VerticalStroke--small': size === 'small',
    'k-VerticalStroke--default': size === 'default',
    // Deprecated
    'k-VerticalStroke--medium': size === 'medium',
    'k-VerticalStroke--big': size === 'big',
    // Deprecated
    'k-VerticalStroke--large': size === 'large',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-1gvmwyd-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--tiny,&.k-VerticalStroke--small{height:", ";width:", ";}&.k-VerticalStroke--default,&.k-VerticalStroke--medium{height:", ";width:", ";}&.k-VerticalStroke--big,&.k-VerticalStroke--large{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], COLORS.font1, pxToRem(20), pxToRem(2), pxToRem(30), pxToRem(4), pxToRem(50), pxToRem(4), pxToRem(100), pxToRem(6));
VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'medium'
};