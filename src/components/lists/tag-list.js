"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typologyTagIcon = require("../../components/icons/typology-tag-icon");

var TagList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TagList, _React$Component);

  function TagList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TagList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TagList).call(this, props));
    _this.renderItem = _this.renderItem.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(TagList, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tiny", "icon", "items"]);
      var listClassName = (0, _classnames.default)('k-TagList', {
        'k-TagList--tiny': tiny
      }, className);
      return _react.default.createElement("ul", (0, _extends2.default)({
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