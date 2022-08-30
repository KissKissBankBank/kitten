"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.maxVisibleSuggestions = exports.StyledAutocompleteSuggestions = exports.Autocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _slugify = _interopRequireDefault(require("slugify"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _loader = require("../../../graphics/animations/loader");

var _textInput = require("../text-input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const maxVisibleSuggestions = 3;
exports.maxVisibleSuggestions = maxVisibleSuggestions;

const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "sc-1bpe1y1-0"
})(["position:relative;.k-Form-Autocomplete__input{width:100%;}"]);

const StyledAutocompleteSuggestions = _styledComponents.default.ul.withConfig({
  displayName: "autocomplete__StyledAutocompleteSuggestions",
  componentId: "sc-1bpe1y1-1"
})(["box-sizing:border-box;position:absolute;top:calc(100% + ", ");left:", ";right:", ";display:flex;flex-direction:column;gap:", ";overflow-y:auto;margin:0;padding:", ";background:var(--color-grey-000);border:var(--border-width) solid var(--color-grey-400);border-radius:var(--border-radius-m);list-style:none;max-height:calc( ", " + (min(2,(var(--Autocomplete-suggestions) - 1)) * ", ") );.k-Form-Autocomplete__suggestion__item{box-sizing:border-box;height:", ";padding:", " ", ";border-radius:var(--border-radius-s);", ";font-size:", ";line-height:", ";color:var(--color-grey-900);&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color var(--transition);:hover,:focus,:active{background-color:var(--color-grey-200);}&[aria-selected='true']{background-color:var(--color-grey-300);}}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(4 + 34 * maxVisibleSuggestions), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(34), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(13), _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(18));

exports.StyledAutocompleteSuggestions = StyledAutocompleteSuggestions;

const Autocomplete = _ref => {
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
    controlled,
    ...props
  } = _ref;
  const [items, setItems] = (0, _react.useState)(defaultItems);
  const [value, setValue] = (0, _react.useState)(props.defaultValue);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, _react.useState)(-1);
  const [showSuggestions, setShowSuggestions] = (0, _react.useState)(false);
  const inputEl = (0, _react.useRef)(null);
  const suggestionsEl = (0, _react.useRef)(null);
  const showNoResultMessage = (0, _isFunction.default)(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items,
    value
  }) : shouldShowNoResultMessage;
  (0, _react.useEffect)(() => {
    if (!controlled) {
      updateSuggestions();
    }
  }, [value]);
  (0, _react.useEffect)(() => {
    if (controlled) {
      setItems(defaultItems);
      resetSelectedItem();
    }
  }, [controlled, defaultItems]);
  (0, _react.useEffect)(() => {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  const handleChange = e => {
    setShowSuggestions(!(0, _isEmpty.default)(e.target.value));
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

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _classnames.default)('k-Form-Autocomplete', className, {
      'k-Form-Autocomplete--disabled': props.disabled,
      'k-Form-Autocomplete--error': props.error
    })
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, props, {
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
    "aria-activedescendant": items[selectedSuggestionIndex] ? (0, _slugify.default)(items[selectedSuggestionIndex] + "-" + selectedSuggestionIndex) : '',
    className: "k-Form-Autocomplete__input",
    has: isLoading || !!icon ? 'icon' : null,
    icon: isLoading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_loader.Loader, {
      className: "k-Form-Autocomplete__loader",
      color: _colorsConfig.default.font2
    }), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
      lang: "en"
    }, "loading")) : !!icon ? /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Form-Autocomplete__icon",
      "aria-hidden": "true"
    }, /*#__PURE__*/_react.default.cloneElement(icon, {
      width: 15,
      height: 15
    })) : null
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/_react.default.createElement(StyledAutocompleteSuggestions, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': 1
    },
    className: "k-Form-Autocomplete__suggestions"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult",
    role: "option",
    tabIndex: "-1"
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledAutocompleteSuggestions, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: item + index,
    id: (0, _slugify.default)(item + "-" + index),
    onClick: () => handleClickItem(item),
    role: "option",
    "aria-selected": selectedSuggestionIndex === index,
    tabIndex: "-1",
    className: "k-Form-Autocomplete__suggestion__item"
  }, item[label] || item))), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
    lang: "en",
    "aria-live": "assertive"
  }, items.length, " results are available.")));
};

exports.Autocomplete = Autocomplete;
Autocomplete.propTypes = {
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])).isRequired,
  error: _propTypes.default.bool,
  icon: _propTypes.default.object,
  iconPosition: _propTypes.default.oneOf(['left', 'right']),
  updateSuggestionsStrategy: _propTypes.default.func,
  noResultMessage: _propTypes.default.string,
  shouldShowNoResultMessage: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  isLoading: _propTypes.default.bool,
  controlled: _propTypes.default.bool
};
Autocomplete.defaultProps = {
  error: false,
  shouldShowNoResultMessage: true,
  iconPosition: 'left',
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  isLoading: false,
  controlled: false
};