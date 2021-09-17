import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
var borderWidth = pxToRem(2);
var borderColor = COLORS.line1;
var StyledContainer = styled.div.withConfig({
  displayName: "reward-edition__StyledContainer",
  componentId: "sc-1qdy2br-0"
})(["width:100%;height:100%;border-width:", ";border-style:solid;border-color:", ";"], borderWidth, borderColor);
export var RewardEdition = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(RewardEdition, _PureComponent);

  function RewardEdition() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = RewardEdition.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(StyledContainer, null, this.props.children);
  };

  return RewardEdition;
}(PureComponent);
RewardEdition.Header = Header;
RewardEdition.Content = Content;
RewardEdition.Footer = Footer;