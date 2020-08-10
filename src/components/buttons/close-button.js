"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttonIcon = require("../../components/buttons/button-icon");

var _crossIcon = require("../../components/icons/cross-icon");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CloseButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CloseButton, _Component);

  var _super = _createSuper(CloseButton);

  function CloseButton() {
    (0, _classCallCheck2.default)(this, CloseButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CloseButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          closeButtonLabel = _this$props.closeButtonLabel,
          size = _this$props.size,
          buttonModifier = _this$props.buttonModifier,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "closeButtonLabel", "size", "buttonModifier"]);
      var buttonClassName = (0, _classnames.default)('k-ButtonIcon--cross', (0, _defineProperty2.default)({}, "k-ButtonIcon--cross--".concat(size), size), className);
      return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, (0, _extends2.default)({
        type: "button",
        className: buttonClassName,
        title: closeButtonLabel,
        "aria-label": closeButtonLabel,
        modifier: buttonModifier
      }, others), /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
        className: (0, _classnames.default)('k-ButtonIcon__svg', 'k-ButtonIcon__svgRotate')
      }));
    }
  }]);
  return CloseButton;
}(_react.Component);

exports.CloseButton = CloseButton;
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  size: null
};