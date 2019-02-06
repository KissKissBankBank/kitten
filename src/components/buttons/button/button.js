"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _modifierStyles = require("./helpers/modifier-styles");

var StyledButton = _styledComponents.default.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1q5nte0-0"
})(["display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:", ";min-height:", ";padding:0 ", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}>:last-child{margin-right:0;}", " ", " ", " ", " ", ""], (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), _colorsConfig.default.font1, (0, _typography.pxToRem)(10), function (_ref) {
  var tiny = _ref.tiny;
  return tiny && (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";"], (0, _typography.pxToRem)(160), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20));
}, function (_ref2) {
  var big = _ref2.big;
  return big && (0, _styledComponents.css)(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";"], (0, _typography.pxToRem)(220), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(16));
}, function (_ref3) {
  var fluid = _ref3.fluid;
  return fluid && (0, _styledComponents.css)(["min-width:initial;width:100%;"]);
}, function (_ref4) {
  var icon = _ref4.icon;
  return icon && (0, _styledComponents.css)(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;", " ", ""], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), function (_ref5) {
    var tiny = _ref5.tiny;
    return tiny && (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
  }, function (_ref6) {
    var big = _ref6.big;
    return big && (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70));
  });
}, function (_ref7) {
  var modifier = _ref7.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
});

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
      return _react.default.createElement(StyledButton, this.props);
    }
  }]);
  return Button;
}(_react.Component);

exports.Button = Button;
Button.propTypes = {
  tiny: _propTypes.default.bool,
  big: _propTypes.default.bool,
  fluid: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  modifier: _propTypes.default.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen'])
};
Button.defaultProps = {
  tiny: false,
  big: false,
  fluid: false,
  icon: false,
  modifier: 'hydrogen'
};