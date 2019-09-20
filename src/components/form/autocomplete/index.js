"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _visuallyHidden = require("../../accessibility/visually-hidden");

var _slugify = _interopRequireDefault(require("slugify"));

var itemHeight = 38;
var maxItemsVisibled = 3;
var borderSize = 2;

var Container = _styledComponents.default.div.withConfig({
  displayName: "autocomplete__Container",
  componentId: "lfeqwe-0"
})(["position:relative;"]);

var Input = _styledComponents.default.input.withConfig({
  displayName: "autocomplete__Input",
  componentId: "lfeqwe-1"
})(["display:block;width:100%;height:", ";box-sizing:border-box;background:", ";border:", " solid ", ";padding:0 ", ";outline:none;", ";font-size:", ";line-height:1.3;color:", ";transition:border-color 0.4s;::placeholder{color:", ";}::-moz-placeholder{color:", ";}:focus{border-color:", ";}::-ms-clear{display:none;}", ""], (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(borderSize), _colorsConfig.default.line1, (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.line2, function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["border-color:", ";color:", ";:focus{border-color:", ";color:", ";}"], _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.line2, _colorsConfig.default.font1);
});

var Suggestions = _styledComponents.default.ul.withConfig({
  displayName: "autocomplete__Suggestions",
  componentId: "lfeqwe-2"
})(["position:absolute;top:", ";left:0;right:0;overflow-y:auto;margin:0;padding:0;background:", ";border:", " solid ", ";border-top:none;list-style:none;", ""], (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, function (_ref2) {
  var itemsLength = _ref2.itemsLength;
  return itemsLength > 0 && (0, _styledComponents.css)(["height:", ";"], (0, _typography.pxToRem)(itemHeight * (itemsLength > 2 ? maxItemsVisibled : itemsLength)));
});

var Item = _styledComponents.default.li.withConfig({
  displayName: "autocomplete__Item",
  componentId: "lfeqwe-3"
})(["padding:", " ", ";", ";font-size:", ";line-height:1.3;color:", ";cursor:pointer;transition:background-color 0.2s;:hover,:focus,:active{background-color:", ";}:focus{outline:none;}&[aria-selected='true']{background-color:", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.background3, _colorsConfig.default.line1);

var Autocomplete = function Autocomplete(_ref3) {
  var defaultItems = _ref3.items,
      error = _ref3.error,
      onChange = _ref3.onChange,
      onBlur = _ref3.onBlur,
      onKeyDown = _ref3.onKeyDown,
      onSelect = _ref3.onSelect,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["items", "error", "onChange", "onBlur", "onKeyDown", "onSelect"]);

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
  (0, _react.useEffect)(function () {
    updateSuggestions();
    setShowSuggestions(!!value);
  }, [value]);

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
    var newItems = defaultItems.filter(function (item) {
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

  return _react.default.createElement(Container, null, _react.default.createElement(Input, (0, _extends2.default)({}, props, {
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
    "aria-activedescendant": items[selectedItemIndex] ? (0, _slugify.default)("".concat(items[selectedItemIndex], "-").concat(selectedItemIndex)) : ''
  })), showSuggestions && items.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Suggestions, {
    ref: suggestionsEl,
    id: "".concat(props.name, "-results"),
    role: "listbox",
    tabIndex: "-1",
    itemsLength: items.length
  }, items.map(function (item, index) {
    return _react.default.createElement(Item, {
      key: item + index,
      id: (0, _slugify.default)("".concat(item, "-").concat(index)),
      onClick: handleClickItem(item),
      role: "option",
      "aria-selected": selectedItemIndex === index,
      tabIndex: "-1"
    }, item);
  })), _react.default.createElement(_visuallyHidden.VisuallyHidden, {
    lang: "en",
    "aria-live": "assertive"
  }, items.length, " results are available.")));
};

exports.Autocomplete = Autocomplete;
Autocomplete.propTypes = {
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  error: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onSelect: _propTypes.default.func
};
Autocomplete.defaultProps = {
  error: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onKeyDown: function onKeyDown() {},
  onSelect: function onSelect() {}
};