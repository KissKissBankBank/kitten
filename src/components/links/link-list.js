"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var LinkList =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkList, _Component);

  function LinkList() {
    var _this;

    _classCallCheck(this, LinkList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkList).call(this));
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LinkList, [{
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
          others = _objectWithoutProperties(element, ["key", "item", "href", "active", "weight", "className"]);

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
      return _react.default.createElement("li", {
        className: linkListItemClassName,
        key: key
      }, _react.default.createElement("a", _extends({}, others, {
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
          others = _objectWithoutProperties(_this$props2, ["className", "margin", "items", "lineHeight", "itemMargin"]);

      var listClassName = (0, _classnames.default)('k-LinkList', className, {
        'k-LinkList--withoutMargin': !margin
      });
      return _react.default.createElement("ul", _extends({}, others, {
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