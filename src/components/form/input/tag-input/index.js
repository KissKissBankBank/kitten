"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagInput = exports.StyledTagInputWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _screenConfig = require("../../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledTagInputWrapper = _styledComponents.default.div.withConfig({
  displayName: "tag-input__StyledTagInputWrapper",
  componentId: "sc-ehmcaj-0"
})(["position:relative;display:flex;align-items:center;font-size:", ";box-sizing:border-box;width:100%;border:var(--border);transition:border 0.2s ease;padding:var(--tagInput-padding-vertical,", ") var(--tagInput-padding-horizontal,", ");border-radius:var(--border-radius-s);&:focus-within{outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&:hover{border:var(--border-hover);}.k-Form-TagInput__list{width:100%;display:flex;flex-wrap:wrap;gap:", ";list-style:none;padding:0;margin:0;}.k-Form-TagInput__item{padding:0;margin:0;order:1;max-width:100%;overflow:hidden;}.k-Form-TagInput__inputItem{flex:1 0 auto;order:2;&:last-of-type .k-Form-TagInput__input:empty::before{content:attr(aria-placeholder);}}.k-Form-TagInput__input{width:100%;height:100%;min-width:", ";display:block;padding:", " 0 ", ";box-sizing:border-box;line-height:1;", ";cursor:text;&:empty::before{color:", ";content:' ';}&:focus{outline-offset:", ";}}.k-Form-TagInput__tagItem{display:flex;color:", ";background-color:", ";border-radius:var(--border-radius-s);height:var(--tagInput-tag-height,", ");align-items:center;transition:color 0.2s ease,background-color 0.2s ease;cursor:default;&:hover{background-color:", ";}&.k-Form-TagInput__tagItem--disabled{color:", ";background-color:", ";.k-Form-TagInput__tag,.k-Form-TagInput__button{cursor:not-allowed;}}}.k-Form-TagInput__tag{", ";padding:0 ", " 0.15em ", ";line-height:1;}.k-Form-TagInput__button{", ";border:0;background-color:transparent;color:inherit;padding:0 ", " 0 ", ";align-self:stretch;display:flex;align-items:center;cursor:pointer;outline-offset:", ";}&.k-Form-TagInput--disabled{cursor:not-allowed;.k-Form-TagInput__tagItem{color:", ";background-color:", ";}.k-Form-TagInput__tag,.k-Form-TagInput__button{cursor:not-allowed;}}&.k-Form-TagInput--small{--tagInput-padding-vertical:", ";--tagInput-padding-horizontal:", ";--tagInput-tag-height:", ";min-height:", ";}&.k-Form-TagInput--medium{min-height:", ";}&.k-Form-TagInput--large{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagInput--huge{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagInput--giant{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}"], (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(6), _typographyConfig.default.fontStyles['400'], _colorsConfig.default.font2, (0, _typography.pxToRem)(2), _colorsConfig.default.text1, _colorsConfig.default.primary5, (0, _typography.pxToRem)(30), _colorsConfig.default.primary4, _colorsConfig.default.font2, _colorsConfig.default.line1, _typographyConfig.default.fontStyles['500'], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['700'], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-2), _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(26), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(32), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(36), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0));

exports.StyledTagInputWrapper = StyledTagInputWrapper;

const TagInput = _ref => {
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
    size
  } = _ref;
  const [itemsList, setItemsList] = (0, _react.useState)(Array.from(itemsListFromProps || initialItemsList));
  const [lastRemoved, setLastRemoved] = (0, _react.useState)(null);
  const inputEl = (0, _react.useRef)(null);

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

    if (lastItem.disabled) {
      return;
    }

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

  (0, _react.useEffect)(() => {
    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  (0, _react.useEffect)(() => {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);

  const onKeyDown = event => {
    if (addEventKeys.includes(event.key)) {
      event.preventDefault();
      const val = event.target.innerText.trim();
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

  return /*#__PURE__*/_react.default.createElement(StyledTagInputWrapper, {
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
    contentEditable: true,
    role: "textbox",
    "aria-describedby": id + "-legend",
    "aria-placeholder": placeholder,
    onKeyDown: onKeyDown,
    className: "k-Form-TagInput__input"
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
  })), /*#__PURE__*/_react.default.createElement("ul", {
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

exports.TagInput = TagInput;
TagInput.defaultProps = {
  initialItemsList: [],
  itemsList: undefined,
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
  placeholder: '',
  onChange: () => {},
  disabled: false,
  size: 'medium'
};
TagInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  initialItemsList: _propTypes.default.arrayOf(_propTypes.default.any),
  itemsList: _propTypes.default.arrayOf(_propTypes.default.any),
  addEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  removeEventKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  helpMessage: _propTypes.default.node.isRequired,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge', 'giant'])
};