import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var Separator = styled(function (_ref) {
  var darker = _ref.darker,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["darker", "className"]);

  var separatorClassName = classNames('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: separatorClassName
  }, props));
}).withConfig({
  displayName: "separator__Separator",
  componentId: "sc-1dgi38g-0"
})(["&.k-Separator{margin:0;border:none;background:", ";height:", ";}&.k-Separator--darker{background:", ";}"], COLORS.line1, pxToRem(1), COLORS.line2);
Separator.propTypes = {
  darker: PropTypes.bool
};
Separator.defaultProps = {
  className: null,
  darker: false
};