"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

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
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          size = _this$props.size,
          icon = _this$props.icon,
          readonly = _this$props.readonly,
          iconOnRight = _this$props.iconOnRight,
          iconWithMinWidth = _this$props.iconWithMinWidth,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tag", "modifier", "size", "icon", "readonly", "iconOnRight", "iconWithMinWidth"]);
      var buttonClassNames = (0, _classnames.default)('k-Button', (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Button--".concat(modifier), modifier), (0, _defineProperty2.default)(_classNames, "k-Button--".concat(size), size), (0, _defineProperty2.default)(_classNames, 'k-Button--icon', icon), (0, _defineProperty2.default)(_classNames, 'is-readonly', readonly), (0, _defineProperty2.default)(_classNames, 'k-Button--iconRight', iconOnRight), (0, _defineProperty2.default)(_classNames, 'k-Button--iconWithMinWidth', iconWithMinWidth), (0, _defineProperty2.default)(_classNames, 'k-Button--icon--tiny', size == 'tiny' && icon), (0, _defineProperty2.default)(_classNames, 'k-Button--iconRight--tiny', size == 'tiny' && iconOnRight), _classNames), className); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
        className: buttonClassNames,
        tabIndex: tabindex
      }, others));
    }
  }]);
  return Button;
}(_react.Component);

exports.Button = Button;
Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  icon: false,
  readonly: false,
  iconOnRight: false,
  iconWithMinWidth: false
};