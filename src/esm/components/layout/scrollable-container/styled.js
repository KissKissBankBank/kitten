import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Container } from '../../../components/layout/container';
var gradientWidth = 20;
export var StyledContainer = styled(Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "ecvjg4-0"
})(["position:relative;padding-left:0;padding-right:0;width:100%;"]);
export var scrollableContainerStyle = function scrollableContainerStyle(_ref) {
  _objectDestructuringEmpty(_ref);

  return css(["display:flex;white-space:nowrap;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}scrollbar-width:none;&:before,&:after{content:'';display:block;position:absolute;top:0;bottom:0;pointer-events:none;touch-action:none;}", " ", ""], function (_ref2) {
    var displayLeftGradient = _ref2.displayLeftGradient,
        shadowColor = _ref2.shadowColor;
    return displayLeftGradient && css(["&:before{left:0;width:", ";background-image:linear-gradient( to right,", ",transparent );}"], pxToRem(gradientWidth), shadowColor);
  }, function (_ref3) {
    var displayRightGradient = _ref3.displayRightGradient,
        shadowColor = _ref3.shadowColor;
    return displayRightGradient && css(["&:after{right:0;width:", ";background-image:linear-gradient(to left,", ",transparent);}"], pxToRem(gradientWidth), shadowColor);
  });
};
export var StyledScrollableContainer = styled.div.withConfig({
  displayName: "styled__StyledScrollableContainer",
  componentId: "ecvjg4-1"
})(["", ""], function (props) {
  return scrollableContainerStyle(props);
});