"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var NavList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(NavList, _React$Component);

  function NavList() {
    (0, _classCallCheck2.default)(this, NavList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NavList).apply(this, arguments));
  }

  (0, _createClass2.default)(NavList, [{
    key: "renderItem",
    value: function renderItem(item, i) {
      return _react.default.createElement("li", {
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
      return _react.default.createElement("nav", {
        role: "navigation"
      }, _react.default.createElement("ul", others, items.length ? items : defaultItem));
    }
  }]);
  return NavList;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.NavList = NavList;
var _default = NavList;
exports.default = _default;