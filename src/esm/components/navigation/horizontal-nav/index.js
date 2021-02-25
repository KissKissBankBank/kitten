import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useEffect } from 'react';
import { Badge } from '../../../components/atoms/badge';
import classNames from 'classnames';
import Markdown from 'react-markdown';
export var HorizontalNav = function HorizontalNav(_ref) {
  var center = _ref.center,
      className = _ref.className,
      elementClassName = _ref.elementClassName,
      height = _ref.height,
      id = _ref.id,
      items = _ref.items,
      markdown = _ref.markdown;
  var selectedItem = useRef(null);
  var defaultItem = useRef(null);
  useEffect(function () {
    center && selectedItem.current && selectedItem.current.scrollIntoView({
      inline: 'center',
      behavior: 'smooth'
    });
  }, []);
  var navClassNames = classNames('k-HorizontalNav', className, {
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
        others = _objectWithoutProperties(_ref2, ["className", "selected", "text", "badge", "key", "href"]);

    var itemClassName = classNames('k-HorizontalNav__item', className, {
      'is-selected': selected
    });
    var renderBadge = /*#__PURE__*/React.createElement(React.Fragment, null, text, /*#__PURE__*/React.createElement(Badge, {
      className: "k-HorizontalNav__badge"
    }, badge));
    var renderMarkdown = markdown ? /*#__PURE__*/React.createElement(Markdown, {
      softBreak: "br",
      source: text
    }) : text;
    var renderText = badge ? renderBadge : renderMarkdown;
    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames('k-HorizontalNav__element', elementClassName),
      key: key,
      ref: selected ? selectedItem : defaultItem,
      role: "menuitem"
    }, others), /*#__PURE__*/React.createElement("a", {
      href: href,
      className: itemClassName,
      style: {
        height: height
      }
    }, renderText));
  };

  return /*#__PURE__*/React.createElement("ul", {
    role: "menubar",
    id: id,
    className: navClassNames
  }, renderItems());
};
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