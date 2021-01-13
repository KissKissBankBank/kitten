import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Container } from '../../../components/grid/container';
import { hexToRgba } from '../../../helpers/utils/hex-to-rgba';
var gradientWidth = 20;
export var StyledContainer = styled(Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "d41exg-0"
})(["position:relative;padding-left:0;padding-right:0;width:100%;"]);
export var scrollableContainerStyle = function scrollableContainerStyle(_ref) {
  _objectDestructuringEmpty(_ref);

  return css(["display:flex;white-space:nowrap;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}scrollbar-width:none;&:before,&:after{content:'';display:block;position:absolute;top:0;bottom:0;pointer-events:none;touch-action:none;}", " ", ""], function (_ref2) {
    var displayLeftGradient = _ref2.displayLeftGradient,
        shadowColor = _ref2.shadowColor;
    return displayLeftGradient && css(["&:before{left:0;width:", ";background-image:linear-gradient( to right,", ",", " );}"], pxToRem(gradientWidth), hexToRgba(shadowColor, 1), hexToRgba(shadowColor, 0));
  }, function (_ref3) {
    var displayRightGradient = _ref3.displayRightGradient,
        shadowColor = _ref3.shadowColor;
    return displayRightGradient && css(["&:after{right:0;width:", ";background-image:linear-gradient( to left,", ",", " );}"], pxToRem(gradientWidth), hexToRgba(shadowColor, 1), hexToRgba(shadowColor, 0));
  });
};
export var StyledScrollableContainer = styled.div.withConfig({
  displayName: "styled__StyledScrollableContainer",
  componentId: "d41exg-1"
})(["", ""], function (props) {
  return scrollableContainerStyle(props);
});