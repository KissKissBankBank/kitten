"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagList = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typologyTagIcon = require("kitten/components/icons/typology-tag-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var TagList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagList, _React$Component);

  function TagList(props) {
    var _this;

    _classCallCheck(this, TagList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TagList).call(this, props));
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TagList, [{
    key: "renderItem",
    value: function renderItem(element, index) {
      var TagIcon = this.props.icon;
      var key = element.key,
          item = element.item;
      var isFirstItem = index == 0;
      var isLastItem = index == this.props.items.length - 1;
      var itemClassName = (0, _classnames.default)('k-TagList__item', {
        'k-TagList__item--first': isFirstItem
      }, {
        'k-TagList__item--last': isLastItem
      });

      var icon = isFirstItem && _react.default.createElement(TagIcon, {
        className: "k-TagList__icon"
      });

      return _react.default.createElement("li", {
        key: key,
        className: itemClassName
      }, icon, item);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.items) return null;

      var _this$props = this.props,
          className = _this$props.className,
          tiny = _this$props.tiny,
          icon = _this$props.icon,
          items = _this$props.items,
          others = _objectWithoutProperties(_this$props, ["className", "tiny", "icon", "items"]);

      var listClassName = (0, _classnames.default)('k-TagList', {
        'k-TagList--tiny': tiny
      }, className);
      return _react.default.createElement("ul", _extends({
        className: listClassName
      }, others), items.map(this.renderItem));
    }
  }]);

  return TagList;
}(_react.default.Component);

exports.TagList = TagList;
TagList.defaultProps = {
  icon: _typologyTagIcon.TypologyTagIcon,
  className: null,
  tiny: false,
  items: null
};