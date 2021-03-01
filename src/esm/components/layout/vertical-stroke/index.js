import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var VerticalStroke = styled(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      others = _objectWithoutProperties(_ref, ["className", "size"]);

  var verticalStrokeClassName = classNames('k-VerticalStroke', {
    'k-VerticalStroke--tiny': size === 'tiny',
    'k-VerticalStroke--default': size === 'default',
    'k-VerticalStroke--big': size === 'big',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-5qljff-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--tiny{height:", ";width:", ";}&.k-VerticalStroke--default{height:", ";width:", ";}&.k-VerticalStroke--big{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], COLORS.font1, pxToRem(20), pxToRem(2), pxToRem(30), pxToRem(4), pxToRem(50), pxToRem(4), pxToRem(100), pxToRem(6));
VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'default'
};