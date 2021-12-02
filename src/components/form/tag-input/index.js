"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagInput = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _crossIcon = require("../../graphics/icons/cross-icon");

var _screenConfig = require("../../../constants/screen-config");

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "tag-input__StyledWrapper",
  componentId: "sc-1iqglpj-0"
})(["display:flex;align-items:center;font-size:", ";box-sizing:border-box;border-radius:0;width:100%;border:var(--border);transition:border 0.2s ease;padding:var(--tagInput-padding-vertical,", ") var(--tagInput-padding-horizontal,", ");&:focus-within{outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&:hover{border:var(--border-hover);}.k-Form-TagList__list{width:100%;display:flex;flex-wrap:wrap;gap:", ";list-style:none;padding:0;margin:0;}.k-Form-TagList__item{padding:0;margin:0;order:1;max-width:100%;overflow:hidden;}.k-Form-TagList__inputItem{flex:1 0 auto;order:2;&:last-of-type .k-Form-TagList__input:empty::before{content:attr(aria-placeholder);}}.k-Form-TagList__input{width:100%;height:100%;min-width:", ";display:block;padding:", " 0 ", ";box-sizing:border-box;line-height:1;", ";cursor:text;&:empty::before{color:", ";content:' ';}&:focus{outline-offset:", ";}}.k-Form-TagList__tagItem{display:flex;color:", ";background-color:", ";border-radius:var(--border-radius-xs);height:var(--tagInput-tag-height,", ");align-items:center;transition:color 0.2s ease,background-color 0.2s ease;cursor:default;&:hover{background-color:", ";}&.k-Form-TagList__tagItem--disabled{color:", ";background-color:", ";.k-Form-TagList__tag,.k-Form-TagList__button{cursor:not-allowed;}}}.k-Form-TagList__tag{", ";padding:0 ", " 0.15em ", ";line-height:1;}.k-Form-TagList__button{", ";border:0;background-color:transparent;color:inherit;padding:0 ", " 0 ", ";align-self:stretch;display:flex;align-items:center;cursor:pointer;outline-offset:", ";}&.k-Form-TagList--disabled{cursor:not-allowed;.k-Form-TagList__tagItem{color:", ";background-color:", ";}.k-Form-TagList__tag,.k-Form-TagList__button{cursor:not-allowed;}}&.k-Form-TagList--tiny{--tagInput-padding-vertical:", ";--tagInput-tag-height:", ";min-height:", ";}&.k-Form-TagList--regular{--tagInput-padding-vertical:", ";min-height:", ";}&.k-Form-TagList--big{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--huge{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--giant{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--orion{border-radius:var(--border-radius-s);}"], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(6), _typographyConfig.default.fontStyles.light, _colorsConfig.default.font2, (0, _typography.pxToRem)(2), _colorsConfig.default.text1, _colorsConfig.default.primary5, (0, _typography.pxToRem)(30), _colorsConfig.default.primary4, _colorsConfig.default.font2, _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.bold, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-2), _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(32), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(36), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0));

var TagInput = function TagInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      className = _ref.className,
      id = _ref.id,
      addEventKeys = _ref.addEventKeys,
      removeEventKeys = _ref.removeEventKeys,
      initialItemsList = _ref.initialItemsList,
      helpMessage = _ref.helpMessage,
      disabled = _ref.disabled,
      size = _ref.size,
      variant = _ref.variant;

  var _useState = (0, _react.useState)((0, _toConsumableArray2.default)(initialItemsList)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      itemsList = _useState2[0],
      setItemList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      lastRemoved = _useState4[0],
      setLastRemoved = _useState4[1];

  var inputEl = (0, _react.useRef)(null);

  var focusInputEl = function focusInputEl() {
    var _inputEl$current;

    return !disabled && (inputEl === null || inputEl === void 0 ? void 0 : (_inputEl$current = inputEl.current) === null || _inputEl$current === void 0 ? void 0 : _inputEl$current.focus());
  };

  var addValueToList = function addValueToList(value) {
    setItemList(function (currentList) {
      return [].concat((0, _toConsumableArray2.default)(currentList), [value]);
    });
  };

  var removeLastValueFromList = function removeLastValueFromList() {
    var lastItem = itemsList[itemsList.length - 1];

    if (lastItem.disabled) {
      return;
    }

    setLastRemoved(lastItem);
    setItemList(function (currentList) {
      return currentList.slice(0, -1);
    });
  };

  var removeValueFromList = function removeValueFromList(item) {
    var valueToRemove = (item === null || item === void 0 ? void 0 : item.value) || item;
    setLastRemoved(valueToRemove);
    setItemList(function (currentList) {
      return currentList.filter(function (item) {
        var itemValue = (item === null || item === void 0 ? void 0 : item.value) || item;
        return itemValue !== valueToRemove;
      });
    });
  };

  var undoRemove = function undoRemove() {
    lastRemoved && addValueToList(lastRemoved);
    setLastRemoved(null);
  };

  (0, _react.useEffect)(function () {
    onChange(itemsList);
  }, [itemsList]);

  var onKeyDown = function onKeyDown(event) {
    if (addEventKeys.includes(event.key)) {
      event.preventDefault();
      var val = event.target.innerText.trim();
      if (val.length === 0) return;
      if (itemsList.includes(val)) return;
      addValueToList(val);
      event.target.innerText = '';
    }

    if (removeEventKeys.includes(event.key) && event.target.innerText.length === 0) {
      event.preventDefault();
      removeLastValueFromList();
    }

    if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
      undoRemove();
    }

    if (event.key.length === 1 || event.key === 'Backspace') {
      event.target.size = event.target.innerText.length + 1;
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, {
    className: (0, _classnames.default)('k-Form-TagList', className, "k-Form-TagList--".concat(size), "k-Form-TagList--".concat(variant), {
      'k-Form-TagList--disabled': disabled
    }),
    onClick: focusInputEl
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "k-u-a11y-visuallyHidden",
    id: "".concat(id, "-legend")
  }, helpMessage), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-Form-TagList__list"
  }, !disabled && /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-TagList__item k-Form-TagList__inputItem"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: inputEl,
    id: id,
    contentEditable: true,
    role: "textbox",
    "aria-describedby": "".concat(id, "-legend"),
    "aria-placeholder": placeholder,
    onKeyDown: onKeyDown,
    className: "k-Form-TagList__input"
  })), itemsList.map(function (item, index) {
    var itemValue = (item === null || item === void 0 ? void 0 : item.value) || item;
    var itemDisabled = (item === null || item === void 0 ? void 0 : item.disabled) || false;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: itemValue + index,
      className: (0, _classnames.default)('k-Form-TagList__item k-Form-TagList__tagItem', {
        'k-Form-TagList__tagItem--disabled': itemDisabled
      })
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Form-TagList__tag"
    }, itemValue, itemDisabled && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "\xC9l\xE9ment d\xE9sactiv\xE9.")), /*#__PURE__*/_react.default.createElement("button", {
      className: "k-Form-TagList__button",
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
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "additions removals"
  }, itemsList.map(function (item, index) {
    var itemValue = (item === null || item === void 0 ? void 0 : item.value) || item;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "visuallyHidden-".concat(itemValue + index)
    }, itemValue);
  })));
};

exports.TagInput = TagInput;
TagInput.defaultProps = {
  initialItemsList: [],
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
  placeholder: '',
  onChange: function onChange() {},
  disabled: false,
  size: 'regular',
  variant: 'orion'
};
TagInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  initialItemsList: _propTypes.default.arrayOf(_propTypes.default.any),
  addEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  removeEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  helpMessage: _propTypes.default.node.isRequired,
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};