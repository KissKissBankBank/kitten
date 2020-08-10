"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NavList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavList, _React$Component);

  var _super = _createSuper(NavList);

  function NavList() {
    (0, _classCallCheck2.default)(this, NavList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(NavList, [{
    key: "renderItem",
    value: function renderItem(item, i) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i,
        role: "menuitem"
      }, item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          list = _this$props.list,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["list"]);
      var items = list.map(this.renderItem);
      var defaultItem = 'No choice';
      return /*#__PURE__*/_react.default.createElement("nav", {
        role: "navigation"
      }, /*#__PURE__*/_react.default.createElement("ul", others, items.length ? items : defaultItem));
    }
  }]);
  return NavList;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.NavList = NavList;
var _default = NavList;
exports.default = _default;