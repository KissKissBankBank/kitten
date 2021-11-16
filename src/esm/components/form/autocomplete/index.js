import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import isFunction from 'lodash/fp/isFunction';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import slugify from 'slugify';
import { Loader } from '../../atoms/loader';
import classNames from 'classnames';
var itemHeight = 38;
var maxItemsVisibled = 3;
var borderSize = 2;
var Wrapper = styled.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "lfeqwe-0"
})(["display:flex;position:relative;.k-Form-Autocomplete__input{display:block;width:100%;height:", ";box-sizing:border-box;background:", ";border:", " solid ", ";padding:0 ", ";", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}&:focus{border-color:", ";}::-ms-clear{display:none;}}&.k-Form-Autocomplete--error .k-Form-Autocomplete__input{border-color:", ";color:", ";:focus{border-color:", ";color:", ";}}.k-Form-Autocomplete__loader{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;right:0;}.k-Form-Autocomplete__icon{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;}.k-Form-Autocomplete__suggestions{position:absolute;top:", ";left:0;right:0;overflow-y:auto;margin:0;padding:0;background:", ";border:", " solid ", ";border-top:none;list-style:none;height:calc(", " * var(--Autocomplete-suggestions,1));max-height:", ";}.k-Form-Autocomplete__suggestion__item{padding:", " ", ";", ";font-size:", ";line-height:1.3;color:", ";&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color 0.2s;:hover,:focus,:active{background-color:", ";}&[aria-selected='true']{background-color:", ";}}}&.k-Form-Autocomplete--hasIcon-left{.k-Form-Autocomplete__input{padding-left:", ";}.k-Form-Autocomplete__icon{left:0;}}&.k-Form-Autocomplete--hasIcon-right{.k-Form-Autocomplete__input{padding-right:", ";}.k-Form-Autocomplete__loader{padding-right:", ";}.k-Form-Autocomplete__icon{right:0;}}&.k-Form-Autocomplete--disabled{.k-Form-Autocomplete__icon{& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}}}&.k-Form-Autocomplete--orion .k-Form-Autocomplete__input{border-radius:", ";}"], pxToRem(50), COLORS.background1, pxToRem(borderSize), COLORS.line1, pxToRem(15), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, COLORS.font2, COLORS.font2, COLORS.line2, COLORS.error3, COLORS.error3, COLORS.line2, COLORS.font1, pxToRem(18), pxToRem(18), pxToRem(50), COLORS.background1, pxToRem(2), COLORS.line1, pxToRem(itemHeight), pxToRem(itemHeight * maxItemsVisibled), pxToRem(10), pxToRem(15), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, COLORS.background3, COLORS.line1, pxToRem(45), pxToRem(45), pxToRem(45), COLORS.font2, COLORS.font2, pxToRem(4));
export var Autocomplete = function Autocomplete(_ref) {
  var _classNames;

  var className = _ref.className,
      defaultItems = _ref.items,
      error = _ref.error,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      onSelect = _ref.onSelect,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      updateSuggestionsStrategy = _ref.updateSuggestionsStrategy,
      isLoading = _ref.isLoading,
      noResultMessage = _ref.noResultMessage,
      shouldShowNoResultMessage = _ref.shouldShowNoResultMessage,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["className", "items", "error", "onChange", "onBlur", "onKeyDown", "onSelect", "icon", "iconPosition", "updateSuggestionsStrategy", "isLoading", "noResultMessage", "shouldShowNoResultMessage", "variant"]);

  var _useState = useState(defaultItems),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = useState(props.defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = useState(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedItemIndex = _useState6[0],
      setSelectedItemIndex = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showSuggestions = _useState8[0],
      setShowSuggestions = _useState8[1];

  var inputEl = useRef(null);
  var suggestionsEl = useRef(null);
  var showNoResultMessage = isFunction(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items: items,
    value: value
  }) : shouldShowNoResultMessage;
  useEffect(function () {
    updateSuggestions();
    setShowSuggestions(!!value);
  }, [value, defaultItems]);

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    onChange(e);
  };

  var handleBlur = function handleBlur(e) {
    setTimeout(function () {
      setShowSuggestions(false);
    }, 100);
    onBlur(e);
  };

  var handleKeyDown = function handleKeyDown(e) {
    var enterKeyCode = 13;
    var escKeyCode = 27;
    var arrowUpKeyCode = 38;
    var arrowDownKeyCode = 40;
    if (e.keyCode === escKeyCode) setShowSuggestions(false);

    if (showSuggestions) {
      if (e.keyCode === arrowUpKeyCode) {
        e.preventDefault();
        prevSelectedItem();
      }

      if (e.keyCode === arrowDownKeyCode) {
        e.preventDefault();
        nextSelectedItem();
      }

      if (e.keyCode === enterKeyCode) {
        e.preventDefault();
        var selectedValue = items[selectedItemIndex];
        handleClickItem(selectedValue)();
      }
    }

    onKeyDown(e);
  };

  var handleClickItem = function handleClickItem(value) {
    return function () {
      if (!value) return;
      inputEl.current.value = value;
      inputEl.current.focus();
      setValue(value);
      setShowSuggestions(false);
      onSelect(value);
    };
  };

  var updateSuggestions = function updateSuggestions() {
    var search = "".concat(value).toLowerCase();
    var newItems = updateSuggestionsStrategy ? updateSuggestionsStrategy({
      items: defaultItems,
      value: value
    }) : defaultItems.filter(function (item) {
      return item.toLowerCase().includes(search) && item !== value;
    });
    setItems(newItems);
    resetSelectedItem();
  };

  var prevSelectedItem = function prevSelectedItem() {
    var newIndex = selectedItemIndex - 1;
    suggestionsScrollTop(newIndex);
    setSelectedItemIndex(newIndex < 0 ? 0 : newIndex);
    var scrollTop = newIndex * itemHeight;
    suggestionsScrollTop(scrollTop);
  };

  var nextSelectedItem = function nextSelectedItem() {
    var newIndex = selectedItemIndex + 1;
    var itemsLength = items.length - 1;
    suggestionsScrollTop(newIndex);
    setSelectedItemIndex(newIndex >= itemsLength ? itemsLength : newIndex);
    var scrollTop = (newIndex - maxItemsVisibled + 1) * itemHeight;
    suggestionsScrollTop(scrollTop);
  };

  var resetSelectedItem = function resetSelectedItem() {
    return setSelectedItemIndex(-1);
  };

  var suggestionsScrollTop = function suggestionsScrollTop(value) {
    suggestionsEl.current.scrollTop = value > 0 ? value : 0;
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    className: classNames('k-Form-Autocomplete', className, "k-Form-Autocomplete--".concat(variant), (_classNames = {}, _defineProperty(_classNames, "k-Form-Autocomplete--hasIcon-".concat(iconPosition), !!icon), _defineProperty(_classNames, 'k-Form-Autocomplete--disabled', props.disabled), _classNames))
  }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
    error: error,
    ref: inputEl,
    type: "text",
    autoComplete: "off",
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    "aria-owns": "".concat(props.name, "-results"),
    "aria-expanded": showSuggestions && items.length > 0,
    "aria-autocomplete": "both",
    "aria-activedescendant": items[selectedItemIndex] ? slugify("".concat(items[selectedItemIndex], "-").concat(selectedItemIndex)) : '',
    className: "k-Form-Autocomplete__input"
  })), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader, {
    className: "k-Form-Autocomplete__loader",
    color: COLORS.font2
  }), /*#__PURE__*/React.createElement(VisuallyHidden, {
    lang: "en"
  }, "loading")), icon && /*#__PURE__*/React.createElement("span", {
    className: "k-Form-Autocomplete__icon",
    "aria-hidden": "true"
  }, React.cloneElement(icon, {
    width: 15,
    height: 15
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/React.createElement("ul", {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': '1'
    },
    className: "k-Form-Autocomplete__suggestions"
  }, /*#__PURE__*/React.createElement("li", {
    className: "k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult",
    role: "option",
    tabIndex: "-1"
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: item + index,
      id: slugify("".concat(item, "-").concat(index)),
      onClick: handleClickItem(item),
      role: "option",
      "aria-selected": selectedItemIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, item);
  })), /*#__PURE__*/React.createElement(VisuallyHidden, {
    lang: "en",
    "aria-live": "assertive"
  }, items.length, " results are available.")));
};
Autocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  updateSuggestionsStrategy: PropTypes.func,
  noResultMessage: PropTypes.string,
  shouldShowNoResultMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Autocomplete.defaultProps = {
  error: false,
  shouldShowNoResultMessage: true,
  iconPosition: 'left',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onSelect: function onSelect() {},
  isLoading: false,
  variant: 'orion'
};