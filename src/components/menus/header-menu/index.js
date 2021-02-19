"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _item = require("./components/item");

var _badge = require("./components/badge");

var _styles = require("./styles");

var HeaderMenu = function HeaderMenu(_ref) {
  var backgroundColors = _ref.backgroundColors,
      borderSide = _ref.borderSide,
      borderSideOnHover = _ref.borderSideOnHover,
      largeItem = _ref.largeItem,
      noBorder = _ref.noBorder,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["backgroundColors", "borderSide", "borderSideOnHover", "largeItem", "noBorder", "className", "style"]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledList, (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeaderMenu', className, {
      'k-HeaderMenu--hasBorders': !noBorder,
      'k-HeaderMenu--hasBorderOnSide': !!borderSide,
      'k-HeaderMenu--hasBorderOnSide-left': borderSide === 'left',
      'k-HeaderMenu--hasBorderOnSide-right': borderSide === 'right',
      'k-HeaderMenu--hasBorderOnSideOnHover': borderSideOnHover,
      'k-HeaderMenu--hasBigItems': largeItem
    }),
    style: (0, _extends2.default)({}, style, {
      '--headerMenu-background-colors-hover': backgroundColors === null || backgroundColors === void 0 ? void 0 : backgroundColors.hover
    })
  }, props));
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