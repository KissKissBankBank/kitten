"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _context = require("./context");

var HeaderStyled = _styledComponents.default.div.withConfig({
  displayName: "header__HeaderStyled",
  componentId: "sc-1djz5wl-0"
})(["box-sizing:border-box;padding:", ";min-height:", ";border:", " solid ", ";border-radius:", ";cursor:pointer;", ""], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(3), function (_ref) {
  var isSelected = _ref.isSelected;
  return isSelected && (0, _styledComponents.css)(["border-bottom-left-radius:0;border-bottom-right-radius:0;"]);
});

var Header = function Header(_ref2) {
  var id = _ref2.id,
      children = _ref2.children;
  return _react.default.createElement(_context.Context.Consumer, null, function (_ref3) {
    var updateSelectedItem = _ref3.updateSelectedItem,
        selectedItem = _ref3.selectedItem;
    return _react.default.createElement(HeaderStyled, {
      isSelected: selectedItem === id,
      onClick: function onClick() {
        return updateSelectedItem(id);
      }
    }, children);
  });
};

exports.Header = Header;