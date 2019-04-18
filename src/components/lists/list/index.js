"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buttonItem = require("./components/button-item");

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1ns0hml-0"
})(["list-style:none;margin:0;padding:0;", ""], function (_ref) {
  var styles = _ref.styles;
  return styles;
});

var List = function List(_ref2) {
  var children = _ref2.children,
      style = _ref2.style;
  return _react.default.createElement(StyledList, {
    styles: style
  }, _react.default.Children.map(children, function (child) {
    if (!_react.default.isValidElement(child)) return null;
    return _react.default.createElement("li", null, child);
  }));
};

exports.List = List;
List.ButtonItem = _buttonItem.ButtonItem;