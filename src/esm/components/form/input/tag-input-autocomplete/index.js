import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import slugify from 'slugify';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { TagInput, StyledTagInputWrapper } from '../tag-input';
import { StyledAutocompleteSuggestions } from '../autocomplete';
export const TagInputAutocomplete = _ref => {
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
  const inputEl = useRef(null);
  const suggestionsEl = useRef(null);
  const [itemsList, setItemsList] = useState(Array.from(itemsListFromProps || initialItemsList));
  const [lastRemoved, setLastRemoved] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(suggestions);

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

  useEffect(() => {
    if (!showSuggestionsOnFocus) {
      setShowSuggestions(false);
    }

    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  useEffect(() => {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);
  useEffect(() => {
    updateSuggestions();

    if (!showSuggestionsOnFocus) {
      setShowSuggestions(inputValue !== '');
    }
  }, [inputValue]);
  useEffect(() => {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  const resetSelectedSuggestion = () => setSelectedSuggestionIndex(-1);

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
    "aria-activedescendant": suggestions[selectedSuggestionIndex] ? slugify(suggestionsList[selectedSuggestionIndex] + "-" + selectedSuggestionIndex) : ''
  })), itemsList.map((item, index) => {
    const itemValue = (item == null ? void 0 : item.value) || item;
    const itemDisabled = (item == null ? void 0 : item.disabled) || false;
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
      onClick: () => removeValueFromList(item)
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "Retirer ", itemValue, " de la liste."), /*#__PURE__*/React.createElement(CrossIcon, {
      color: "currentColor"
    })));
  })), showSuggestions && suggestionsList.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledAutocompleteSuggestions, {
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
  }, itemsList.map((item, index) => {
    const itemValue = (item == null ? void 0 : item.value) || item;
    return /*#__PURE__*/React.createElement("li", {
      key: "visuallyHidden-" + (itemValue + index)
    }, itemValue);
  })));
};
TagInputAutocomplete.defaultProps = { ...TagInput.defaultProps,
  suggestions: [],
  onKeyDown: () => {},
  onBlur: () => {},
  suggestionsNumberA11yMessage: number => {
    return number + " suggestions.";
  },
  showSuggestionsOnFocus: true
};
TagInputAutocomplete.propTypes = { ...TagInput.propTypes,
  suggestions: PropTypes.array,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  suggestionsNumberA11yMessage: PropTypes.func,
  showSuggestionsOnFocus: PropTypes.bool,
  inputLabel: PropTypes.string
};