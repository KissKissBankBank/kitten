"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.maxVisibleSuggestions = exports.StyledSuggestionsList = exports.Autocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _slugify = _interopRequireDefault(require("slugify"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _loader = require("../../../graphics/animations/loader");

var _excluded = ["className", "items", "label", "error", "onChange", "onBlur", "onKeyDown", "onSelect", "icon", "iconPosition", "updateSuggestionsStrategy", "isLoading", "noResultMessage", "shouldShowNoResultMessage"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var maxVisibleSuggestions = 3;
exports.maxVisibleSuggestions = maxVisibleSuggestions;

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "sc-1bpe1y1-0"
})(["display:flex;position:relative;.k-Form-Autocomplete__input{display:block;width:100%;height:", ";box-sizing:border-box;border-radius:var(--border-radius-s);background:", ";border:var(--border-width) solid var(--color-grey-400);padding:0 ", ";", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}&:focus{border-color:var(--color-grey-500);outline:var(--outline-input);outline-offset:var(--outline-offset-input);}}&.k-Form-Autocomplete--error .k-Form-Autocomplete__input{border:var(--border-danger);color:", ";:focus{border-color:var(--color-grey-500);color:", ";}}.k-Form-Autocomplete__loader{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;right:0;}.k-Form-Autocomplete__icon{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;}&.k-Form-Autocomplete--hasIcon-left{.k-Form-Autocomplete__input{padding-left:", ";}.k-Form-Autocomplete__icon{left:0;}}&.k-Form-Autocomplete--hasIcon-right{.k-Form-Autocomplete__input{padding-right:", ";}.k-Form-Autocomplete__loader{padding-right:", ";}.k-Form-Autocomplete__icon{right:0;}}&.k-Form-Autocomplete--disabled{.k-Form-Autocomplete__input{border:var(--color-grey-300);background-color:var(--color-grey-200);color:var(--color-grey-600);}.k-Form-Autocomplete__icon{& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}}}"], (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.error3, _colorsConfig.default.font1, (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(45), (0, _typography.pxToRem)(45), (0, _typography.pxToRem)(45), _colorsConfig.default.font2, _colorsConfig.default.font2);

var StyledSuggestionsList = _styledComponents.default.ul.withConfig({
  displayName: "autocomplete__StyledSuggestionsList",
  componentId: "sc-1bpe1y1-1"
})(["box-sizing:border-box;position:absolute;top:calc(100% + ", ");left:", ";right:", ";display:flex;flex-direction:column;gap:", ";overflow-y:auto;margin:0;padding:", ";background:var(--color-grey-000);border:var(--border-width) solid var(--color-grey-400);border-radius:var(--border-radius-m);list-style:none;max-height:calc( ", " + (min(2,(var(--Autocomplete-suggestions) - 1)) * ", ") );.k-Form-Autocomplete__suggestion__item{box-sizing:border-box;height:", ";padding:", " ", ";border-radius:var(--border-radius-s);", ";font-size:", ";line-height:", ";color:var(--color-grey-900);&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color var(--transition);:hover,:focus,:active{background-color:var(--color-grey-200);}&[aria-selected='true']{background-color:var(--color-grey-300);}}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(4 + 34 * maxVisibleSuggestions), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(34), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(13), _typographyConfig.default.fontStyles['400'], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(18));

exports.StyledSuggestionsList = StyledSuggestionsList;

var Autocomplete = function Autocomplete(_ref) {
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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultItems),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = (0, _react.useState)(props.defaultValue),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(-1),
      selectedSuggestionIndex = _useState3[0],
      setSelectedSuggestionIndex = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      showSuggestions = _useState4[0],
      setShowSuggestions = _useState4[1];

  var inputEl = (0, _react.useRef)(null);
  var suggestionsEl = (0, _react.useRef)(null);
  var showNoResultMessage = (0, _isFunction.default)(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items: items,
    value: value
  }) : shouldShowNoResultMessage;
  (0, _react.useEffect)(function () {
    updateSuggestions();
  }, [value]);
  (0, _react.useEffect)(function () {
    var _suggestionsEl$curren, _suggestionsEl$curren2;

    suggestionsEl == null ? void 0 : (_suggestionsEl$curren = suggestionsEl.current) == null ? void 0 : (_suggestionsEl$curren2 = _suggestionsEl$curren.children[selectedSuggestionIndex]) == null ? void 0 : _suggestionsEl$curren2.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }, [selectedSuggestionIndex]);

  var handleChange = function handleChange(e) {
    setShowSuggestions(!(0, _isEmpty.default)(value));
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

  var updateSuggestions = function updateSuggestions() {
    var search = ("" + value).toLowerCase();
    var newItems = updateSuggestionsStrategy ? updateSuggestionsStrategy({
      items: items,
      value: value
    }) : defaultItems.filter(function (item) {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(search) && item !== value;
      }

      return item[label].toLowerCase().includes(search) && item[label] !== value;
    });
    setItems(newItems);
    resetSelectedItem();
  };

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

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _classnames.default)('k-Form-Autocomplete', className, (_classNames = {}, _classNames["k-Form-Autocomplete--hasIcon-" + iconPosition] = !!icon, _classNames['k-Form-Autocomplete--disabled'] = props.disabled, _classNames['k-Form-Autocomplete--error'] = error, _classNames))
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, props, {
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
    className: "k-Form-Autocomplete__input"
  })), isLoading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_loader.Loader, {
    className: "k-Form-Autocomplete__loader",
    color: _colorsConfig.default.font2
  }), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
    lang: "en"
  }, "loading")), icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-Autocomplete__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.cloneElement(icon, {
    width: 15,
    height: 15
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/_react.default.createElement(StyledSuggestionsList, {
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
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledSuggestionsList, {
    ref: suggestionsEl,
    id: props.name + "-results",
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item + index,
      id: (0, _slugify.default)(item + "-" + index),
      onClick: function onClick() {
        return handleClickItem(item);
      },
      role: "option",
      "aria-selected": selectedSuggestionIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, item[label] || item);
  })), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
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
  isLoading: _propTypes.default.bool
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