import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../../components/typography/text';
import { Button } from '../../../../components/buttons/button/button';
import { GarbageIcon } from '../../../../components/icons/garbage-icon';
var borderWidth = pxToRem(2);
var borderColor = COLORS.line1;
var StyledHeader = styled.div.withConfig({
  displayName: "header__StyledHeader",
  componentId: "sc-154pglo-0"
})(["border-bottom-width:", ";border-bottom-style:solid;border-bottom-color:", ";padding:", ";background-color:", ";display:flex;.k-RewardEdition__Header__Amount{flex:auto;display:flex;justify-content:center;align-items:center;}.k-RewardEdition__Header__Button{align-self:flex-end;}"], borderWidth, borderColor, pxToRem(15), COLORS.background3);
export var Header = function Header(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      garbageButton = _ref.garbageButton,
      garbageButtonA11yText = _ref.garbageButtonA11yText;
  return /*#__PURE__*/React.createElement(StyledHeader, null, /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardEdition__Header__Amount"
  }, children), garbageButton && /*#__PURE__*/React.createElement(Button, {
    onClick: onClick,
    type: "button",
    "aria-label": garbageButtonA11yText,
    modifier: "hydrogen",
    micro: true,
    icon: true,
    className: "k-RewardEdition__Header__Button"
  }, /*#__PURE__*/React.createElement(GarbageIcon, {
    "aria-hidden": true
  })));
};
Header.propTypes = {
  garbageButton: PropTypes.bool,
  garbageButtonA11yText: PropTypes.string
};
Header.defaultProps = {
  garbageButton: true,
  garbageButtonA11yText: 'Delete'
};