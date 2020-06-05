"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _context = require("./context");

var HeaderStyled = _styledComponents.default.button.withConfig({
  displayName: "header__HeaderStyled",
  componentId: "sc-1djz5wl-0"
})(["display:block;margin:0;width:100%;padding:", ";min-height:", ";box-sizing:border-box;overflow:visible;background:transparent;border:", " solid ", ";border-radius:", ";color:inherit;font:inherit;text-align:inherit;line-height:normal;-webkit-appearance:none;cursor:pointer;outline:none;&[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(3));

var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var updateSelectedItem = _ref2.updateSelectedItem,
        selectedItem = _ref2.selectedItem,
        componentId = _ref2.componentId;
    return /*#__PURE__*/_react.default.createElement(HeaderStyled, {
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

exports.Header = Header;