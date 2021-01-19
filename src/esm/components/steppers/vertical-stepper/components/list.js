import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
var StyledList = styled.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1m61gol-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], pxToRem(5), pxToRem(10), TYPOGRAPHY.fontStyles.light, pxToRem(12), function (_ref) {
  var error = _ref.error;
  return error && css(["", ";color:", ";"], TYPOGRAPHY.fontStyles.regular, COLORS.error);
});
var StyledItem = styled.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1m61gol-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], pxToRem(2), pxToRem(10), pxToRem(8));
export var List = function List(_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/React.createElement(StyledList, props);
};
List.Item = StyledItem;
List.propTypes = {
  error: PropTypes.bool
};
List.defaultProps = {
  error: false
};