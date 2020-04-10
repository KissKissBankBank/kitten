"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _context = require("./context");

var _arrowIcon = require("../../../icons/arrow-icon");

var _button = require("../../../../components/buttons/button/button");

var ButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "item__ButtonContainer",
  componentId: "sc-5lownc-0"
})(["padding:", ";background-color:", ";a:focus{outline:", " auto -webkit-focus-ring-color;}"], (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(5));

var StyledItem = _styledComponents.default.a.withConfig({
  displayName: "item__StyledItem",
  componentId: "sc-5lownc-1"
})(["display:block;position:relative;padding:", ";background-color:", ";border-bottom:", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;&:focus{outline-offset:", ";}", " ", " ", " ", ""], function (_ref) {
  var largeItem = _ref.largeItem;
  return largeItem ? "".concat((0, _typography.pxToRem)(28), " ").concat((0, _typography.pxToRem)(21), " ").concat((0, _typography.pxToRem)(28), " ").concat((0, _typography.pxToRem)(40)) : "".concat((0, _typography.pxToRem)(18), " ").concat((0, _typography.pxToRem)(30), " ").concat((0, _typography.pxToRem)(17));
}, _colorsConfig.default.background1, function (_ref2) {
  var noBorder = _ref2.noBorder;
  return noBorder ? null : "".concat((0, _typography.pxToRem)(1), " solid ").concat(_colorsConfig.default.line1);
}, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(-3), function (_ref3) {
  var borderSide = _ref3.borderSide;
  return borderSide ? (0, _styledComponents.css)(["::before{content:'';position:absolute;top:", ";left:", ";bottom:0;width:", ";background-color:transparent;transition:background-color 0.2s,width 0.2s;}:hover,:focus{color:", ";&::before{width:", ";background-color:", ";transition:width 0.2s;}}"], (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(0), function (_ref4) {
    var borderSideOnHover = _ref4.borderSideOnHover;
    return !borderSideOnHover && _colorsConfig.default.primary1;
  }, function (_ref5) {
    var borderSideOnHover = _ref5.borderSideOnHover;
    return borderSideOnHover && (0, _typography.pxToRem)(4);
  }, _colorsConfig.default.primary1) : (0, _styledComponents.css)([":hover,:focus{color:", ";background-color:", ";transition:color 0.2s,background-color 0.4s;}"], _colorsConfig.default.primary1, function (_ref6) {
    var backgroundColors = _ref6.backgroundColors;
    return backgroundColors.hover ? backgroundColors.hover : _colorsConfig.default.line1;
  });
}, function (_ref7) {
  var isSelected = _ref7.isSelected;
  return isSelected && (0, _styledComponents.css)(["color:", ";::before{width:", ";background-color:", ";}"], _colorsConfig.default.primary1, (0, _typography.pxToRem)(4), _colorsConfig.default.primary1);
}, function (_ref8) {
  var modifier = _ref8.modifier;
  return modifier === 'light' && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.font2);
}, function (_ref9) {
  var borderSide = _ref9.borderSide;
  return borderSide === 'right' && (0, _styledComponents.css)(["::before{left:unset;right:-1px;}"]);
});

var ExternalStyledItem = (0, _styledComponents.default)(StyledItem).withConfig({
  displayName: "item__ExternalStyledItem",
  componentId: "sc-5lownc-2"
})(["display:flex;height:", ";padding:", ";align-items:center;align-self:flex-start;justify-content:space-between;background-color:", ";.itemNextToArrowIcon{margin-right:", ";}.headerMenuArrowIcon{position:relative;left:0;transition:left 0.2s;}svg,img{max-height:", ";width:auto;}:focus,:hover{color:", ";.headerMenuArrowIcon{left:", ";}}::before{display:none;}"], (0, _typography.pxToRem)(24), function (_ref10) {
  var largeItem = _ref10.largeItem;
  return largeItem ? "".concat((0, _typography.pxToRem)(23), " ").concat((0, _typography.pxToRem)(21), " ").concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(40)) : "".concat((0, _typography.pxToRem)(23), " ").concat((0, _typography.pxToRem)(21), " ").concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(30));
}, _colorsConfig.default.background3, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(24), _colorsConfig.default.font1, (0, _typography.pxToRem)(5));

var Item = function Item(_ref11) {
  var children = _ref11.children,
      href = _ref11.href,
      external = _ref11.external,
      liProps = _ref11.liProps,
      modifier = _ref11.modifier,
      button = _ref11.button,
      isSelected = _ref11.isSelected,
      other = (0, _objectWithoutProperties2.default)(_ref11, ["children", "href", "external", "liProps", "modifier", "button", "isSelected"]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref12) {
    var borderSide = _ref12.borderSide,
        borderSideOnHover = _ref12.borderSideOnHover,
        largeItem = _ref12.largeItem,
        noBorder = _ref12.noBorder,
        backgroundColors = _ref12.backgroundColors;
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      role: "menuitem"
    }, liProps), external && /*#__PURE__*/_react.default.createElement(ExternalStyledItem, (0, _extends2.default)({}, other, {
      href: href,
      borderSide: borderSide,
      external: external,
      largeItem: largeItem,
      noBorder: noBorder
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "itemNextToArrowIcon"
    }, children), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
      className: "headerMenuArrowIcon",
      version: "solid",
      direction: "right"
    })), button && /*#__PURE__*/_react.default.createElement(ButtonContainer, null, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
      as: "a",
      href: href,
      modifier: modifier,
      fluid: true
    }, other), children)), !(external || button) && /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({}, other, {
      href: href,
      isSelected: isSelected,
      "aria-current": isSelected ? 'page' : null,
      borderSide: borderSide,
      borderSideOnHover: borderSideOnHover,
      external: external,
      largeItem: largeItem,
      noBorder: noBorder,
      backgroundColors: backgroundColors,
      modifier: modifier
    }), children));
  });
};

exports.Item = Item;
Item.propTypes = {
  external: _propTypes.default.bool,
  button: _propTypes.default.bool,
  href: _propTypes.default.string,
  isSelected: _propTypes.default.bool,
  liProps: _propTypes.default.object,
  modifier: _propTypes.default.oneOf([null, undefined, 'light', 'default', 'hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked'])
};
Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {}
};