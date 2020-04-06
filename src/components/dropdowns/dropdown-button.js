"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DropdownButton = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DropdownButton, _React$Component);

  var _super = _createSuper(DropdownButton);

  function DropdownButton() {
    (0, _classCallCheck2.default)(this, DropdownButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isExpanded = _this$props.isExpanded,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "isExpanded"]);
      var buttonClassName = (0, _classnames.default)('k-Dropdown__button', className);
      return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
        ref: "dropdownButton",
        className: buttonClassName,
        "aria-haspopup": "true",
        "aria-expanded": isExpanded
      }, rest));
    }
  }]);
  return DropdownButton;
}(_react.default.Component);

exports.DropdownButton = DropdownButton;
DropdownButton.propTypes = {
  onClick: _propTypes.default.func,
  isExpanded: _propTypes.default.bool
};
DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: function onClick() {},
  isExpanded: false
}; // DEPRECATED: do not use default export.

var _default = DropdownButton;
exports.default = _default;