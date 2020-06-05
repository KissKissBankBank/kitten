"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deprecated = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Deprecated = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Deprecated, _Component);

  var _super = _createSuper(Deprecated);

  function Deprecated() {
    (0, _classCallCheck2.default)(this, Deprecated);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Deprecated, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (process.env.NODE_ENV === 'development') {
        var owner = _react.default.Children.only(this.props.children)._owner;

        if (!owner) return;
        var componentName = owner.type.name;
        console.warn("Warning: ".concat(componentName, " is deprecated."), this.props.warningMessage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Deprecated;
}(_react.Component);

exports.Deprecated = Deprecated;