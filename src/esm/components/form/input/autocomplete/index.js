import _extends from "@babel/runtime/helpers/extends";
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
import { TextInput } from '../../../form/input/text-input';
export const maxVisibleSuggestions = 3;
const Wrapper = styled.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "sc-1bpe1y1-0"
})(["position:relative;.k-Form-Autocomplete__input{width:100%;}"]);
export const StyledAutocompleteSuggestions = styled.ul.withConfig({
  displayName: "autocomplete__StyledAutocompleteSuggestions",
  componentId: "sc-1bpe1y1-1"
})(["box-sizing:border-box;position:absolute;top:calc(100% + ", ");left:", ";right:", ";display:flex;flex-direction:column;gap:", ";overflow-y:auto;margin:0;padding:", ";background:var(--color-grey-000);border:var(--border-width) solid var(--color-grey-400);border-radius:var(--border-radius-m);list-style:none;max-height:calc( ", " + (min(2,(var(--Autocomplete-suggestions) - 1)) * ", ") );.k-Form-Autocomplete__suggestion__item{box-sizing:border-box;height:", ";padding:", " ", ";border-radius:var(--border-radius-s);", ";font-size:", ";line-height:", ";color:var(--color-grey-900);&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color var(--transition);:hover,:focus,:active{background-color:var(--color-grey-200);}&[aria-selected='true']{background-color:var(--color-grey-300);}}}"], pxToRem(5), pxToRem(-1), pxToRem(-1), pxToRem(2), pxToRem(1), pxToRem(4 + 34 * maxVisibleSuggestions), pxToRem(2), pxToRem(34), pxToRem(8), pxToRem(13), TYPOGRAPHY.fontStyles['400'], stepToRem(-1), pxToRem(18));
export const Autocomplete = _ref => {
  let {
    className,
    items: defaultItems,
    label,
    onChange,
    onBlur,
    onKeyDown,
    onSelect,
    icon,
    updateSuggestionsStrategy,
    isLoading,
    noResultMessage,
    shouldShowNoResultMessage,
    ...props
  } = _ref;
  const [items, setItems] = useState(defaultItems);
  const [value, setValue] = useState(props.defaultValue);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputEl = useRef(null);
  const suggestionsEl = useRef(null);
  const showNoResultMessage = isFunction(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items,
    value
  }) : shouldShowNoResultMessage;
  useEffect(() => {
    updateSuggestions();
  }, [value]);
  useEffect(() => {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  const handleChange = e => {
    setShowSuggestions(!isEmpty(e.target.value));
    setValue(e.target.value);
    onChange(e);
  };

  const handleBlur = e => {
    onBlur(e);
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  const handleKeyDown = e => {
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
        const selectedValue = items[selectedSuggestionIndex];
        handleClickItem(selectedValue);
        setShowSuggestions(false);
      }
    }

    onKeyDown(e);
  };

  const handleClickItem = value => {
    if (!value) return;
    const selectedValue = value[label] || value;
    inputEl.current.value = selectedValue;
    inputEl.current.focus();
    onSelect(value);
    setValue(selectedValue);
    setShowSuggestions(false);
  };

  const updateSuggestions = async () => {
    const search = ("" + value).toLowerCase();
    const newItems = updateSuggestionsStrategy ? await updateSuggestionsStrategy({
      items: items,
      value
    }) : defaultItems.filter(item => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(search) && item !== value;
      }

      return item[label].toLowerCase().includes(search) && item[label] !== value;
    });
    setItems(newItems);
    resetSelectedItem();
  };

  const prevSelectedItem = () => {
    const newIndex = selectedSuggestionIndex - 1;
    setSelectedSuggestionIndex(newIndex < 0 ? 0 : newIndex);
  };

  const nextSelectedItem = () => {
    const newIndex = selectedSuggestionIndex + 1;
    const itemsLength = items.length - 1;
    setSelectedSuggestionIndex(newIndex >= itemsLength ? itemsLength : newIndex);
  };

  const resetSelectedItem = () => setSelectedSuggestionIndex(-1);

  return /*#__PURE__*/React.createElement(Wrapper, {
    className: classNames('k-Form-Autocomplete', className, {
      'k-Form-Autocomplete--disabled': props.disabled,
      'k-Form-Autocomplete--error': props.error
    })
  }, /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
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
    className: "k-Form-Autocomplete__input",
    has: isLoading || !!icon ? 'icon' : null,
    icon: isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader, {
      className: "k-Form-Autocomplete__loader",
      color: COLORS.font2
    }), /*#__PURE__*/React.createElement(VisuallyHidden, {
      lang: "en"
    }, "loading")) : !!icon ? /*#__PURE__*/React.createElement("span", {
      className: "k-Form-Autocomplete__icon",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.cloneElement(icon, {
      width: 15,
      height: 15
    })) : null
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/React.createElement(StyledAutocompleteSuggestions, {
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
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledAutocompleteSuggestions, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: item + index,
    id: slugify(item + "-" + index),
    onClick: () => handleClickItem(item),
    role: "option",
    "aria-selected": selectedSuggestionIndex === index,
    tabIndex: "-1",
    className: "k-Form-Autocomplete__suggestion__item"
  }, item[label] || item))), /*#__PURE__*/React.createElement(VisuallyHidden, {
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
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  isLoading: false
};