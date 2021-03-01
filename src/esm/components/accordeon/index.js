import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, cloneElement, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Item } from './components/item';
import { Header } from './components/header';
import { Content } from './components/content';
import { Context } from './components/context';
import { getReactElementsByType } from '../../helpers/react/react-elements';
import styled from 'styled-components';
import COLORS from '../../constants/colors-config';
import { pxToRem } from '../../helpers/utils/typography';
import classNames from 'classnames';
import TYPOGRAPHY from '../../constants/typography-config';
import { ScreenConfig } from '../../constants/screen-config';
import { useDebounce } from '../../helpers/utils/debounce';
import { domElementHelper } from '../../helpers/dom/element-helper';
var StyledAccordeon = styled.div.withConfig({
  displayName: "accordeon__StyledAccordeon",
  componentId: "sc-1ew7x4g-0"
})([".k-Accordeon__item ~ .k-Accordeon__item{margin-top:", ";}.k-Accordeon__header{display:block;margin:0;width:100%;box-sizing:border-box;overflow:visible;background:transparent;border:", " solid ", ";font:inherit;color:inherit;background-color:transparent;cursor:pointer;text-align:left;&:focus{outline:", " solid ", ";outline-offset:", ";}}.k-Accordeon__content{", " box-sizing:border-box;visibility:visible;overflow:visible;height:auto;border:", " solid ", ";border-top:0;visibility:visible;opacity:1;max-height:var(--accordeon-content-max-height,unset);&[aria-hidden='true']{visibility:hidden;opacity:0;--accordeon-content-max-height:0 !important;}}&.k-Accordeon--isAnimated .k-Accordeon__header{transition:border 0.4s ease,border-radius 0.4s ease;transition-delay:0s;&[aria-hidden='true']{transition-delay:0.4s;}}&.k-Accordeon--isAnimated .k-Accordeon__content{overflow:hidden;transition:visibility 0s ease,all 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}}@media (prefers-reduced-motion:reduce){&.k-Accordeon--isAnimated{.k-Accordeon__header,.k-Accordeon__content{transition:none !important;}}}&.k-Accordeon--andromeda{.k-Accordeon__header{", " padding:", ";min-height:", ";border-radius:", ";.k-Accordeon__header__arrow{display:none;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";padding:", " ", ";}.k-Accordeon__content_marger{padding-top:", ";padding-bottom:", ";}}&.k-Accordeon--orion{.k-Accordeon__item{border-radius:", ";}.k-Accordeon__header{position:relative;padding:", " ", " ", " ", ";", " min-height:", ";border-radius:", ";@media (min-width:", "px){min-height:", ";border-radius:", ";}&[aria-expanded='true']{border-bottom-color:", ";}.k-Accordeon__header__arrow{position:absolute;top:0;bottom:0;right:", ";display:flex;align-items:center;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";padding:", " ", ";@media (min-width:", "px){border-bottom-left-radius:", ";border-bottom-right-radius:", ";}.k-Accordeon__content_marger{padding-bottom:", ";}}}.k-Accordeon__header[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], pxToRem(15), pxToRem(2), COLORS.line1, COLORS.primary4, pxToRem(2), pxToRem(2), TYPOGRAPHY.fontStyles.light, pxToRem(2), COLORS.line1, TYPOGRAPHY.fontStyles.light, pxToRem(20), pxToRem(30), pxToRem(3), COLORS.background3, pxToRem(3), pxToRem(3), pxToRem(0.1), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(6), pxToRem(25), pxToRem(30 + 10 + 10), pxToRem(25), pxToRem(30), TYPOGRAPHY.fontStyles.regular, pxToRem(50), pxToRem(6), ScreenConfig.S.min, pxToRem(70), pxToRem(8), COLORS.background1, pxToRem(20), COLORS.background1, pxToRem(6), pxToRem(6), pxToRem(0.1), pxToRem(30), ScreenConfig.S.min, pxToRem(8), pxToRem(8), pxToRem(30));
export var Accordeon = function Accordeon(_ref) {
  var closeOnClick = _ref.closeOnClick,
      variant = _ref.variant,
      children = _ref.children,
      selectedItem = _ref.selectedItem,
      isAnimated = _ref.isAnimated,
      id = _ref.id,
      onChange = _ref.onChange;
  var items = getReactElementsByType({
    children: children,
    type: Accordeon.Item
  });

  var _useState = useState(selectedItem),
      _useState2 = _slicedToArray(_useState, 2),
      internalSelectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      accordeonWidth = _useState4[0],
      setAccordeonWidth = _useState4[1];

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
    accordeonSizeObserver.observe((accordeonElement === null || accordeonElement === void 0 ? void 0 : accordeonElement.current) || null);
    return function () {
      return accordeonSizeObserver.disconnect();
    };
  }, [accordeonElement]);

  var updateSelectedItem = function updateSelectedItem(newSelectedItem) {
    var newItem = closeOnClick && newSelectedItem === internalSelectedItem ? null : newSelectedItem;
    setSelectedItem(newItem);
    onChange(items[newItem].props.id || "".concat(id, "-").concat(newItem));
  };

  var context = {
    updateSelectedItem: updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick: closeOnClick,
    accordeonWidth: debouncedAccordeonWidth
  };
  return /*#__PURE__*/React.createElement(StyledAccordeon, {
    className: classNames('k-Accordeon', "k-Accordeon--".concat(variant), {
      'k-Accordeon--isAnimated': isAnimated
    }),
    ref: accordeonElement
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: context
  }, items.map(function (item, index) {
    var elementId = item.props.id || "".concat(id, "-").concat(index);
    return cloneElement(item, {
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
  selectedItem: PropTypes.number,
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
  id: PropTypes.string,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  closeOnClick: PropTypes.bool
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon',
  variant: 'andromeda',
  closeOnClick: false
};