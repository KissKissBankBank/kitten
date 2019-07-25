"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletList = void 0;

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

var BulletList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BulletList, _React$Component);

  function BulletList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, BulletList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BulletList).call(this, props));
    _this.renderItem = _this.renderItem.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(BulletList, [{
    key: "renderItems",
    value: function renderItems() {
      return this.props.items.map(this.renderItem);
    }
  }, {
    key: "renderItem",
    value: function renderItem(element) {
      var key = element.key,
          item = element.item,
          className = element.className,
          others = (0, _objectWithoutProperties2.default)(element, ["key", "item", "className"]);
      var itemClassName = (0, _classnames.default)('k-BulletList__item', {
        'k-BulletList__item--large': this.props.large
      }, {
        'k-BulletList__item--big': this.props.big
      }, {
        'k-BulletList__item--huge': this.props.huge
      }, className);
      return _react.default.createElement("li", (0, _extends2.default)({
        key: key,
        className: itemClassName
      }, others), item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          large = _this$props.large,
          big = _this$props.big,
          huge = _this$props.huge,
          items = _this$props.items,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "large", "big", "huge", "items"]);
      var listClassName = (0, _classnames.default)('k-BulletList', className);
      return _react.default.createElement("ul", (0, _extends2.default)({
        className: listClassName
      }, others), this.renderItems());
    }
  }]);
  return BulletList;
}(_react.default.Component);

exports.BulletList = BulletList;
BulletList.defaultProps = {
  className: null,
  large: false,
  big: false,
  huge: false,
  items: [] // Eg: [{ key: …, item: … }]

};