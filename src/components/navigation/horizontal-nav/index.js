"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalNav = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _badge = require("../../../components/notifications/badge");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var HorizontalNav = function HorizontalNav(_ref) {
  var center = _ref.center,
      className = _ref.className,
      elementClassName = _ref.elementClassName,
      height = _ref.height,
      id = _ref.id,
      items = _ref.items,
      markdown = _ref.markdown,
      others = (0, _objectWithoutProperties2.default)(_ref, ["center", "className", "elementClassName", "height", "id", "items", "markdown"]);
  var selectedItem = (0, _react.useRef)(null);
  var defaultItem = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    center && selectedItem.current && selectedItem.current.scrollIntoView({
      inline: 'center',
      behavior: 'smooth'
    });
  }, []);
  var navClassNames = (0, _classnames.default)('k-HorizontalNav', className, {
    'k-HorizontalNav--center': center
  });

  var renderItems = function renderItems() {
    return items.map(function (item) {
      return renderItem(item);
    });
  };

  var renderItem = function renderItem(_ref2) {
    var className = _ref2.className,
        selected = _ref2.selected,
        text = _ref2.text,
        badge = _ref2.badge,
        key = _ref2.key,
        href = _ref2.href,
        others = (0, _objectWithoutProperties2.default)(_ref2, ["className", "selected", "text", "badge", "key", "href"]);
    var itemClassName = (0, _classnames.default)('k-HorizontalNav__item', className, {
      'is-selected': selected
    });

    var renderBadge = _react.default.createElement(_react.default.Fragment, null, text, _react.default.createElement(_badge.Badge, {
      className: "k-HorizontalNav__badge"
    }, badge));

    var renderMarkdown = markdown ? _react.default.createElement(_reactMarkdown.default, {
      softBreak: "br",
      source: text
    }) : text;
    var renderText = badge ? renderBadge : renderMarkdown;
    return _react.default.createElement("li", (0, _extends2.default)({
      className: (0, _classnames.default)('k-HorizontalNav__element', elementClassName),
      key: key,
      ref: selected ? selectedItem : defaultItem,
      role: "menuitem"
    }, others), _react.default.createElement("a", {
      href: href,
      className: itemClassName,
      style: {
        height: height
      }
    }, renderText));
  };

  return _react.default.createElement("ul", {
    role: "menubar",
    id: id,
    className: navClassNames
  }, renderItems());
};

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