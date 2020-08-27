import React from 'react';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Context } from './context';
var HeaderStyled = styled.button.withConfig({
  displayName: "header__HeaderStyled",
  componentId: "sc-1djz5wl-0"
})(["display:block;margin:0;width:100%;padding:", ";min-height:", ";box-sizing:border-box;overflow:visible;background:transparent;border:", " solid ", ";border-radius:", ";color:inherit;font:inherit;text-align:inherit;line-height:normal;-webkit-appearance:none;cursor:pointer;outline:none;&[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], pxToRem(20), pxToRem(30), pxToRem(2), COLORS.line1, pxToRem(3));
export var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var updateSelectedItem = _ref2.updateSelectedItem,
        selectedItem = _ref2.selectedItem,
        componentId = _ref2.componentId;
    return /*#__PURE__*/React.createElement(HeaderStyled, {
      onClick: function onClick() {
        return updateSelectedItem(id);
      },
      role: "button",
      "aria-expanded": selectedItem === id,
      "aria-disabled": selectedItem === id,
      id: "".concat(componentId, "-header").concat(id),
      "aria-controls": "".concat(componentId, "-content").concat(id)
    }, children);
  });
};