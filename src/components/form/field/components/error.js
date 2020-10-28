"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldError = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _marger = require("../../../layout/marger");

var _text = require("../../../typography/text");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FieldError = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FieldError, _Component);

  var _super = _createSuper(FieldError);

  function FieldError() {
    (0, _classCallCheck2.default)(this, FieldError);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FieldError, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
        tag: "p",
        color: "error",
        size: "micro",
        weight: "regular",
        lineHeight: "normal",
        style: {
          margin: 0
        }
      }, others), children));
    }
  }]);
  return FieldError;
}(_react.Component);

exports.FieldError = FieldError;