import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import isFunction from 'lodash/fp/isFunction';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import slugify from 'slugify';
import { Loader } from '../../loaders/loader';
var itemHeight = 38;
var maxItemsVisibled = 3;
var borderSize = 2;
var Container = styled.div.withConfig({
  displayName: "autocomplete__Container",
  componentId: "lfeqwe-0"
})(["display:flex;position:relative;"]);
var Input = styled.input.withConfig({
  displayName: "autocomplete__Input",
  componentId: "lfeqwe-1"
})(["display:block;width:100%;height:", ";box-sizing:border-box;background:", ";border:", " solid ", ";padding:0 ", ";", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}:focus{border-color:", ";outline:", " solid ", ";outline-offset:", ";}::-ms-clear{display:none;}", " ", ""], pxToRem(50), COLORS.background1, pxToRem(borderSize), COLORS.line1, pxToRem(15), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, COLORS.font2, COLORS.font2, COLORS.line2, COLORS.primary4, pxToRem(2), pxToRem(2), function (_ref) {
  var error = _ref.error;
  return error && css(["border-color:", ";color:", ";:focus{border-color:", ";color:", ";}"], COLORS.error3, COLORS.error3, COLORS.line2, COLORS.font1);
}, function (_ref2) {
  var hasIcon = _ref2.hasIcon,
      iconPosition = _ref2.iconPosition;

  if (!hasIcon) {
    return false;
  }

  return iconPosition === 'left' ? css(["padding-left:", ";"], pxToRem(45)) : css(["padding-right:", ";"], pxToRem(45));
});
var StyledLoader = styled(function (_ref3) {
  var addRightPadding = _ref3.addRightPadding,
      others = _objectWithoutProperties(_ref3, ["addRightPadding"]);

  return /*#__PURE__*/React.createElement(Loader, others);
}).withConfig({
  displayName: "autocomplete__StyledLoader",
  componentId: "lfeqwe-2"
})(["display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;right:0;", ""], pxToRem(18), function (_ref4) {
  var addRightPadding = _ref4.addRightPadding;
  return addRightPadding && css(["padding-right:", ";"], pxToRem(45));
});
var StyledIcon = styled(function (_ref5) {
  var disabled = _ref5.disabled,
      iconPosition = _ref5.iconPosition,
      others = _objectWithoutProperties(_ref5, ["disabled", "iconPosition"]);

  return /*#__PURE__*/React.createElement("span", others);
}).withConfig({
  displayName: "autocomplete__StyledIcon",
  componentId: "lfeqwe-3"
})(["display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;left:0;", " ", ""], pxToRem(18), function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && css(["& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}"], COLORS.font2, COLORS.font2);
}, function (_ref7) {
  var iconPosition = _ref7.iconPosition;
  return iconPosition === 'right' && css(["left:initial;right:0;"]);
});
var Suggestions = styled.ul.withConfig({
  displayName: "autocomplete__Suggestions",
  componentId: "lfeqwe-4"
})(["position:absolute;top:", ";left:0;right:0;overflow-y:auto;margin:0;padding:0;background:", ";border:", " solid ", ";border-top:none;list-style:none;", ""], pxToRem(50), COLORS.background1, pxToRem(2), COLORS.line1, function (_ref8) {
  var itemsLength = _ref8.itemsLength;
  return itemsLength > 0 && css(["height:", ";"], pxToRem(itemHeight * (itemsLength > 2 ? maxItemsVisibled : itemsLength)));
});
var NoResultItem = styled.li.withConfig({
  displayName: "autocomplete__NoResultItem",
  componentId: "lfeqwe-5"
})(["padding:", " ", ";", ";font-size:", ";font-style:italic;line-height:1.3;color:", ";"], pxToRem(10), pxToRem(15), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1);
var Item = styled.li.withConfig({
  displayName: "autocomplete__Item",
  componentId: "lfeqwe-6"
})(["padding:", " ", ";", ";font-size:", ";line-height:1.3;color:", ";cursor:pointer;transition:background-color 0.2s;:hover,:focus,:active{background-color:", ";}:focus{outline:", " solid ", ";outline-offset:", ";}&[aria-selected='true']{background-color:", ";}"], pxToRem(10), pxToRem(15), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, COLORS.background3, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.line1);
export var Autocomplete = function Autocomplete(_ref9) {
  var defaultItems = _ref9.items,
      error = _ref9.error,
      onChange = _ref9.onChange,
      onBlur = _ref9.onBlur,
      onKeyDown = _ref9.onKeyDown,
      onSelect = _ref9.onSelect,
      icon = _ref9.icon,
      iconPosition = _ref9.iconPosition,
      updateSuggestionsStrategy = _ref9.updateSuggestionsStrategy,
      isLoading = _ref9.isLoading,
      noResultMessage = _ref9.noResultMessage,
      shouldShowNoResultMessage = _ref9.shouldShowNoResultMessage,
      props = _objectWithoutProperties(_ref9, ["items", "error", "onChange", "onBlur", "onKeyDown", "onSelect", "icon", "iconPosition", "updateSuggestionsStrategy", "isLoading", "noResultMessage", "shouldShowNoResultMessage"]);

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

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Input, _extends({}, props, {
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
    hasIcon: !!icon,
    iconPosition: iconPosition,
    "aria-activedescendant": items[selectedItemIndex] ? slugify("".concat(items[selectedItemIndex], "-").concat(selectedItemIndex)) : ''
  })), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledLoader, {
    color: COLORS.font2,
    addRightPadding: icon && iconPosition === 'right'
  }), /*#__PURE__*/React.createElement(VisuallyHidden, {
    lang: "en"
  }, "loading")), icon && /*#__PURE__*/React.createElement(StyledIcon, {
    "aria-hidden": "true",
    disabled: props.disabled,
    iconPosition: iconPosition
  }, React.cloneElement(icon, {
    width: 15,
    height: 15
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Suggestions, {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    itemsLength: "1"
  }, /*#__PURE__*/React.createElement(NoResultItem, {
    role: "option",
    tabIndex: "-1"
  }, noResultMessage))), showSuggestions && items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Suggestions, {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    itemsLength: items.length
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Item, {
      key: item + index,
      id: slugify("".concat(item, "-").concat(index)),
      onClick: handleClickItem(item),
      role: "option",
      "aria-selected": selectedItemIndex === index,
      tabIndex: "-1"
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
  isLoading: PropTypes.bool
};
Autocomplete.defaultProps = {
  error: false,
  shouldShowNoResultMessage: true,
  iconPosition: 'left',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onSelect: function onSelect() {},
  isLoading: false
};