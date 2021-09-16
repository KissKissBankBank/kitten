"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isFunction = _interopRequireDefault(require("lodash/fp/isFunction"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _slugify = _interopRequireDefault(require("slugify"));

var _loader = require("../../atoms/loader");

var _classnames = _interopRequireDefault(require("classnames"));

var itemHeight = 38;
var maxItemsVisibled = 3;
var borderSize = 2;

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "autocomplete__Wrapper",
  componentId: "lfeqwe-0"
})(["display:flex;position:relative;.k-Form-Autocomplete__input{display:block;width:100%;height:", ";box-sizing:border-box;background:", ";border:", " solid ", ";padding:0 ", ";", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}&:focus{border-color:", ";outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}::-ms-clear{display:none;}}&.k-Form-Autocomplete--error .k-Form-Autocomplete__input{border-color:", ";color:", ";:focus{border-color:", ";color:", ";}}.k-Form-Autocomplete__loader{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;right:0;}.k-Form-Autocomplete__icon{display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;}.k-Form-Autocomplete__suggestions{position:absolute;top:", ";left:0;right:0;overflow-y:auto;margin:0;padding:0;background:", ";border:", " solid ", ";border-top:none;list-style:none;height:calc(", " * var(--Autocomplete-suggestions,1));max-height:", ";}.k-Form-Autocomplete__suggestion__item{padding:", " ", ";", ";font-size:", ";line-height:1.3;color:", ";&.k-Form-Autocomplete__suggestion__item--noresult{font-style:italic;}&:not(.k-Form-Autocomplete__suggestion__item--noresult){cursor:pointer;transition:background-color 0.2s;:hover,:focus,:active{background-color:", ";}:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-selected='true']{background-color:", ";}}}&.k-Form-Autocomplete--hasIcon-left{.k-Form-Autocomplete__input{padding-left:", ";}.k-Form-Autocomplete__icon{left:0;}}&.k-Form-Autocomplete--hasIcon-right{.k-Form-Autocomplete__input{padding-right:", ";}.k-Form-Autocomplete__loader{padding-right:", ";}.k-Form-Autocomplete__icon{right:0;}}&.k-Form-Autocomplete--disabled{.k-Form-Autocomplete__icon{& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}}}&.k-Form-Autocomplete--orion .k-Form-Autocomplete__input{border-radius:", ";}"], (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(borderSize), _colorsConfig.default.line1, (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.line2, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.line2, _colorsConfig.default.font1, (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(itemHeight), (0, _typography.pxToRem)(itemHeight * maxItemsVisibled), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.background3, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.line1, (0, _typography.pxToRem)(45), (0, _typography.pxToRem)(45), (0, _typography.pxToRem)(45), _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.pxToRem)(4));

var Autocomplete = function Autocomplete(_ref) {
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
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "items", "error", "onChange", "onBlur", "onKeyDown", "onSelect", "icon", "iconPosition", "updateSuggestionsStrategy", "isLoading", "noResultMessage", "shouldShowNoResultMessage", "variant"]);

  var _useState = (0, _react.useState)(defaultItems),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)(props.defaultValue),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(-1),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedItemIndex = _useState6[0],
      setSelectedItemIndex = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      showSuggestions = _useState8[0],
      setShowSuggestions = _useState8[1];

  var inputEl = (0, _react.useRef)(null);
  var suggestionsEl = (0, _react.useRef)(null);
  var showNoResultMessage = (0, _isFunction.default)(shouldShowNoResultMessage) ? shouldShowNoResultMessage({
    items: items,
    value: value
  }) : shouldShowNoResultMessage;
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: (0, _classnames.default)('k-Form-Autocomplete', className, "k-Form-Autocomplete--".concat(variant), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Form-Autocomplete--hasIcon-".concat(iconPosition), !!icon), (0, _defineProperty2.default)(_classNames, 'k-Form-Autocomplete--disabled', props.disabled), _classNames))
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, props, {
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
    "aria-activedescendant": items[selectedItemIndex] ? (0, _slugify.default)("".concat(items[selectedItemIndex], "-").concat(selectedItemIndex)) : '',
    className: "k-Form-Autocomplete__input"
  })), isLoading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_loader.Loader, {
    className: "k-Form-Autocomplete__loader",
    color: _colorsConfig.default.font2
  }), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
    lang: "en"
  }, "loading")), icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-Autocomplete__icon",
    "aria-hidden": "true"
  }, _react.default.cloneElement(icon, {
    width: 15,
    height: 15
  })), showSuggestions && items.length === 0 && noResultMessage && showNoResultMessage && /*#__PURE__*/_react.default.createElement("ul", {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': '1'
    },
    className: "k-Form-Autocomplete__suggestions"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-Autocomplete__suggestion__item k-Form-Autocomplete__suggestion__item--noresult",
    role: "option",
    tabIndex: "-1"
  }, noResultMessage)), showSuggestions && items.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    style: {
      '--Autocomplete-suggestions': items.length
    },
    className: "k-Form-Autocomplete__suggestions"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item + index,
      id: (0, _slugify.default)("".concat(item, "-").concat(index)),
      onClick: handleClickItem(item),
      role: "option",
      "aria-selected": selectedItemIndex === index,
      tabIndex: "-1",
      className: "k-Form-Autocomplete__suggestion__item"
    }, item);
  })), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, {
    lang: "en",
    "aria-live": "assertive"
  }, items.length, " results are available.")));
};

exports.Autocomplete = Autocomplete;
Autocomplete.propTypes = {
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
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
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
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
  variant: 'andromeda'
};