"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ButtonIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ButtonIcon, _Component);

  var _super = _createSuper(ButtonIcon);

  function ButtonIcon() {
    (0, _classCallCheck2.default)(this, ButtonIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ButtonIcon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          size = _this$props.size,
          withoutHover = _this$props.withoutHover,
          verticalArrow = _this$props.verticalArrow,
          rounded = _this$props.rounded,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tag", "modifier", "size", "withoutHover", "verticalArrow", "rounded"]);
      var buttonIconClassNames = (0, _classnames.default)('k-ButtonIcon', className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-ButtonIcon--".concat(modifier), modifier), (0, _defineProperty2.default)(_classNames, "k-ButtonIcon--".concat(size), size), (0, _defineProperty2.default)(_classNames, 'k-ButtonIcon--withoutHover', withoutHover), (0, _defineProperty2.default)(_classNames, 'k-ButtonIcon--verticalArrow', verticalArrow), (0, _defineProperty2.default)(_classNames, 'k-ButtonIcon--rounded', rounded), _classNames)); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: buttonIconClassNames,
        tabIndex: tabindex
      }, others));
    }
  }]);
  return ButtonIcon;
}(_react.Component);

exports.ButtonIcon = ButtonIcon;
ButtonIcon.defaultProps = {
  tag: 'button',
  size: null,
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false
};