"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalNav = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _badge = require("../../components/notifications/badge");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var HorizontalNav =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HorizontalNav, _Component);

  function HorizontalNav() {
    (0, _classCallCheck2.default)(this, HorizontalNav);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HorizontalNav).apply(this, arguments));
  }

  (0, _createClass2.default)(HorizontalNav, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var items = this.props.items;
      return items.map(function (item) {
        return _this.renderItem(item);
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var markdown = this.props.markdown;
      var className = item.className,
          selected = item.selected,
          text = item.text,
          badge = item.badge,
          key = item.key,
          href = item.href,
          others = (0, _objectWithoutProperties2.default)(item, ["className", "selected", "text", "badge", "key", "href"]);
      var itemClassName = (0, _classnames.default)('k-HorizontalNav__item', className, {
        'is-selected': selected
      });

      var renderBadge = _react.default.createElement(_react.Fragment, null, text, _react.default.createElement(_badge.Badge, {
        className: "k-HorizontalNav__badge"
      }, badge));

      var renderMarkdown = markdown ? _react.default.createElement(_reactMarkdown.default, {
        softBreak: "br",
        source: text
      }) : text;
      var renderText = badge ? renderBadge : renderMarkdown;
      return _react.default.createElement("li", (0, _extends2.default)({
        className: (0, _classnames.default)('k-HorizontalNav__element', this.props.elementClassName),
        key: key,
        role: "menuitem"
      }, others), _react.default.createElement("a", {
        href: href,
        className: itemClassName,
        style: {
          height: this.props.height
        }
      }, renderText));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          center = _this$props.center,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "center"]);
      var navClassNames = (0, _classnames.default)('k-HorizontalNav', className, {
        'k-HorizontalNav--center': center
      });
      return _react.default.createElement("ul", {
        role: "menubar",
        id: this.props.id,
        className: navClassNames
      }, this.renderItems());
    }
  }]);
  return HorizontalNav;
}(_react.Component);

exports.HorizontalNav = HorizontalNav;
HorizontalNav.defaultProps = {
  id: null,
  className: null,
  height: 'auto',
  center: false,
  elementClassName: null,
  items: [],
  // Eg: [{ key: …, text: …, href: …, selected: …, badge: … }]
  markdown: true
};