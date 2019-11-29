"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ICON_BIG = exports.ICON_TINY = exports.ICON = exports.BIG = exports.TINY = exports.DEFAULT = exports.FLUID = void 0;

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

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var _checkedCircleIcon = require("../../icons/checked-circle-icon");

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1q5nte0-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;", " ", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;&:disabled{cursor:not-allowed;}&:hover{text-decoration:none;}>:nth-child(n){margin-right:", ";text-align:left;}", " >:last-child{margin-right:0;}", " ", " ", " ", " ", " ", " ", " ", ""], function () {
  return DEFAULT;
}, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), function (_ref) {
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
  var icon = _ref5.icon;
  return icon && ICON;
}, function (_ref6) {
  var icon = _ref6.icon,
      tiny = _ref6.tiny;
  return icon && tiny && ICON_TINY;
}, function (_ref7) {
  var icon = _ref7.icon,
      big = _ref7.big;
  return icon && big && ICON_BIG;
}, function (_ref8) {
  var fluid = _ref8.fluid;
  return fluid && FLUID;
}, function (_ref9) {
  var modifier = _ref9.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
});

var checkedCircleIconStyle = function checkedCircleIconStyle(size) {
  var iconSize;

  switch (size) {
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

var CheckedCircleIcon = (0, _styledComponents.default)(function (_ref10) {
  var big = _ref10.big,
      tiny = _ref10.tiny,
      others = (0, _objectWithoutProperties2.default)(_ref10, ["big", "tiny"]);
  return _react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, others);
}).withConfig({
  displayName: "button__CheckedCircleIcon",
  componentId: "sc-1q5nte0-1"
})(["", " ", " ", " position:absolute;"], checkedCircleIconStyle(), function (_ref11) {
  var tiny = _ref11.tiny;
  return tiny && checkedCircleIconStyle('tiny');
}, function (_ref12) {
  var big = _ref12.big;
  return big && checkedCircleIconStyle('big');
});
var FLUID = (0, _styledComponents.css)(["min-width:initial;width:100%;"]);
exports.FLUID = FLUID;
var DEFAULT = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50));
exports.DEFAULT = DEFAULT;
var TINY = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40));
exports.TINY = TINY;
var BIG = (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70));
exports.BIG = BIG;
var ICON = (0, _styledComponents.css)(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50));
exports.ICON = ICON;
var ICON_TINY = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
exports.ICON_TINY = ICON_TINY;
var ICON_BIG = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70));
exports.ICON_BIG = ICON_BIG;

var Button =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
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
      return _react.default.createElement(StyledButton, (0, _extends2.default)({
        modifier: modifier
      }, checked, props), children, modifier === 'checked' && _react.default.createElement(CheckedCircleIcon, {
        big: props.big && props.big,
        tiny: props.tiny && props.tiny,
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
  fluid: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  modifier: _propTypes.default.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked'])
};
Button.defaultProps = {
  tiny: false,
  big: false,
  fluid: false,
  icon: false,
  modifier: 'hydrogen',
  borderRadius: 0
};