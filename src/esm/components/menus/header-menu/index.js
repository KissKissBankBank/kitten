import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Item } from './components/item';
import { Badge } from './components/badge';
import { Context } from './components/context';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
var borderStyle = "".concat(pxToRem(1), " solid ").concat(COLORS.line1);
var List = styled.ul.withConfig({
  displayName: "header-menu__List",
  componentId: "i1nt9v-0"
})(["margin:0;padding:0;list-style:none;border-left:", ";border-right:", ";"], function (_ref) {
  var noBorder = _ref.noBorder;
  return noBorder ? 0 : borderStyle;
}, function (_ref2) {
  var noBorder = _ref2.noBorder;
  return noBorder ? 0 : borderStyle;
});
export var HeaderMenu = function HeaderMenu(_ref3) {
  var backgroundColors = _ref3.backgroundColors,
      borderSide = _ref3.borderSide,
      borderSideOnHover = _ref3.borderSideOnHover,
      largeItem = _ref3.largeItem,
      noBorder = _ref3.noBorder,
      children = _ref3.children;
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      backgroundColors: backgroundColors,
      borderSide: borderSide,
      borderSideOnHover: borderSideOnHover,
      largeItem: largeItem,
      noBorder: noBorder
    }
  }, /*#__PURE__*/React.createElement(List, {
    noBorder: noBorder
  }, children));
};
HeaderMenu.Item = Item;
HeaderMenu.Badge = Badge;
HeaderMenu.propTypes = {
  backgroundColors: PropTypes.object,
  borderSide: PropTypes.oneOf(['left', 'right', false]),
  borderSideOnHover: PropTypes.bool,
  largeItem: PropTypes.bool,
  noBorder: PropTypes.bool
};
HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false
};