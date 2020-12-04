"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledTextInputWithIcon = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-icon__StyledTextInputWithIcon",
  componentId: "rvt8kr-0"
})(["position:relative;.k-Form-TextInputWithIcon__input{padding-left:", ";}.k-Form-TextInputWithIcon__icon{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;left:0;top:0;width:", ";height:100%;&.k-Form-TextInputWithIcon__icon--disabled > svg{&[stroke]:not([stroke='none']),& [stroke]:not([stroke='none']){stroke:", ";}&[fill]:not([fill='none']),& [fill]:not([fill='none']){fill:", ";}}}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), _colorsConfig.default.font2, _colorsConfig.default.font2);

var TextInputWithIcon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithIcon, _PureComponent);

  var _super = _createSuper(TextInputWithIcon);

  function TextInputWithIcon() {
    (0, _classCallCheck2.default)(this, TextInputWithIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TextInputWithIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          accessibilityLabel = _this$props.accessibilityLabel,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["disabled", "icon", "accessibilityLabel"]);
      return /*#__PURE__*/_react.default.createElement(StyledTextInputWithIcon, {
        className: "k-Form-TextInputWithIcon"
      }, accessibilityLabel && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, others, {
        className: (0, _classnames.default)('k-Form-TextInputWithIcon__input', others.className),
        disabled: disabled
      })), /*#__PURE__*/_react.default.createElement("span", {
        "aria-hidden": "true",
        className: (0, _classnames.default)('k-Form-TextInputWithIcon__icon', {
          'k-Form-TextInputWithIcon__icon--disabled': disabled
        })
      }, icon));
    }
  }]);
  return TextInputWithIcon;
}(_react.PureComponent);

exports.TextInputWithIcon = TextInputWithIcon;
TextInputWithIcon.propTypes = {
  disabled: _propTypes.default.bool,
  accessibilityLabel: _propTypes.default.string,
  icon: _propTypes.default.node.isRequired
};
TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false
};