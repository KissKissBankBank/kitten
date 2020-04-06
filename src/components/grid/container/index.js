"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Container = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Container, _React$PureComponent);

  var _super = _createSuper(Container);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["style"]);
      return /*#__PURE__*/_react.default.createElement(_styled.StyledContainer, (0, _extends2.default)({
        styles: style
      }, others));
    }
  }]);
  return Container;
}(_react.default.PureComponent);

exports.Container = Container;
Container.defaultProps = {
  fullWidthBelowScreenSize: null
};
Container.propTypes = {
  fullWidthBelowScreenSize: _propTypes.default.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XL'])
};