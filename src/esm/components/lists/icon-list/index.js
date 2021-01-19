import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { Item } from './components/item';
export var IconList = function IconList(_ref) {
  var children = _ref.children,
      containerProps = _ref.containerProps,
      listProps = _ref.listProps;
  return /*#__PURE__*/React.createElement(StyledContainer, containerProps, /*#__PURE__*/React.createElement(StyledList, listProps, children));
};
IconList.Item = Item;
var StyledContainer = styled.div.withConfig({
  displayName: "icon-list__StyledContainer",
  componentId: "sc-19ax3y4-0"
})(["position:relative;padding:", " 0;"], pxToRem(1));
var StyledList = styled.ul.withConfig({
  displayName: "icon-list__StyledList",
  componentId: "sc-19ax3y4-1"
})(["margin:0;padding:", " 0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:2px dashed ", ";}"], pxToRem(10), pxToRem(24), COLORS.line1);