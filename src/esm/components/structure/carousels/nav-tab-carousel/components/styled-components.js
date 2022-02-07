import styled, { css } from 'styled-components';
import TYPOGRAPHY from '../../../../../constants/typography-config';
import { pxToRem } from '../../../../../helpers/utils/typography';
import { ArrowIcon } from '../../../../graphics/icons/arrow-icon';
var sharedStyledArrowIcons = css(["color:#fff;", ";align-items:center;display:flex;transition:transform 0.3s ease-in-out;line-height:1;width:40%;"], TYPOGRAPHY.fontStyles.regular);
var sharedHoverStyledArrowIcons = css(["cursor:pointer;color:", ";svg{fill:", ";}"], function (_ref) {
  var hoverColor = _ref.hoverColor;
  return hoverColor;
}, function (_ref2) {
  var hoverColor = _ref2.hoverColor;
  return hoverColor;
});
var rightContainer = css(["justify-content:flex-end;text-align:right;"]);
var leftContainer = css(["justify-content:flex-start;"]);
export var RightEmptyContainer = styled.div.withConfig({
  displayName: "styled-components__RightEmptyContainer",
  componentId: "sc-1qd7yp2-0"
})(["", " flex:1;"], rightContainer);
export var LeftEmptyContainer = styled.div.withConfig({
  displayName: "styled-components__LeftEmptyContainer",
  componentId: "sc-1qd7yp2-1"
})(["", " flex:1;"], leftContainer);
export var StyledRightArrowContainer = styled.div.withConfig({
  displayName: "styled-components__StyledRightArrowContainer",
  componentId: "sc-1qd7yp2-2"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(", ");", "}"], rightContainer, sharedStyledArrowIcons, pxToRem(8), sharedHoverStyledArrowIcons);
export var StyledLeftArrowContainer = styled.div.withConfig({
  displayName: "styled-components__StyledLeftArrowContainer",
  componentId: "sc-1qd7yp2-3"
})(["", " ", " &:focus,&:active,&:hover{transform:translate(-", ");", "}"], leftContainer, sharedStyledArrowIcons, pxToRem(8), sharedHoverStyledArrowIcons);
export var StyledArrowIcon = styled(ArrowIcon).withConfig({
  displayName: "styled-components__StyledArrowIcon",
  componentId: "sc-1qd7yp2-4"
})(["min-width:", ";min-height:", ";"], pxToRem(9), pxToRem(9));
export var StyledPrevText = styled.div.withConfig({
  displayName: "styled-components__StyledPrevText",
  componentId: "sc-1qd7yp2-5"
})(["margin-left:", ";"], pxToRem(6));
export var StyledNextText = styled.div.withConfig({
  displayName: "styled-components__StyledNextText",
  componentId: "sc-1qd7yp2-6"
})(["margin-right:", ";"], pxToRem(6));