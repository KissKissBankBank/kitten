import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["closeOnClick", "children", "selectedItem", "isAnimated", "id", "onChange", "className", "multiple"];
import React, { useState, cloneElement, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/fp/isArray';
import remove from 'lodash/fp/remove';
import { Item } from './components/item';
import { Header } from './components/header';
import { Content } from './components/content';
import { Context } from './components/context';
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import classNames from 'classnames';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { useDebounce } from '../../../../helpers/hooks/use-debounce';
import { domElementHelper } from '../../../../helpers/dom/element-helper';
var StyledAccordeon = styled.div.withConfig({
  displayName: "accordeon__StyledAccordeon",
  componentId: "sc-pplp01-0"
})([".k-Accordeon__item{border-radius:var(--border-radius-m);}.k-Accordeon__item ~ .k-Accordeon__item{margin-top:", ";}.k-Accordeon__item:hover{.k-Accordeon__header,.k-Accordeon__content{border-color:var(--color-grey-500);}}.k-Accordeon__item.k-Accordeon__item--expanded{.k-Accordeon__header,.k-Accordeon__content{border-color:var(--color-grey-900);}}.k-Accordeon__header{display:block;position:relative;min-height:", ";margin:0;width:100%;box-sizing:border-box;overflow:visible;padding:", " ", " ", " ", ";background:transparent;border:var(--border);border-radius:var(--border-radius-m);", " color:inherit;cursor:pointer;text-align:left;@media (min-width:", "px){min-height:", ";}&[aria-expanded='true']{border-bottom-color:", " !important;}.k-Accordeon__header__arrow{position:absolute;top:0;bottom:0;right:", ";display:flex;align-items:center;}&:hover:active{border-color:var(--color-grey-900);}}.k-Accordeon__content{", " box-sizing:border-box;visibility:visible;overflow:visible;height:auto;padding:", " ", ";background-color:", ";border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);border:var(--border);border-top:0;visibility:visible;opacity:1;max-height:var(--accordeon-content-max-height,unset);&[aria-hidden='true']{visibility:hidden;opacity:0;--accordeon-content-max-height:0 !important;}.k-Accordeon__content_marger{padding-bottom:", ";}}&.k-Accordeon--isAnimated .k-Accordeon__header{transition:border 0.4s ease,border-radius 0.4s ease;transition-delay:0s;&[aria-hidden='true']{transition-delay:0.4s;}}&.k-Accordeon--isAnimated .k-Accordeon__content{overflow:hidden;transition:visibility 0s ease,all 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}}@media (prefers-reduced-motion:reduce){&.k-Accordeon--isAnimated{.k-Accordeon__header,.k-Accordeon__content{transition:none !important;}}}.k-Accordeon__header[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], pxToRem(15), pxToRem(50), pxToRem(25), pxToRem(30 + 10 + 10), pxToRem(25), pxToRem(30), TYPOGRAPHY.fontStyles.regular, ScreenConfig.S.min, pxToRem(70), COLORS.background1, pxToRem(20), TYPOGRAPHY.fontStyles.light, pxToRem(0.1), pxToRem(30), COLORS.background1, pxToRem(30));
export var Accordeon = function Accordeon(_ref) {
  var closeOnClick = _ref.closeOnClick,
      children = _ref.children,
      selectedItem = _ref.selectedItem,
      isAnimated = _ref.isAnimated,
      id = _ref.id,
      onChange = _ref.onChange,
      className = _ref.className,
      multiple = _ref.multiple,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var items = getReactElementsByType({
    children: children,
    type: Accordeon.Item
  });

  var _useState = useState(isArray(selectedItem) ? selectedItem : [selectedItem]),
      internalSelectedItem = _useState[0],
      setSelectedItem = _useState[1];

  var _useState2 = useState(0),
      accordeonWidth = _useState2[0],
      setAccordeonWidth = _useState2[1];

  var debouncedAccordeonWidth = useDebounce(accordeonWidth, 200);
  var accordeonElement = useRef(null);
  var fakeResizeObserver = {
    observe: function observe() {},
    disconnect: function disconnect() {}
  };
  var accordeonSizeObserver = domElementHelper.canUseDom() && 'ResizeObserver' in window ? new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      setAccordeonWidth(entry.contentRect.width);
    });
  }) : fakeResizeObserver;
  useEffect(function () {
    accordeonSizeObserver.observe((accordeonElement == null ? void 0 : accordeonElement.current) || null);
    return function () {
      return accordeonSizeObserver.disconnect();
    };
  }, [accordeonElement]);

  var updateSelectedItem = function updateSelectedItem(newSelectedItem) {
    var newItem;
    var ids;

    if (multiple) {
      newItem = internalSelectedItem.includes(newSelectedItem) ? remove(function (el) {
        return el === newSelectedItem;
      })(internalSelectedItem) : [].concat(internalSelectedItem, [newSelectedItem]);
      ids = items.filter(function (_, index) {
        return newItem.includes(index);
      }).map(function (item) {
        var _item$props;

        return (_item$props = item.props) == null ? void 0 : _item$props.id;
      });
    } else {
      var _items$newItem$, _items$newItem$$props;

      newItem = closeOnClick && internalSelectedItem.includes(newSelectedItem) ? [] : [newSelectedItem];
      ids = ((_items$newItem$ = items[newItem[0]]) == null ? void 0 : (_items$newItem$$props = _items$newItem$.props) == null ? void 0 : _items$newItem$$props.id) || id + "-" + newItem;
    }

    setSelectedItem(newItem);
    onChange(ids);
  };

  var context = {
    updateSelectedItem: updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick: closeOnClick,
    accordeonWidth: debouncedAccordeonWidth
  };
  return /*#__PURE__*/React.createElement(StyledAccordeon, _extends({
    className: classNames('k-Accordeon', className, {
      'k-Accordeon--isAnimated': isAnimated
    }),
    ref: accordeonElement
  }, props), /*#__PURE__*/React.createElement(Context.Provider, {
    value: context
  }, items.map(function (item, index) {
    var elementId = item.props.id || id + "-" + index;
    return /*#__PURE__*/cloneElement(item, {
      key: elementId,
      id: elementId,
      index: index
    });
  })));
};
Accordeon.Item = Item;
Accordeon.Header = Header;
Accordeon.Content = Content;
Accordeon.propTypes = {
  selectedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
  id: PropTypes.string,
  closeOnClick: PropTypes.bool,
  multiple: PropTypes.bool
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon',
  closeOnClick: false,
  multiple: false
};