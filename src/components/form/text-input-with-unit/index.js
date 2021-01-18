"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledTextInputWithUnit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["display:flex;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{transition:all 0.2s;&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;align-items:center;justify-content:center;background-color:", ";border:", " solid ", ";border-left:0;border-radius:0;box-sizing:border-box;padding:0 ", ";color:", ";white-space:nowrap;transition:all 0.2s;font-size:", ";", ";&.k-Form-TextInputWithUnit__unit--valid{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--error{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--disabled{color:", ";background-color:", ";}&.k-Form-TextInputWithUnit__unit--tiny{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within .k-Form-TextInputWithUnit__unit{border-color:", ";color:", ";}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(15), _colorsConfig.default.font1, (0, _typography.stepToRem)(0), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.tertiary2, _colorsConfig.default.valid, _colorsConfig.default.error3, _colorsConfig.default.error, _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(25), (0, _typography.stepToRem)(-1), _colorsConfig.default.line2, _colorsConfig.default.font1);

var TextInputWithUnit = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithUnit, _PureComponent);

  var _super = _createSuper(TextInputWithUnit);

  function TextInputWithUnit(props) {
    (0, _classCallCheck2.default)(this, TextInputWithUnit);
    return _super.call(this, props);
  }

  (0, _createClass2.default)(TextInputWithUnit, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          unit = _this$props.unit,
          unitWord = _this$props.unitWord,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["unit", "unitWord"]);
      return /*#__PURE__*/_react.default.createElement(StyledTextInputWithUnit, {
        className: (0, _classnames.default)('k-Form-TextInputWithUnit', {
          'k-Form-TextInputWithUnit--hasDigits': !!this.props.digits
        })
      }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
        ref: function ref(input) {
          _this.input = input;
        }
      }, others, {
        className: (0, _classnames.default)('k-Form-TextInputWithUnit__input', this.props.className)
      })), /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)('k-Form-TextInputWithUnit__unit', {
          'k-Form-TextInputWithUnit__unit--valid': this.props.valid,
          'k-Form-TextInputWithUnit__unit--error': this.props.error,
          'k-Form-TextInputWithUnit__unit--disabled': this.props.disabled,
          'k-Form-TextInputWithUnit__unit--tiny': this.props.tiny,
          'k-Form-TextInputWithUnit__unit--huge': this.props.huge,
          'k-Form-TextInputWithUnit__unit--giant': this.props.giant,
          'k-Form-TextInputWithUnit__unit--hasUnitWord': !!unitWord
        })
      }, unit || unitWord));
    }
  }]);
  return TextInputWithUnit;
}(_react.PureComponent);

exports.TextInputWithUnit = TextInputWithUnit;
TextInputWithUnit.propTypes = {
  type: _propTypes.default.string,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  giant: _propTypes.default.bool,
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  unit: _propTypes.default.string,
  unitWord: _propTypes.default.bool,
  digits: _propTypes.default.number
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  tiny: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  digits: null
};