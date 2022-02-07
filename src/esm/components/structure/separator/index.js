import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["darker", "className"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var Separator = styled(function (_ref) {
  var darker = _ref.darker,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var separatorClassName = classNames('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: separatorClassName
  }, props));
}).withConfig({
  displayName: "separator__Separator",
  componentId: "sc-1tybzjh-0"
})(["margin:0;border:none;background:", ";height:", ";&.k-Separator--darker{background:", ";}"], COLORS.line1, pxToRem(1), COLORS.line2);
Separator.propTypes = {
  darker: PropTypes.bool
};
Separator.defaultProps = {
  className: null,
  darker: false
};