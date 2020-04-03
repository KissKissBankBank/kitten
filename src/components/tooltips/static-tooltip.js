"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var StaticTooltip = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(StaticTooltip, _Component);

  var _super = _createSuper(StaticTooltip);

  function StaticTooltip() {
    (0, _classCallCheck2.default)(this, StaticTooltip);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(StaticTooltip, [{
    key: "renderArrow",
    value: function renderArrow() {
      var style;

      if (this.props.arrowLeftPosition) {
        style = {
          left: this.props.arrowLeftPosition
        };
      }

      return _react.default.createElement("span", {
        style: style,
        className: "k-StaticTooltip__arrow"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          arrowLeftPosition = _this$props.arrowLeftPosition,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "arrowLeftPosition"]);
      var staticTooltipClassName = (0, _classnames.default)('k-StaticTooltip', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: staticTooltipClassName
      }, others), _react.default.createElement("div", {
        className: "k-StaticTooltip__content"
      }, this.renderArrow(), children));
    }
  }]);
  return StaticTooltip;
}(_react.Component);

exports.StaticTooltip = StaticTooltip;
StaticTooltip.defaultProps = {
  arrowLeftPosition: null
};