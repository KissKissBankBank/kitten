"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _buttonItem = require("./components/button-item");

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1ns0hml-0"
})(["list-style:none;margin:0;padding:0;", " ", ""], function (_ref) {
  var withBottomBorderRadius = _ref.withBottomBorderRadius;
  return withBottomBorderRadius && (0, _styledComponents.css)(["& li:last-child .k-List__button{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}"], (0, _typography.pxToRem)(withBottomBorderRadius), (0, _typography.pxToRem)(withBottomBorderRadius));
}, function (_ref2) {
  var styles = _ref2.styles;
  return styles;
});

var List = function List(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      withBottomBorderRadius = _ref3.withBottomBorderRadius;
  return _react.default.createElement(StyledList, {
    styles: style,
    withBottomBorderRadius: withBottomBorderRadius
  }, _react.default.Children.map(children, function (child) {
    if (!_react.default.isValidElement(child)) return null;
    return _react.default.createElement("li", null, child);
  }));
};

exports.List = List;
List.ButtonItem = _buttonItem.ButtonItem;