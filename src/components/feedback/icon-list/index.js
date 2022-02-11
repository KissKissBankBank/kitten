"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconList = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _item = require("./components/item");

var IconList = function IconList(_ref) {
  var children = _ref.children,
      containerProps = _ref.containerProps,
      listProps = _ref.listProps;
  return /*#__PURE__*/_react.default.createElement(StyledContainer, containerProps, /*#__PURE__*/_react.default.createElement(StyledList, listProps, children));
};

exports.IconList = IconList;
IconList.Item = _item.Item;

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "icon-list__StyledContainer",
  componentId: "sc-1ooordp-0"
})(["position:relative;padding:", " 0;"], (0, _typography.pxToRem)(1));

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "icon-list__StyledList",
  componentId: "sc-1ooordp-1"
})(["margin:0;padding:", " 0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:var(--border-width) dashed var(--color-grey-400);}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(24));