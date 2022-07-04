import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "items", "label", "error", "onChange", "onBlur", "onKeyDown", "onSelect", "icon", "iconPosition", "updateSuggestionsStrategy", "isLoading", "noResultMessage", "shouldShowNoResultMessage"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import isFunction from 'lodash/fp/isFunction';
import isEmpty from 'lodash/fp/isEmpty';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import { Loader } from '../../../graphics/animations/loader';
export var maxVisibleSuggestions = 3;
var Wrapper = styled.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "sc-1bpe1y1-0"
})(["display:flex;position:relative;.k-Form-Autocomplete__input{display:block;width:100%;height:", ";box-sizing:border-box;border-radius:var(--border-radius-s);background:", ";border:var(--border-width) solid var(--color-grey-400);padding:0 ", ";", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}&:focus{border-color:var(--color-grey-500);outline:var(--outline-input);outline-offset:var(--outline-offset-input);}}&.k-Form-Autocomplete--error .k-Form-Autocomplete__input{border:var(--border-danger);color:", ";:focus{border-color:var(--color-grey-500);color:", ";}}.k-Form-Autocomplete__loader{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;right:0;}.k-Form-Autocomplete__icon{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;}&.k-Form-Autocomplete--hasIcon-left{.k-Form-Autocomplete__input{padding-left:", ";}.k-Form-Autocomplete__icon{left:0;}}&.k-Form-Autocomplete--hasIcon-right{.k-Form-Autocomplete__input{padding-right:", ";}.k-Form-Autocomplete__loader{padding-right:", ";}.k-Form-Autocomplete__icon{right:0;}}&.k-Form-Autocomplete--disabled{.k-Form-Autocomplete__input{border:var(--color-grey-300);background-color:var(--color-grey-200);color:var(--color-grey-600);}.k-Form-Autocomplete__icon{& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}}}"], pxToRem(50), COLORS.background1, pxToRem(15), TYPOGRAPHY.fontStyles['400'], stepToRem(-1), COLORS.font1, COLORS.font2, COLORS.font2, COLORS.error3, COLORS.font1, pxToRem(18), pxToRem(18), pxToRem(45), pxToRem(45), pxToRem(45), COLORS.font2, COLORS.font2);
export var StyledSuggestionsList = styled.ul.withConfig({
  displayName: "autocomplete__StyledSuggestionsList",
  componentId: "sc-1bpe1y1-1"
})(["box-sizing:border-box;position:absolute;top:calc(100% + ", ");left:", ";right:", ";display:flex;flex-direction:column;gap:", ";overflow-y:auto;margin:0;padding:", ";background:var(--color-grey-000);border:var(--border-width) solid var(--color-grey-400);border-radius:var(--border-radius-m);list-style:none;max-height:calc( ", " + (min(2,(var(--Autocomplete-suggestions) - 1)) * ", ") );.k-Form-Autocomplete__suggestion__item{box-sizing:border-box;height:", ";padding:", " ", ";border-radius:var(--border-radius-s);", ";font-size:", ";line-height:", ";color:var(--color-grey-900);&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color var(--transition);:hover,:focus,:active{background-color:var(--color-grey-200);}&[aria-selected='true']{background-color:var(--color-grey-300);}}}"], pxToRem(5), pxToRem(-1), pxToRem(-1), pxToRem(2), pxToRem(1), pxToRem(4 + 34 * maxVisibleSuggestions), pxToRem(2), pxToRem(34), pxToRem(8), pxToRem(13), TYPOGRAPHY.fontStyles['400'], stepToRem(-1), pxToRem(18));
export var Autocomplete = function Autocomplete(_ref) {
  var _classNames;

  var className = _ref.className,
      defaultItems = _ref.items,
      label = _ref.label,
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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(defaultItems),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = useState(props.defaultValue),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(-1),
      selectedSuggestionIndex = _useState3[0],
      setSelectedSuggestionIndex = _useState3[1];

  var _useState4 = useState(false),
      showSuggestions = _useState4[0],
      setShowSuggestions = _useState4[1];

  var inputEl = useRef(null);
  var suggestionsEl = useRef(null);
  var showNoResultMessage = isFunction(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items: items,
    value: value
  }) : shouldShowNoResultMessage;
  useEffect(function () {
    updateSuggestions();
  }, [value]);
  useEffect(function () {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  var handleChange = function handleChange(e) {
    setShowSuggestions(!isEmpty(e.target.value));
    setValue(e.target.value);
    onChange(e);
  };

  var handleBlur = function handleBlur(e) {
    onBlur(e);
    setTimeout(function () {
      setShowSuggestions(false);
    }, 200);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (showSuggestions) {
      if (e.key === 'Escape') setShowSuggestions(false);

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevSelectedItem();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextSelectedItem();
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        var selectedValue = items[selectedSuggestionIndex];
        handleClickItem(selectedValue);
        setShowSuggestions(false);
      }
    }

    onKeyDown(e);
  };

  var handleClickItem = function handleClickItem(value) {
    if (!value) return;
    var selectedValue = value[label] || value;
    inputEl.current.value = selectedValue;
    inputEl.current.focus();
    onSelect(value);
    setValue(selectedValue);
    setShowSuggestions(false);
  };

  var updateSuggestions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var search, newItems;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = ("" + value).toLowerCase();

              if (!updateSuggestionsStrategy) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return updateSuggestionsStrategy({
                items: items,
                value: value
              });

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = defaultItems.filter(function (item) {
                if (typeof item === 'string') {
                  return item.toLowerCase().includes(search) && item !== value;
                }

                return item[label].toLowerCase().includes(search) && item[label] !== value;
              });

            case 8:
              newItems = _context.t0;
              setItems(newItems);
              resetSelectedItem();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSuggestions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var prevSelectedItem = function prevSelectedItem() {
    var newIndex = selectedSuggestionIndex - 1;
    setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex);
  };

  var nextSelectedItem = function nextSelectedItem() {
    var newIndex = selectedSuggestionIndex + 1;
    var itemsLength = items.length - 1;
    setSelectedSuggestionIndex(newIndex >= itemsLength ? itemsLength : newIndex);
  };

  var resetSelectedItem = function resetSelectedItem() {
    return setSelectedSuggestionIndex(-1);
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    className: classNames('k-Form-Autocomplete', className, (_classNames = {}, _classNames["k-Form-Autocomplete--hasIcon-" + iconPosition] = !!icon, _classNames['k-Form-Autocomplete--disabled'] = props.disabled, _classNames['k-Form-Autocomplete--error'] = error, _classNames))
  }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
    ref: inputEl,
    type: "text",
    role: "combobox",
    autoComplete: "off",
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    "aria-owns": props.name + "-results",
    "aria-expanded": showSuggestions ? items.length > 0 : null,
    "aria-autocomplete": "both",
    "aria-activedescendant": items[selectedSuggestionIndex] ? slugify(items[selectedSuggestionIndex] + "-" + selectedSuggestionIndex) : '',
    className: "k-Form-Autocomplete__input"
  })), isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader, {
    className: "k-Form-Autocomplete__loader",
    color: COLORS.font2
  }), /*#__PURE__*/React.createElement(VisuallyHidden, {
    lang: "en"
  }, "loading")), icon && /*#__PURE__*/React.createElement("span", {
    className: "k-Form-Autocomplete__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.cloneElement(icon, {
    width: 15,
    height: 15
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/React.createElement(StyledSuggestionsList, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': 1
    },
    className: "k-Form-Autocomplete__suggestions"
  }, /*#__PURE__*/React.createElement("li", {
    className: "k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult",
    role: "option",
    tabIndex: "-1"
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledSuggestionsList, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: item + index,
      id: slugify(item + "-" + index),
      onClick: function onClick() {
        return handleClickItem(item);
      },
      role: "option",
      "aria-selected": selectedSuggestionIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, item[label] || item);
  })), /*#__PURE__*/React.createElement(VisuallyHidden, {
    lang: "en",
    "aria-live": "assertive"
  }, items.length, " results are available.")));
};
Autocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
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