"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabBar = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TabBar, _Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    (0, _classCallCheck2.default)(this, TabBar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TabBar, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var items = this.props.items;
      return items.map(function (item, key) {
        return _this.renderItem(item, key);
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, key) {
      var className = item.className,
          selected = item.selected,
          text = item.text,
          linkProps = (0, _objectWithoutProperties2.default)(item, ["className", "selected", "text"]);
      var itemClassName = (0, _classnames.default)('k-TabBar__item', className, {
        'is-selected': selected
      });
      return _react.default.createElement("li", {
        key: key
      }, _react.default.createElement("a", (0, _extends2.default)({
        className: itemClassName
      }, linkProps), _react.default.createElement(_reactMarkdown.default, {
        softBreak: "br",
        source: text
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: this.props.id,
        className: (0, _classnames.default)('k-TabBar', this.props.className)
      }, _react.default.createElement("nav", {
        className: (0, _classnames.default)('k-TabBar__nav', this.props.navClassName)
      }, _react.default.createElement("ul", {
        className: (0, _classnames.default)('k-TabBar__list', this.props.listClassName)
      }, this.renderItems())));
    }
  }]);
  return TabBar;
}(_react.Component);

exports.TabBar = TabBar;
TabBar.defaultProps = {
  id: null,
  className: null,
  navClassName: null,
  listClassName: null,
  items: []
};