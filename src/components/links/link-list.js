"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LinkList = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(LinkList, _Component);

  var _super = _createSuper(LinkList);

  function LinkList() {
    var _this;

    (0, _classCallCheck2.default)(this, LinkList);
    _this = _super.call(this);
    _this.renderItem = _this.renderItem.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(LinkList, [{
    key: "renderItems",
    value: function renderItems() {
      return this.props.items.map(this.renderItem);
    }
  }, {
    key: "renderItem",
    value: function renderItem(element) {
      var key = element.key,
          item = element.item,
          href = element.href,
          active = element.active,
          weight = element.weight,
          className = element.className,
          others = (0, _objectWithoutProperties2.default)(element, ["key", "item", "href", "active", "weight", "className"]);
      var _this$props = this.props,
          color = _this$props.color,
          lineHeight = _this$props.lineHeight,
          itemMargin = _this$props.itemMargin;
      var linkListClassName = (0, _classnames.default)('k-LinkList__link', className, {
        'is-active': active,
        'k-LinkList__link--light': color == 'light',
        'k-LinkList__link--dark': color == 'dark',
        'k-LinkList__link--normalLineHeight': lineHeight == 'normal',
        'k-LinkList__link--regularWeight': this.props.weight == 'regular' && !weight,
        'k-LinkList__link--lightWeight': this.props.weight == 'light' && !weight,
        'k-LinkList__item--regularWeight': weight == 'regular',
        'k-LinkList__item--lightWeight': weight == 'light'
      });
      var linkListItemClassName = (0, _classnames.default)('k-LinkList__item', {
        'k-LinkList__item--doubleMargin': itemMargin == 'double',
        'k-LinkList__item--tripleMargin': itemMargin == 'triple'
      });
      return /*#__PURE__*/_react.default.createElement("li", {
        className: linkListItemClassName,
        key: key
      }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, others, {
        href: href,
        className: linkListClassName
      }), item));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          margin = _this$props2.margin,
          items = _this$props2.items,
          lineHeight = _this$props2.lineHeight,
          itemMargin = _this$props2.itemMargin,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "margin", "items", "lineHeight", "itemMargin"]);
      var listClassName = (0, _classnames.default)('k-LinkList', className, {
        'k-LinkList--withoutMargin': !margin
      });
      return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, others, {
        className: listClassName
      }), this.renderItems());
    }
  }]);
  return LinkList;
}(_react.Component);

exports.LinkList = LinkList;
LinkList.propTypes = {
  color: _propTypes.default.oneOf(['light', 'dark']),
  lineHeight: _propTypes.default.oneOf(['normal']),
  itemMargin: _propTypes.default.oneOf(['double', 'triple']),
  weight: _propTypes.default.oneOf(['regular', 'light'])
};
LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [],
  // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular'
};