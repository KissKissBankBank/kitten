"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _context = require("./context");

var _arrowIcon = require("../../../icons/arrow-icon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledItem = _styledComponents.default.a.withConfig({
  displayName: "item__StyledItem",
  componentId: "sc-5lownc-0"
})(["display:block;position:relative;padding:", " ", " ", ";background-color:", ";border-bottom:1px solid ", ";outline:none;", " color:", ";line-height:1;font-size:", ";text-decoration:none;::before{content:'';position:absolute;top:-1px;left:-1px;bottom:-1px;width:", ";background-color:transparent;transition:background-color 0.2s,width 0.2s;}:hover::before,:focus::before{width:", ";background-color:", ";color:", ";transition:width 0.2s;}", " ", " ", ""], (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(17), _colorsConfig.default.background1, _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(4), _colorsConfig.default.primary1, _colorsConfig.default.font1, function (_ref) {
  var isSelected = _ref.isSelected;
  return isSelected && (0, _styledComponents.css)(["color:", ";::before{width:", ";background-color:", ";}"], _colorsConfig.default.primary1, (0, _typography.pxToRem)(4), _colorsConfig.default.primary1);
}, function (_ref2) {
  var modifier = _ref2.modifier;
  return modifier === 'light' && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.font2);
}, function (_ref3) {
  var borderSide = _ref3.borderSide;
  return borderSide === 'right' && (0, _styledComponents.css)(["::before{left:unset;right:-1px;}"]);
});

var ExternalStyledItem = (0, _styledComponents.default)(StyledItem).withConfig({
  displayName: "item__ExternalStyledItem",
  componentId: "sc-5lownc-1"
})(["display:flex;height:", ";padding:", " ", " ", " ", ";align-items:center;align-self:flex-start;justify-content:space-between;background-color:", ";transition:padding-right 0.2s;svg,img{max-height:", ";width:auto;}:focus,:hover{padding-right:", ";color:", ";}::before{display:none;}"], (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(30), _colorsConfig.default.background3, (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(16), _colorsConfig.default.font1);

var Item = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Item, _Component);

  var _super = _createSuper(Item);

  function Item() {
    (0, _classCallCheck2.default)(this, Item);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          href = _this$props.href,
          external = _this$props.external,
          liProps = _this$props.liProps,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "href", "external", "liProps"]);
      return _react.default.createElement(_context.Context.Consumer, null, function (_ref4) {
        var borderSide = _ref4.borderSide;
        return _react.default.createElement("li", (0, _extends2.default)({
          role: "menuitem"
        }, liProps), external ? _react.default.createElement(ExternalStyledItem, (0, _extends2.default)({
          href: href,
          borderSide: borderSide,
          external: external
        }, other), _react.default.createElement("span", null, children), _react.default.createElement(_arrowIcon.ArrowIcon, {
          direction: "right"
        })) : _react.default.createElement(StyledItem, (0, _extends2.default)({
          href: href,
          borderSide: borderSide,
          external: external
        }, other), children));
      });
    }
  }]);
  return Item;
}(_react.Component);

exports.Item = Item;
Item.propTypes = {
  href: _propTypes.default.string,
  isSelected: _propTypes.default.bool,
  modifier: _propTypes.default.oneOf(['light', 'default']),
  external: _propTypes.default.bool,
  liProps: _propTypes.default.object
};
Item.defaultProps = {
  href: null,
  isSelected: false,
  modifier: 'default',
  external: false,
  liProps: {}
};