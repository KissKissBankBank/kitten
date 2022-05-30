"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagInputAutocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _slugify = _interopRequireDefault(require("slugify"));

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _deprecated = require("../../../../helpers/utils/deprecated");

var _tagInput = require("../tag-input");

var _autocomplete = require("../autocomplete");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TagInputAutocomplete = function TagInputAutocomplete(_ref) {
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
      suggestionsNumberA11yMessage = _ref.suggestionsNumberA11yMessage,
      showSuggestionsOnFocus = _ref.showSuggestionsOnFocus,
      inputLabel = _ref.inputLabel;
  (0, _deprecated.checkDeprecatedSizes)(size);
  var inputEl = (0, _react.useRef)(null);
  var suggestionsEl = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(Array.from(itemsListFromProps || initialItemsList)),
      itemsList = _useState[0],
      setItemsList = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      lastRemoved = _useState2[0],
      setLastRemoved = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      inputValue = _useState3[0],
      setInputValue = _useState3[1];

  var _useState4 = (0, _react.useState)(-1),
      selectedSuggestionIndex = _useState4[0],
      setSelectedSuggestionIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      showSuggestions = _useState5[0],
      setShowSuggestions = _useState5[1];

  var _useState6 = (0, _react.useState)(suggestions),
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

  var handleInputFocus = function handleInputFocus() {
    if (!showSuggestionsOnFocus) return;
    setShowSuggestions(true);
  };

  var handleInputBlur = function handleInputBlur(e) {
    // check if focus stays in the component
    var ancestor = e.target.closest('.k-Form-TagInput');
    if (ancestor.matches(':focus-within')) return;
    setTimeout(function () {
      setShowSuggestions(false);
    }, 50);
    onBlur(e);
  };

  var handleSelectSuggestion = function handleSelectSuggestion(value) {
    return function () {
      if (!value) return;
      var suggestionText = getSuggestionText(value);
      handleAddItem(suggestionText);

      if (!showSuggestionsOnFocus) {
        setShowSuggestions(false);
      }
    };
  };

  (0, _react.useEffect)(function () {
    if (!showSuggestionsOnFocus) {
      setShowSuggestions(false);
    }

    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  (0, _react.useEffect)(function () {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);
  (0, _react.useEffect)(function () {
    updateSuggestions();

    if (!showSuggestionsOnFocus) {
      setShowSuggestions(inputValue !== '');
    }
  }, [inputValue]);
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(_tagInput.StyledTagInputWrapper, {
    className: (0, _classnames.default)('k-Form-TagInput', className, "k-Form-TagInput--" + size, {
      'k-Form-TagInput--disabled': disabled
    }),
    onClick: focusInputEl
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "k-u-a11y-visuallyHidden",
    id: id + "-legend"
  }, helpMessage), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-Form-TagInput__list"
  }, !disabled && /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-TagInput__item k-Form-TagInput__inputItem"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: inputEl,
    id: id,
    "aria-label": inputLabel,
    contentEditable: true,
    role: "textbox",
    "aria-describedby": id + "-legend",
    "aria-placeholder": placeholder,
    onKeyDown: handleInputKeydown,
    className: "k-Form-TagInput__input",
    onInput: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    "aria-owns": showSuggestions ? id + "-results" : null,
    "aria-expanded": showSuggestions ? suggestionsList.length > 0 : null,
    "aria-autocomplete": "both",
    "aria-activedescendant": suggestions[selectedSuggestionIndex] ? (0, _slugify.default)(suggestionsList[selectedSuggestionIndex] + "-" + selectedSuggestionIndex) : ''
  })), itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    var itemDisabled = (item == null ? void 0 : item.disabled) || false;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: itemValue + index,
      className: (0, _classnames.default)('k-Form-TagInput__item k-Form-TagInput__tagItem', {
        'k-Form-TagInput__tagItem--disabled': itemDisabled
      })
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Form-TagInput__tag"
    }, itemValue, itemDisabled && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "\xC9l\xE9ment d\xE9sactiv\xE9.")), /*#__PURE__*/_react.default.createElement("button", {
      className: "k-Form-TagInput__button",
      type: "button",
      disabled: itemDisabled || disabled,
      onClick: function onClick() {
        return removeValueFromList(item);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "Retirer ", itemValue, " de la liste."), /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
      color: "currentColor"
    })));
  })), showSuggestions && suggestionsList.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_autocomplete.StyledSuggestionsList, {
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
    return /*#__PURE__*/_react.default.createElement("li", {
      key: suggestionText + index,
      id: (0, _slugify.default)(suggestionText + "-" + index),
      onClick: handleSelectSuggestion(suggestion),
      role: "option",
      "aria-selected": selectedSuggestionIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, suggestion.displayNode || suggestionText);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, "$", suggestionsNumberA11yMessage(suggestionsList.length))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "additions removals"
  }, itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "visuallyHidden-" + (itemValue + index)
    }, itemValue);
  })));
};

exports.TagInputAutocomplete = TagInputAutocomplete;
TagInputAutocomplete.defaultProps = (0, _extends2.default)({}, _tagInput.TagInput.defaultProps, {
  suggestions: [],
  onKeyDown: function onKeyDown() {},
  onBlur: function onBlur() {},
  suggestionsNumberA11yMessage: function suggestionsNumberA11yMessage(number) {
    return number + " suggestions.";
  },
  showSuggestionsOnFocus: true
});
TagInputAutocomplete.propTypes = (0, _extends2.default)({}, _tagInput.TagInput.propTypes, {
  suggestions: _propTypes.default.array,
  onKeyDown: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  suggestionsNumberA11yMessage: _propTypes.default.func,
  showSuggestionsOnFocus: _propTypes.default.bool,
  inputLabel: _propTypes.default.string
});