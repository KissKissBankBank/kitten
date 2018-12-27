"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _context = require("./context");

var ContentStyled = _styledComponents.default.div.withConfig({
  displayName: "content__ContentStyled",
  componentId: "sc-5kfom2-0"
})(["display:none;box-sizing:border-box;padding:", ";min-height:", ";background-color:", ";border:", " solid ", ";border-top:0;border-bottom-left-radius:", ";border-bottom-right-radius:", ";", ""], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.background3, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), function (_ref) {
  var isSelected = _ref.isSelected;
  return isSelected && (0, _styledComponents.css)(["display:block;"]);
});

var Content = function Content(_ref2) {
  var id = _ref2.id,
      children = _ref2.children;
  return _react.default.createElement(_context.Context.Consumer, null, function (_ref3) {
    var selectedItem = _ref3.selectedItem;
    return _react.default.createElement(ContentStyled, {
      isSelected: selectedItem === id
    }, children);
  });
};

exports.Content = Content;