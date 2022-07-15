import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { ScreenConfig } from '../../../../constants/screen-config';
export var StyledTagInputWrapper = styled.div.withConfig({
  displayName: "tag-input__StyledTagInputWrapper",
  componentId: "sc-ehmcaj-0"
})(["position:relative;display:flex;align-items:center;font-size:", ";box-sizing:border-box;width:100%;border:var(--border);transition:border 0.2s ease;padding:var(--tagInput-padding-vertical,", ") var(--tagInput-padding-horizontal,", ");border-radius:var(--border-radius-s);&:focus-within{outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&:hover{border:var(--border-hover);}.k-Form-TagInput__list{width:100%;display:flex;flex-wrap:wrap;gap:", ";list-style:none;padding:0;margin:0;}.k-Form-TagInput__item{padding:0;margin:0;order:1;max-width:100%;overflow:hidden;}.k-Form-TagInput__inputItem{flex:1 0 auto;order:2;&:last-of-type .k-Form-TagInput__input:empty::before{content:attr(aria-placeholder);}}.k-Form-TagInput__input{width:100%;height:100%;min-width:", ";display:block;padding:", " 0 ", ";box-sizing:border-box;line-height:1;", ";cursor:text;&:empty::before{color:", ";content:' ';}&:focus{outline-offset:", ";}}.k-Form-TagInput__tagItem{display:flex;color:", ";background-color:", ";border-radius:var(--border-radius-s);height:var(--tagInput-tag-height,", ");align-items:center;transition:color 0.2s ease,background-color 0.2s ease;cursor:default;&:hover{background-color:", ";}&.k-Form-TagInput__tagItem--disabled{color:", ";background-color:", ";.k-Form-TagInput__tag,.k-Form-TagInput__button{cursor:not-allowed;}}}.k-Form-TagInput__tag{", ";padding:0 ", " 0.15em ", ";line-height:1;}.k-Form-TagInput__button{", ";border:0;background-color:transparent;color:inherit;padding:0 ", " 0 ", ";align-self:stretch;display:flex;align-items:center;cursor:pointer;outline-offset:", ";}&.k-Form-TagInput--disabled{cursor:not-allowed;.k-Form-TagInput__tagItem{color:", ";background-color:", ";}.k-Form-TagInput__tag,.k-Form-TagInput__button{cursor:not-allowed;}}&.k-Form-TagInput--small{--tagInput-padding-vertical:", ";--tagInput-padding-horizontal:", ";--tagInput-tag-height:", ";min-height:", ";}&.k-Form-TagInput--medium{min-height:", ";}&.k-Form-TagInput--large{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagInput--huge{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}&.k-Form-TagInput--giant{min-height:", ";--tagInput-tag-height:", ";@media (min-width:", "px){min-height:", ";font-size:", ";}}"], stepToRem(-1), pxToRem(10), pxToRem(10), pxToRem(8), pxToRem(20), pxToRem(7), pxToRem(6), TYPOGRAPHY.fontStyles['400'], COLORS.font2, pxToRem(2), COLORS.text1, COLORS.primary5, pxToRem(30), COLORS.primary4, COLORS.font2, COLORS.line1, TYPOGRAPHY.fontStyles['500'], pxToRem(2), pxToRem(10), TYPOGRAPHY.fontStyles['700'], pxToRem(12), pxToRem(10), pxToRem(-2), COLORS.font2, COLORS.line1, pxToRem(5), pxToRem(8), pxToRem(26), pxToRem(40), pxToRem(50), pxToRem(60), pxToRem(32), ScreenConfig.M.min, pxToRem(70), stepToRem(0), pxToRem(70), pxToRem(36), ScreenConfig.M.min, pxToRem(80), stepToRem(0), pxToRem(70), pxToRem(40), ScreenConfig.M.min, pxToRem(90), stepToRem(0));
export var TagInput = function TagInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      className = _ref.className,
      id = _ref.id,
      addEventKeys = _ref.addEventKeys,
      removeEventKeys = _ref.removeEventKeys,
      itemsListFromProps = _ref.itemsList,
      initialItemsList = _ref.initialItemsList,
      helpMessage = _ref.helpMessage,
      disabled = _ref.disabled,
      size = _ref.size;

  var _useState = useState(Array.from(itemsListFromProps || initialItemsList)),
      itemsList = _useState[0],
      setItemsList = _useState[1];

  var _useState2 = useState(null),
      lastRemoved = _useState2[0],
      setLastRemoved = _useState2[1];

  var inputEl = useRef(null);

  var focusInputEl = function focusInputEl() {
    var _inputEl$current;

    return !disabled && (inputEl == null ? void 0 : (_inputEl$current = inputEl.current) == null ? void 0 : _inputEl$current.focus());
  };

  var addValueToList = function addValueToList(value) {
    var newList = [].concat(itemsList, [value]);
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  var removeLastValueFromList = function removeLastValueFromList() {
    var lastItem = itemsList[itemsList.length - 1];

    if (lastItem.disabled) {
      return;
    }

    setLastRemoved(lastItem);
    var newList = Array.from(itemsList.slice(0, -1));
    itemsListFromProps ? onChange(newList) : setItemsList(newList);
  };

  var removeValueFromList = function removeValueFromList(item) {
    var valueToRemove = (item == null ? void 0 : item.value) || item;
    setLastRemoved(valueToRemove);
    var newList = itemsList.filter(function (item) {
      var itemValue = (item == null ? void 0 : item.value) || item;
      return itemValue !== valueToRemove;
    });
    itemsListFromProps ? onChange(Array.from(newList)) : setItemsList(newList);
  };

  var undoRemove = function undoRemove() {
    lastRemoved && addValueToList(lastRemoved);
    setLastRemoved(null);
  };

  useEffect(function () {
    if (!itemsListFromProps) {
      onChange(itemsList);
    }
  }, [itemsList]);
  useEffect(function () {
    if (itemsListFromProps) {
      setItemsList(itemsListFromProps);
    }
  }, [itemsListFromProps]);

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
    contentEditable: true,
    role: "textbox",
    "aria-describedby": id + "-legend",
    "aria-placeholder": placeholder,
    onKeyDown: onKeyDown,
    className: "k-Form-TagInput__input"
  })), itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    var itemDisabled = (item == null ? void 0 : item.disabled) || false;
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
  }, itemsList.map(function (item, index) {
    var itemValue = (item == null ? void 0 : item.value) || item;
    return /*#__PURE__*/React.createElement("li", {
      key: "visuallyHidden-" + (itemValue + index)
    }, itemValue);
  })));
};
TagInput.defaultProps = {
  initialItemsList: [],
  itemsList: undefined,
  addEventKeys: ['Enter', ','],
  removeEventKeys: ['Backspace'],
  placeholder: '',
  onChange: function onChange() {},
  disabled: false,
  size: 'medium'
};
TagInput.propTypes = {
  id: PropTypes.string.isRequired,
  initialItemsList: PropTypes.arrayOf(PropTypes.any),
  itemsList: PropTypes.arrayOf(PropTypes.any),
  addEventKeys: PropTypes.arrayOf(PropTypes.string),
  removeEventKeys: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  helpMessage: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant'])
};