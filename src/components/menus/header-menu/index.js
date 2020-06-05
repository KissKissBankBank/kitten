"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _item = require("./components/item");

var _badge = require("./components/badge");

var _context = require("./components/context");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var borderStyle = "".concat((0, _typography.pxToRem)(1), " solid ").concat(_colorsConfig.default.line1);

var List = _styledComponents.default.ul.withConfig({
  displayName: "header-menu__List",
  componentId: "i1nt9v-0"
})(["margin:0;padding:0;list-style:none;border-left:", ";border-right:", ";"], function (_ref) {
  var noBorder = _ref.noBorder;
  return noBorder ? 0 : borderStyle;
}, function (_ref2) {
  var noBorder = _ref2.noBorder;
  return noBorder ? 0 : borderStyle;
});

var HeaderMenu = function HeaderMenu(_ref3) {
  var backgroundColors = _ref3.backgroundColors,
      borderSide = _ref3.borderSide,
      borderSideOnHover = _ref3.borderSideOnHover,
      largeItem = _ref3.largeItem,
      noBorder = _ref3.noBorder,
      children = _ref3.children;
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      backgroundColors: backgroundColors,
      borderSide: borderSide,
      borderSideOnHover: borderSideOnHover,
      largeItem: largeItem,
      noBorder: noBorder
    }
  }, /*#__PURE__*/_react.default.createElement(List, {
    noBorder: noBorder
  }, children));
};

exports.HeaderMenu = HeaderMenu;
HeaderMenu.Item = _item.Item;
HeaderMenu.Badge = _badge.Badge;
HeaderMenu.propTypes = {
  backgroundColors: _propTypes.default.object,
  borderSide: _propTypes.default.oneOf(['left', 'right', false]),
  borderSideOnHover: _propTypes.default.bool,
  largeItem: _propTypes.default.bool,
  noBorder: _propTypes.default.bool
};
HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false
};