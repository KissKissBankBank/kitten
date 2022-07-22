"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagInputAutocomplete = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _slugify = _interopRequireDefault(require("slugify"));

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _tagInput = require("../tag-input");

var _autocomplete = require("../autocomplete");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TagInputAutocomplete = _ref => {
  let {
    placeholder,
    onChange,
    className,
    id,
    addEventKeys,
    removeEventKeys,
    itemsList: itemsListFromProps,
    initialItemsList,
    helpMessage,
    disabled,
    size,
    suggestions,
    onKeyDown,
    onBlur,
    suggestionsNumberA11yMessage,
    showSuggestionsOnFocus,
    inputLabel
  } = _ref;
  const inputEl = (0, _react.useRef)(null);
  const suggestionsEl = (0, _react.useRef)(null);
  const [itemsList, setItemsList] = (0, _react.useState)(Array.from(itemsListFromProps || initialItemsList));
  const [lastRemoved, setLastRemoved] = (0, _react.useState)(null);
  const [inputValue, setInputValue] = (0, _react.useState)('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, _react.useState)(-1);
  const [showSuggestions, setShowSuggestions] = (0, _react.useState)(false);
  const [suggestionsList, setSuggestionsList] = (0, _react.useState)(suggestions);

  const getSuggestionText = suggestion => suggestion.searchableString || suggestion;

  const focusInputEl = () => {
    var _inputEl$current;

    return !disabled && (inputEl == null ? void 0 : (_inputEl$current = inputEl.current) == null ? void 0 : _inputEl$current.focus());
  };

  const addValueToList = value => {
    const newList = [...itemsList, value];
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  const removeLastValueFromList = () => {
    const lastItem = itemsList[itemsList.length - 1];
    if (!lastItem) return;
    if (lastItem.disabled) return;
    setLastRemoved(lastItem);
    const newList = Array.from(itemsList.slice(0, -1));
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  const removeValueFromList = item => {
    const valueToRemove = (item == null ? void 0 : item.value) || item;
    setLastRemoved(valueToRemove);
    const newList = itemsList.filter(item => {
      const itemValue = (item == null ? void 0 : item.value) || item;
      return itemValue !== valueToRemove;
    });
    itemsListFromProps ? onChange(Array.from(newList)) : setItemsList(newList);
  };

  const undoRemove = () => {
    lastRemoved && addValueToList(lastRemoved);
    setLastRemoved(null);
  };

  const handleInputKeydown = event => {
    // Suggestions key events
    if (showSuggestions) {
      if (event.key === 'Escape') setShowSuggestions(false);

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        const newIndex = selectedSuggestionIndex - 1;
        setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const newIndex = selectedSuggestionIndex + 1;
        const itemsLength = suggestionsList.length - 1;
        setSelectedSuggestionIndex(newIndex >= itemsLength ? itemsLength : newIndex);
      }
    } // Add value to list


    if (addEventKeys.includes(event.key)) {
      var _inputEl$current2;

      event.preventDefault(); // If a suggestion is selected through keyboard nav

      if (selectedSuggestionIndex > -1) {
        const selectedValue = suggestionsList[selectedSuggestionIndex];
        return handleSelectSuggestion(selectedValue)();
      }

      const value = inputEl == null ? void 0 : (_inputEl$current2 = inputEl.current) == null ? void 0 : _inputEl$current2.innerText.trim();
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

  const handleAddItem = value => {
    addValueToList(value);
    focusInputEl();
    inputEl.current.innerText = '';
    setInputValue('');
  };

  const updateSuggestions = () => {
    const search = ("" + inputValue).toLowerCase();
    const newSuggestions = suggestions.filter(item => {
      const suggestionText = getSuggestionText(item);
      return suggestionText.toLowerCase().startsWith(search) && suggestionText !== inputValue && !itemsList.includes(suggestionText);
    });
    setSuggestionsList(newSuggestions);
    resetSelectedSuggestion();
  };

  const handleInputChange = event => {
    var _event$target;

    setInputValue(((_event$target = event.target) == null ? void 0 : _event$target.innerText) || '');
  };

  const handleInputFocus = () => {
    if (!showSuggestionsOnFocus) return;
    setShowSuggestions(true);
  };

  const handleInputBlur = e => {
    // check if focus stays in the component
    const ancestor = e.target.closest('.k-Form-TagInput');
    if (ancestor.matches(':focus-within')) return;
    setTimeout(() => {
      setShowSuggestions(false);
    }, 50);
    onBlur(e);
  };

  const handleSelectSuggestion = value => () => {
    if (!value) return;
    const suggestionText = getSuggestionText(value);
    handleAddItem(suggestionText);

    if (!showSuggestionsOnFocus) {
      setShowSuggestions(false);
    }
  };

  (0, _react.useEffect)(() => {
    if (!showSuggestionsOnFocus) {
      setShowSuggestions(false);
    }

    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  (0, _react.useEffect)(() => {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);
  (0, _react.useEffect)(() => {
    updateSuggestions();

    if (!showSuggestionsOnFocus) {
      setShowSuggestions(inputValue !== '');
    }
  }, [inputValue]);
  (0, _react.useEffect)(() => {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  const resetSelectedSuggestion = () => setSelectedSuggestionIndex(-1);

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
  })), itemsList.map((item, index) => {
    const itemValue = (item == null ? void 0 : item.value) || item;
    const itemDisabled = (item == null ? void 0 : item.disabled) || false;
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
      onClick: () => removeValueFromList(item)
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
  }, suggestionsList.map((suggestion, index) => {
    const suggestionText = getSuggestionText(suggestion);
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
  }, itemsList.map((item, index) => {
    const itemValue = (item == null ? void 0 : item.value) || item;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "visuallyHidden-" + (itemValue + index)
    }, itemValue);
  })));
};

exports.TagInputAutocomplete = TagInputAutocomplete;
TagInputAutocomplete.defaultProps = { ..._tagInput.TagInput.defaultProps,
  suggestions: [],
  onKeyDown: () => {},
  onBlur: () => {},
  suggestionsNumberA11yMessage: number => {
    return number + " suggestions.";
  },
  showSuggestionsOnFocus: true
};
TagInputAutocomplete.propTypes = { ..._tagInput.TagInput.propTypes,
  suggestions: _propTypes.default.array,
  onKeyDown: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  suggestionsNumberA11yMessage: _propTypes.default.func,
  showSuggestionsOnFocus: _propTypes.default.bool,
  inputLabel: _propTypes.default.string
};