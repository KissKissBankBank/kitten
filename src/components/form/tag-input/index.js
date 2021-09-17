"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagInput = void 0;

require("core-js/modules/es.string.bold.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _crossIcon = require("../../../components/graphics/icons/cross-icon");

var _screenConfig = require("../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "tag-input__StyledWrapper",
  componentId: "sc-1iqglpj-0"
})(["display:flex;align-items:center;font-size:", ";box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0;width:100%;border-color:", ";padding:var(--tagInput-padding-vertical,", ") var(--tagInput-padding-horizontal,", ");.k-Form-TagList__list{width:100%;display:flex;flex-wrap:wrap;gap:", ";list-style:none;padding:0;margin:0;}.k-Form-TagList__item{padding:0;margin:0;order:1;max-width:100%;overflow:hidden;}.k-Form-TagList__inputItem{flex:1 0 auto;order:2;&:last-of-type .k-Form-TagList__input:empty::before{content:attr(aria-placeholder);}}.k-Form-TagList__input{width:100%;height:100%;min-width:", ";display:block;line-height:1;padding:", " 0 ", ";", ";cursor:text;&:empty::before{color:", ";content:' ';}:focus{outline-color:transparent;}}.k-Form-TagList__tagItem{display:flex;color:", ";background-color:", ";border-radius:", ";height:var(--tagInput-tag-height,", ");align-items:center;transition:color 0.2s ease,background-color 0.2s ease;cursor:default;&:hover{background-color:", ";}}.k-Form-TagList__tag{", ";padding:0 ", " 0.15em ", ";line-height:1;}.k-Form-TagList__button{", ";border:0;padding:0;background-color:transparent;color:inherit;padding:0 ", " 0 ", ";align-self:stretch;display:flex;align-items:center;cursor:pointer;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}&:focus-within{outline:", " solid ", ";outline-offset:", ";}&.k-Form-TagList--disabled{cursor:not-allowed;.k-Form-TagList__tagItem{color:", ";background-color:", ";}.k-Form-TagList__tag,.k-Form-TagList__button{cursor:not-allowed;}}&.k-Form-TagList--tiny{--tagInput-padding-vertical:", ";--tagInput-tag-height:", ";min-height:", ";}&.k-Form-TagList--regular{--tagInput-padding-vertical:", ";min-height:", ";}&.k-Form-TagList--big{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--huge{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--giant{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--orion{&.k-Form-TagList--tiny,&.k-Form-TagList--regular{border-radius:", ";}&.k-Form-TagList--big,&.k-Form-TagList--huge,&.k-Form-TagList--giant{border-radius:", ";@media (min-width:", "px){--tagInput-padding-horizontal:", ";border-radius:", ";font-size:", ";}}}"], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(6), _typographyConfig.default.fontStyles.light, _colorsConfig.default.font2, _colorsConfig.default.text1, _colorsConfig.default.primary5, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(30), _colorsConfig.default.primary4, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.bold, (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-2), _colorsConfig.default.primary4, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(32), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(36), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(8), (0, _typography.stepToRem)(0));

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

  var _useState = (0, _react.useState)([].concat(initialItemsList)),
      itemsList = _useState[0],
      setItemList = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      lastRemoved = _useState2[0],
      setLastRemoved = _useState2[1];

  var inputEl = (0, _react.useRef)(null);

  var focusInputEl = function focusInputEl() {
    var _inputEl$current;

    return !disabled && (inputEl == null ? void 0 : (_inputEl$current = inputEl.current) == null ? void 0 : _inputEl$current.focus());
  };

  var addValueToList = function addValueToList(value) {
    setItemList(function (currentList) {
      return [].concat(currentList, [value]);
    });
  };

  var removeLastValueFromList = function removeLastValueFromList() {
    setLastRemoved(itemsList[itemsList.length - 1]);
    setItemList(function (currentList) {
      return currentList.slice(0, -1);
    });
  };

  var removeValueFromList = function removeValueFromList(value) {
    setLastRemoved(value);
    setItemList(function (currentList) {
      return currentList.filter(function (item) {
        return item !== value;
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
    className: (0, _classnames.default)('k-Form-TagList', className, "k-Form-TagList--" + size, "k-Form-TagList--" + variant, {
      'k-Form-TagList--disabled': disabled
    }),
    onClick: focusInputEl
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "k-u-a11y-visuallyHidden",
    id: id + "-legend"
  }, helpMessage), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-Form-TagList__list"
  }, !disabled && /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-TagList__item k-Form-TagList__inputItem"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: inputEl,
    id: id,
    contentEditable: true,
    role: "textbox",
    "aria-describedby": id + "-legend",
    "aria-placeholder": placeholder,
    onKeyDown: onKeyDown,
    className: "k-Form-TagList__input"
  })), itemsList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item,
      className: "k-Form-TagList__item k-Form-TagList__tagItem"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Form-TagList__tag"
    }, item), /*#__PURE__*/_react.default.createElement("button", {
      className: "k-Form-TagList__button",
      type: "button",
      disabled: disabled,
      onClick: function onClick() {
        return removeValueFromList(item);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "Retirer ", item, " de la liste."), /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
      color: "currentColor"
    })));
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "additions removals"
  }, itemsList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "visuallyHidden-" + item
    }, item);
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
  variant: 'andromeda'
};
TagInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  initialItemsList: _propTypes.default.arrayOf(_propTypes.default.string),
  addEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  removeEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  helpMessage: _propTypes.default.node.isRequired,
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};