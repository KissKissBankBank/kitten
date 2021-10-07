import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import isObject from 'lodash/fp/isObject';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { CrossIcon } from '../../graphics/icons/cross-icon';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledWrapper = styled.div.withConfig({
  displayName: "tag-input__StyledWrapper",
  componentId: "sc-1iqglpj-0"
})(["display:flex;align-items:center;font-size:", ";box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0;width:100%;border-color:", ";padding:var(--tagInput-padding-vertical,", ") var(--tagInput-padding-horizontal,", ");.k-Form-TagList__list{width:100%;display:flex;flex-wrap:wrap;gap:", ";list-style:none;padding:0;margin:0;}.k-Form-TagList__item{padding:0;margin:0;order:1;max-width:100%;overflow:hidden;}.k-Form-TagList__inputItem{flex:1 0 auto;order:2;&:last-of-type .k-Form-TagList__input:empty::before{content:attr(aria-placeholder);}}.k-Form-TagList__input{width:100%;height:100%;min-width:", ";display:block;line-height:1;padding:", " 0 ", ";", ";cursor:text;&:empty::before{color:", ";content:' ';}:focus{outline-color:transparent;}}.k-Form-TagList__tagItem{display:flex;color:", ";background-color:", ";border-radius:", ";height:var(--tagInput-tag-height,", ");align-items:center;transition:color 0.2s ease,background-color 0.2s ease;cursor:default;&:hover{background-color:", ";}&.k-Form-TagList__tagItem--disabled{color:", ";background-color:", ";.k-Form-TagList__tag,.k-Form-TagList__button{cursor:not-allowed;}}}.k-Form-TagList__tag{", ";padding:0 ", " 0.15em ", ";line-height:1;}.k-Form-TagList__button{", ";border:0;background-color:transparent;color:inherit;padding:0 ", " 0 ", ";align-self:stretch;display:flex;align-items:center;cursor:pointer;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}&:focus-within{outline:", " solid ", ";outline-offset:", ";}&.k-Form-TagList--disabled{cursor:not-allowed;.k-Form-TagList__tagItem{color:", ";background-color:", ";}.k-Form-TagList__tag,.k-Form-TagList__button{cursor:not-allowed;}}&.k-Form-TagList--tiny{--tagInput-padding-vertical:", ";--tagInput-tag-height:", ";min-height:", ";}&.k-Form-TagList--regular{--tagInput-padding-vertical:", ";min-height:", ";}&.k-Form-TagList--big{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--huge{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--giant{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagList--orion{&.k-Form-TagList--tiny,&.k-Form-TagList--regular{border-radius:", ";}&.k-Form-TagList--big,&.k-Form-TagList--huge,&.k-Form-TagList--giant{border-radius:", ";@media (min-width:", "px){--tagInput-padding-horizontal:", ";border-radius:", ";font-size:", ";}}}"], stepToRem(-1), pxToRem(2), COLORS.line1, pxToRem(10), pxToRem(10), pxToRem(8), pxToRem(20), pxToRem(7), pxToRem(6), TYPOGRAPHY.fontStyles.light, COLORS.font2, COLORS.text1, COLORS.primary5, pxToRem(4), pxToRem(30), COLORS.primary4, COLORS.font2, COLORS.line1, TYPOGRAPHY.fontStyles.regular, pxToRem(2), pxToRem(10), TYPOGRAPHY.fontStyles.bold, pxToRem(12), pxToRem(10), COLORS.primary4, pxToRem(2), pxToRem(-2), COLORS.primary4, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.font2, COLORS.line1, pxToRem(4), pxToRem(24), pxToRem(40), pxToRem(5), pxToRem(50), pxToRem(60), pxToRem(32), ScreenConfig.M.min, pxToRem(70), stepToRem(0), pxToRem(70), pxToRem(36), ScreenConfig.M.min, pxToRem(80), stepToRem(0), pxToRem(70), pxToRem(40), ScreenConfig.M.min, pxToRem(90), stepToRem(0), pxToRem(4), pxToRem(6), ScreenConfig.M.min, pxToRem(30), pxToRem(8), stepToRem(0));
export var TagInput = function TagInput(_ref) {
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

  var _useState = useState(_toConsumableArray(initialItemsList)),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemList = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      lastRemoved = _useState4[0],
      setLastRemoved = _useState4[1];

  var inputEl = useRef(null);

  var focusInputEl = function focusInputEl() {
    var _inputEl$current;

    return !disabled && (inputEl === null || inputEl === void 0 ? void 0 : (_inputEl$current = inputEl.current) === null || _inputEl$current === void 0 ? void 0 : _inputEl$current.focus());
  };

  var addValueToList = function addValueToList(value) {
    setItemList(function (currentList) {
      return [].concat(_toConsumableArray(currentList), [value]);
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
        var itemValue = isObject(item) ? item === null || item === void 0 ? void 0 : item.value : item;
        return itemValue !== value;
      });
    });
  };

  var undoRemove = function undoRemove() {
    lastRemoved && addValueToList(lastRemoved);
    setLastRemoved(null);
  };

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(StyledWrapper, {
    className: classNames('k-Form-TagList', className, "k-Form-TagList--".concat(size), "k-Form-TagList--".concat(variant), {
      'k-Form-TagList--disabled': disabled
    }),
    onClick: focusInputEl
  }, /*#__PURE__*/React.createElement("p", {
    className: "k-u-a11y-visuallyHidden",
    id: "".concat(id, "-legend")
  }, helpMessage), /*#__PURE__*/React.createElement("ul", {
    className: "k-Form-TagList__list"
  }, !disabled && /*#__PURE__*/React.createElement("li", {
    className: "k-Form-TagList__item k-Form-TagList__inputItem"
  }, /*#__PURE__*/React.createElement("span", {
    ref: inputEl,
    id: id,
    contentEditable: true,
    role: "textbox",
    "aria-describedby": "".concat(id, "-legend"),
    "aria-placeholder": placeholder,
    onKeyDown: onKeyDown,
    className: "k-Form-TagList__input"
  })), itemsList.map(function (item) {
    var itemValue, itemDisabled;

    if (isObject(item)) {
      var _item$disabled;

      itemValue = item === null || item === void 0 ? void 0 : item.value;
      itemDisabled = (_item$disabled = item === null || item === void 0 ? void 0 : item.disabled) !== null && _item$disabled !== void 0 ? _item$disabled : false;
    } else {
      itemValue = item;
      itemDisabled = false;
    }

    return /*#__PURE__*/React.createElement("li", {
      key: itemValue,
      className: classNames('k-Form-TagList__item k-Form-TagList__tagItem', {
        'k-Form-TagList__tagItem--disabled': itemDisabled
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-Form-TagList__tag"
    }, itemValue), /*#__PURE__*/React.createElement("button", {
      className: "k-Form-TagList__button",
      type: "button",
      disabled: itemDisabled || disabled,
      onClick: function onClick() {
        return removeValueFromList(item);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, "Retirer ", itemValue, " de la liste."), /*#__PURE__*/React.createElement(CrossIcon, {
      color: "currentColor"
    })));
  })), /*#__PURE__*/React.createElement("ul", {
    className: "k-u-a11y-visuallyHidden",
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "additions removals"
  }, itemsList.map(function (item) {
    var itemValue = isObject(item) ? item === null || item === void 0 ? void 0 : item.value : item;
    return /*#__PURE__*/React.createElement("li", {
      key: "visuallyHidden-".concat(itemValue)
    }, itemValue);
  })));
};
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
  id: PropTypes.string.isRequired,
  initialItemsList: PropTypes.arrayOf(PropTypes.any),
  addEventKeys: PropTypes.arrayOf(PropTypes.string),
  removeEventKeys: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  helpMessage: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};