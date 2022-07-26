import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
const StyledList = styled.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1rzzvwx-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], pxToRem(5), pxToRem(10), TYPOGRAPHY.fontStyles['400'], pxToRem(12), _ref => {
  let {
    error
  } = _ref;
  return error && css(["", ";color:", ";"], TYPOGRAPHY.fontStyles['500'], COLORS.error);
});
const StyledItem = styled.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1rzzvwx-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], pxToRem(2), pxToRem(10), pxToRem(8));
export const List = _ref2 => {
  let { ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(StyledList, props);
};
List.Item = StyledItem;
List.propTypes = {
  error: PropTypes.bool
};
List.defaultProps = {
  error: false
};