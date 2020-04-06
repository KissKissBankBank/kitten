"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledTagButton = (0, _styledComponents.default)(function (_ref) {
  var selected = _ref.selected,
      icon = _ref.icon,
      tiny = _ref.tiny,
      big = _ref.big,
      modifier = _ref.modifier,
      others = (0, _objectWithoutProperties2.default)(_ref, ["selected", "icon", "tiny", "big", "modifier"]);
  return /*#__PURE__*/_react.default.createElement("button", others);
}).withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1cbu4s-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:", ";border-width:", ";border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}", " ", " ", " ", " ", " ", ""], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), function (_ref2) {
  var icon = _ref2.icon;
  return icon && (0, _styledComponents.css)(["", ""], hydrogen);
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && (0, _styledComponents.css)(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(60));
}, function (_ref4) {
  var big = _ref4.big;
  return big && (0, _styledComponents.css)(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80));
}, function (_ref5) {
  var modifier = _ref5.modifier;
  return (modifier === 'helium' || 'hydrogen') && (0, _styledComponents.css)(["", ""], hydrogen);
}, function (_ref6) {
  var modifier = _ref6.modifier;
  return modifier === 'carbon' && (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}"], _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1);
}, function (_ref7) {
  var selected = _ref7.selected;
  return selected && (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";"], _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1);
});
var hydrogen = (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}"], _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1);

var TagButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TagButton, _PureComponent);

  var _super = _createSuper(TagButton);

  function TagButton() {
    (0, _classCallCheck2.default)(this, TagButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TagButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          modifier = _this$props.modifier,
          selected = _this$props.selected,
          tiny = _this$props.tiny,
          big = _this$props.big,
          icon = _this$props.icon,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "modifier", "selected", "tiny", "big", "icon"]);
      return /*#__PURE__*/_react.default.createElement(StyledTagButton, (0, _extends2.default)({
        modifier: modifier,
        selected: selected,
        tiny: tiny,
        big: big,
        icon: icon
      }, others), children);
    }
  }]);
  return TagButton;
}(_react.PureComponent);

exports.TagButton = TagButton;
TagButton.propTypes = {
  modifier: _propTypes.default.string,
  tiny: _propTypes.default.bool,
  big: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  selected: _propTypes.default.bool
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  selected: false
};