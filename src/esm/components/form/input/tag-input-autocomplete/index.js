import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import slugify from 'slugify';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { checkDeprecatedSizes } from '../../../../helpers/utils/deprecated';
import { TagInput, StyledTagInputWrapper } from '../tag-input';
import { StyledSuggestionsList } from '../autocomplete';
export var TagInputAutocomplete = function TagInputAutocomplete(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      className = _ref.className,
      id = _ref.id,
      addEventKeys = _ref.addEventKeys,
      removeEventKeys = _ref.removeEventKeys,
      itemsListFromProps = _ref.itemsList,
      initialItemsList = _ref.initialItemsList,
      helpMessage = _ref.helpMessage,
      disabled = _ref.disabled,
      size = _ref.size,
      suggestions = _ref.suggestions,
      onKeyDown = _ref.onKeyDown,
      onBlur = _ref.onBlur,
      suggestionsNumberA11yMessage = _ref.suggestionsNumberA11yMessage;
  checkDeprecatedSizes(size);
  var inputEl = useRef(null);
  var suggestionsEl = useRef(null);

  var _useState = useState(Array.from(itemsListFromProps || initialItemsList)),
      itemsList = _useState[0],
      setItemsList = _useState[1];

  var _useState2 = useState(null),
      lastRemoved = _useState2[0],
      setLastRemoved = _useState2[1];

  var _useState3 = useState(''),
      inputValue = _useState3[0],
      setInputValue = _useState3[1];

  var _useState4 = useState(-1),
      selectedSuggestionIndex = _useState4[0],
      setSelectedSuggestionIndex = _useState4[1];

  var _useState5 = useState(false),
      showSuggestions = _useState5[0],
      setShowSuggestions = _useState5[1];

  var _useState6 = useState(suggestions),
      suggestionsList = _useState6[0],
      setSuggestionsList = _useState6[1];

  var getSuggestionText = function getSuggestionText(suggestion) {
    return suggestion.searchableString || suggestion;
  };

  var focusInputEl = function focusInputEl() {
    var _inputEl$current;

    return !disabled && (inputEl == null ? void 0 : (_inputEl$current = inputEl.current) == null ? void 0 : _inputEl$current.focus());
  };

  var addValueToList = function addValueToList(value) {
    var newList = [].concat(itemsList, [value]);
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  var removeLastValueFromList = function removeLastValueFromList() {
    var lastItem = itemsList[itemsList.length - 1];
    if (!lastItem) return;
    if (lastItem.disabled) return;
    setLastRemoved(lastItem);
    var newList = Array.from(itemsList.slice(0, -1));
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  var removeValueFromList = function removeValueFromList(item) {
    var valueToRemove = (item == null ? void 0 : item.value) || item;
    setLastRemoved(valueToRemove);
    var newList = itemsList.filter(function (item) {
      var itemValue = (item == null ? void 0 : item.value) || item;
      return itemValue !== valueToRemove;
    });
    itemsListFromProps ? onChange(Array.from(newList)) : setItemsList(newList);
  };

  var undoRemove = function undoRemove() {
    lastRemoved && addValueToList(lastRemoved);
    setLastRemoved(null);
  };

  var handleInputKeydown = function handleInputKeydown(event) {
    // Suggestions key events
    if (showSuggestions) {
      if (event.key === 'Escape') setShowSuggestions(false);

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        var newIndex = selectedSuggestionIndex - 1;
        setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();

        var _newIndex = selectedSuggestionIndex + 1;

        var itemsLength = suggestionsList.length - 1;
        setSelectedSuggestionIndex(_newIndex >= itemsLength ? itemsLength : _newIndex);
      }
    } // Add value to list


    if (addEventKeys.includes(event.key)) {
      var _inputEl$current2;

      event.preventDefault(); // If a suggestion is selected through keyboard nav

      if (selectedSuggestionIndex > -1) {
        var selectedValue = suggestionsList[selectedSuggestionIndex];
        return handleSelectSuggestion(selectedValue)();
      }

      var value = inputEl == null ? void 0 : (_inputEl$current2 = inputEl.current) == null ? void 0 : _inputEl$current2.innerText.trim();
      if (value.length === 0) return;
      if (itemsList.includes(value)) return;
      return handleAddItem(value);
    } // Remove value from list


    if (removeEventKeys.includes(event.key) && event.target.innerText.length === 0) {
      event.preventDefault();
      removeLastValueFromList();
    } // Undo remove


    if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
      undoRemove();
    } // Change input size


    if (event.key.length === 1 || event.key === 'Backspace') {
      event.target.size = event.target.innerText.length + 1;
    }

    onKeyDown(event);
  };

  var handleAddItem = function handleAddItem(value) {
    addValueToList(value);
    focusInputEl();
    inputEl.current.innerText = '';
    setInputValue('');
  };

  var updateSuggestions = function updateSuggestions() {
    var search = ("" + inputValue).toLowerCase();
    var newSuggestions = suggestions.filter(function (item) {
      var suggestionText = getSuggestionText(item);
      return suggestionText.toLowerCase().startsWith(search) && suggestionText !== inputValue && !itemsList.includes(suggestionText);
    });
    setSuggestionsList(newSuggestions);
    resetSelectedSuggestion();
  };

  var handleInputChange = function handleInputChange(event) {
    var _event$target;

    setInputValue(((_event$target = event.target) == null ? void 0 : _event$target.innerText) || '');
  };

  var handleInputBlur = function handleInputBlur(e) {
    // check if focus stays in the component
    var ancestor = e.target.closest('.k-Form-TagInput');
    if (ancestor.matches(':focus-within')) return;
    setTimeout(function () {
      setShowSuggestions(false);
    }, 100);
    onBlur(e);
  };

  var handleSelectSuggestion = function handleSelectSuggestion(value) {
    return function () {
      if (!value) return;
      var suggestionText = getSuggestionText(value);
      handleAddItem(suggestionText);
      setShowSuggestions(false);
    };
  };

  useEffect(function () {
    setShowSuggestions(false);

    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  useEffect(function () {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);
  useEffect(function () {
    updateSuggestions();
    setShowSuggestions(inputValue !== '');
  }, [inputValue]);
  useEffect(function () {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  var resetSelectedSuggestion = function resetSelectedSuggestion() {
    return setSelectedSuggestionIndex(-1);
  };

  return /*#__PURE__*/React.createElement(StyledTagInputWrapper, {
    className: classNames('k-Form-TagInput', className, "k-Form-TagInput--" + size, {
      'k-Form-TagInput--disabled': disabled
    }),
    onClick: focusInputEl
  }, /*#__PURE__*/React.createElement("p", {
    className: "k-u-a11y-visuallyHidden",
    id: id + "-legend"
  }, helpMessage), /*#__PURE__*/React.createElement("ul", {
    className: "k-Form-TagInput__list"
  }, !disabled && /*#__PURE__*/React.createElement("li", {
    className: "k-Form-TagInput__item k-Form-TagInput__inputItem"
  }, /*#__PURE__*/React.createElement("span", {
    ref: inputEl,
    id: id,
    contentEditable: true,
    role: "textbox",
    "aria-describedby": id + "-legend",
    "aria-placeholder": placeholder,
    onKeyDown: handleInputKeydown,
    className: "k-Form-TagInput__input",
    onInput: handleInputChange,
    onBlur: handleInputBlur,
    "aria-owns": id + "-results",
    "aria-expanded": showSuggestions ? suggestionsList.length > 0 : null,
    "aria-autocomplete": "both",
    "aria-activedescendant": suggestions[selectedSuggestionIndex] ? slugify(suggestionsList[selectedSuggestionIndex] + "-" + selectedSuggestionIndex) : ''
  })), itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    var itemDisabled = (item == null ? void 0 : item.disabled) || false;
    return /*#__PURE__*/React.createElement("li", {
      key: itemValue + index,
      className: classNames('k-Form-TagInput__item k-Form-TagInput__tagItem', {
        'k-Form-TagInput__tagItem--disabled': itemDisabled
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-Form-TagInput__tag"
    }, itemValue, itemDisabled && /*#__PURE__*/React.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "\xC9l\xE9ment d\xE9sactiv\xE9.")), /*#__PURE__*/React.createElement("button", {
      className: "k-Form-TagInput__button",
      type: "button",
      disabled: itemDisabled || disabled,
      onClick: function onClick() {
        return removeValueFromList(item);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "Retirer ", itemValue, " de la liste."), /*#__PURE__*/React.createElement(CrossIcon, {
      color: "currentColor"
    })));
  })), showSuggestions && suggestionsList.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledSuggestionsList, {
    ref: suggestionsEl,
    id: id + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': suggestionsList.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, suggestionsList.map(function (suggestion, index) {
    var suggestionText = getSuggestionText(suggestion);
    return /*#__PURE__*/React.createElement("li", {
      key: suggestionText + index,
      id: slugify(suggestionText + "-" + index),
      onClick: handleSelectSuggestion(suggestion),
      role: "option",
      "aria-selected": selectedSuggestionIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, suggestion.displayNode || suggestionText);
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, "$", suggestionsNumberA11yMessage(suggestionsList.length))), /*#__PURE__*/React.createElement("ul", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "additions removals"
  }, itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    return /*#__PURE__*/React.createElement("li", {
      key: "visuallyHidden-" + (itemValue + index)
    }, itemValue);
  })));
};
TagInputAutocomplete.defaultProps = _extends({}, TagInput.defaultProps, {
  suggestions: [],
  onKeyDown: function onKeyDown() {},
  onBlur: function onBlur() {},
  suggestionsNumberA11yMessage: function suggestionsNumberA11yMessage(number) {
    return number + " suggestions.";
  }
});
TagInputAutocomplete.propTypes = _extends({}, TagInput.propTypes, {
  suggestions: PropTypes.array,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  suggestionsNumberA11yMessage: PropTypes.func
});