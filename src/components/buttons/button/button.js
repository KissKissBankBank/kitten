"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ICON_GIANT = exports.ICON_HUGE = exports.ICON_BIG = exports.ICON_TINY = exports.ICON = exports.GIANT = exports.HUGE = exports.BIG = exports.TINY = exports.DEFAULT = exports.FLUID = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var _checkedCircleIcon = require("../../icons/checked-circle-icon");

var _screenConfig = require("../../../constants/screen-config");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1q5nte0-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;", " ", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;&:disabled{cursor:not-allowed;}&:hover{text-decoration:none;}>:nth-child(n){margin-right:", ";text-align:left;}", " >:last-child{margin-right:0;}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function () {
  return DEFAULT;
}, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), function (_ref) {
  var modifier = _ref.modifier;
  return modifier === 'checked' && (0, _styledComponents.css)([">:nth-last-child(2){margin-right:0;}"]);
}, function (_ref2) {
  var borderRadius = _ref2.borderRadius;
  return borderRadius > 0 && (0, _styledComponents.css)(["border-radius:", ";"], (0, _typography.pxToRem)(borderRadius));
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && TINY;
}, function (_ref4) {
  var big = _ref4.big;
  return big && BIG;
}, function (_ref5) {
  var huge = _ref5.huge;
  return huge && HUGE;
}, function (_ref6) {
  var giant = _ref6.giant;
  return giant && GIANT;
}, function (_ref7) {
  var icon = _ref7.icon,
      fluid = _ref7.fluid;
  return icon && !fluid && ICON;
}, function (_ref8) {
  var icon = _ref8.icon,
      tiny = _ref8.tiny,
      fluid = _ref8.fluid;
  return icon && tiny && !fluid && ICON_TINY;
}, function (_ref9) {
  var icon = _ref9.icon,
      big = _ref9.big,
      fluid = _ref9.fluid;
  return icon && big && !fluid && ICON_BIG;
}, function (_ref10) {
  var icon = _ref10.icon,
      huge = _ref10.huge,
      fluid = _ref10.fluid;
  return icon && huge && !fluid && ICON_HUGE;
}, function (_ref11) {
  var icon = _ref11.icon,
      giant = _ref11.giant,
      fluid = _ref11.fluid;
  return icon && giant && !fluid && ICON_GIANT;
}, function (_ref12) {
  var fluid = _ref12.fluid;
  return fluid && FLUID;
}, function (_ref13) {
  var modifier = _ref13.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
});

var checkedCircleIconStyle = function checkedCircleIconStyle(size) {
  var iconSize;

  switch (size) {
    case 'giant':
    case 'huge':
      iconSize = 33;
      break;

    case 'big':
      iconSize = 24;
      break;

    case 'tiny':
      iconSize = 15;
      break;

    default:
      iconSize = 20;
  }

  return (0, _styledComponents.css)(["width:", ";height:", ";bottom:-", ";"], (0, _typography.pxToRem)(iconSize), (0, _typography.pxToRem)(iconSize), (0, _typography.pxToRem)(iconSize / 2));
};

var CheckedCircleIcon = (0, _styledComponents.default)(function (_ref14) {
  var giant = _ref14.giant,
      huge = _ref14.huge,
      big = _ref14.big,
      tiny = _ref14.tiny,
      others = (0, _objectWithoutProperties2.default)(_ref14, ["giant", "huge", "big", "tiny"]);
  return /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, others);
}).withConfig({
  displayName: "button__CheckedCircleIcon",
  componentId: "sc-1q5nte0-1"
})(["", " ", " ", " ", " ", " position:absolute;"], checkedCircleIconStyle(), function (_ref15) {
  var tiny = _ref15.tiny;
  return tiny && checkedCircleIconStyle('tiny');
}, function (_ref16) {
  var big = _ref16.big;
  return big && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), checkedCircleIconStyle('big'));
}, function (_ref17) {
  var huge = _ref17.huge;
  return huge && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), checkedCircleIconStyle('huge'));
}, function (_ref18) {
  var giant = _ref18.giant;
  return giant && (0, _styledComponents.css)(["@media (min-width:", "){", "}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), checkedCircleIconStyle('giant'));
});
var FLUID = (0, _styledComponents.css)(["min-width:initial;width:100%;"]);
exports.FLUID = FLUID;
var DEFAULT = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50));
exports.DEFAULT = DEFAULT;
var TINY = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40));
exports.TINY = TINY;
var BIG = (0, _styledComponents.css)(["@media (min-width:", "){min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70));
exports.BIG = BIG;
var HUGE = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:0 ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:0 ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(80));
exports.HUGE = HUGE;
var GIANT = (0, _styledComponents.css)(["min-height:", ";font-size:", ";padding:0 ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:0 ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(90));
exports.GIANT = GIANT;
var ICON = (0, _styledComponents.css)(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";min-width:0;min-height:0;}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50));
exports.ICON = ICON;
var ICON_TINY = (0, _styledComponents.css)(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
exports.ICON_TINY = ICON_TINY;
var ICON_BIG = (0, _styledComponents.css)(["@media (min-width:", "){width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70));
exports.ICON_BIG = ICON_BIG;
var ICON_HUGE = (0, _styledComponents.css)(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80));
exports.ICON_HUGE = ICON_HUGE;
var ICON_GIANT = (0, _styledComponents.css)(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(90));
exports.ICON_GIANT = ICON_GIANT;

var Button = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          modifier = _this$props.modifier,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "modifier"]);
      var checked = modifier === 'checked' && {
        'aria-checked': true
      };
      modifier === 'checked' && console.warn("Warning: In <Button /> component, 'checked' modifier is deprecated.");
      return /*#__PURE__*/_react.default.createElement(StyledButton, (0, _extends2.default)({
        modifier: modifier
      }, checked, props), children, modifier === 'checked' && /*#__PURE__*/_react.default.createElement(CheckedCircleIcon, {
        giant: !!props.giant,
        huge: !!props.huge,
        big: !!props.big,
        tiny: !!props.tiny,
        circleColor: _colorsConfig.default.primary1,
        checkedColor: _colorsConfig.default.background1
      }));
    }
  }]);
  return Button;
}(_react.Component);

exports.Button = Button;
Button.propTypes = {
  borderRadius: _propTypes.default.number,
  tiny: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  giant: _propTypes.default.bool,
  fluid: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  modifier: _propTypes.default.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked'])
};
Button.defaultProps = {
  tiny: false,
  big: false,
  huge: false,
  giant: false,
  fluid: false,
  icon: false,
  modifier: 'hydrogen',
  borderRadius: 0
};