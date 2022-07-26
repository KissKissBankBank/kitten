import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Item } from './components/item';
export const IconList = _ref => {
  let {
    children,
    containerProps,
    listProps
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledContainer, containerProps, /*#__PURE__*/React.createElement(StyledList, listProps, children));
};
IconList.Item = Item;
const StyledContainer = styled.div.withConfig({
  displayName: "icon-list__StyledContainer",
  componentId: "sc-1ooordp-0"
})(["position:relative;padding:", " 0;"], pxToRem(1));
const StyledList = styled.ul.withConfig({
  displayName: "icon-list__StyledList",
  componentId: "sc-1ooordp-1"
})(["margin:0;padding:", " 0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:var(--border-width) dashed var(--color-grey-400);}"], pxToRem(10), pxToRem(24));