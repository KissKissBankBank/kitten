import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className", "children"],
    _excluded4 = ["className"],
    _excluded5 = ["className", "children"],
    _excluded6 = ["className", "children"],
    _excluded7 = ["className", "inputProps", "buttonProps"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Text } from '../../../components/typography/text';
import { TextInput } from '../../../components/form/input/text-input';
import { Button } from '../../../components/action/button';
import { pxToRem } from '../../../helpers/utils/typography';
import { LargeArrowIconNext } from '../../../components/graphics/icons-next/large-arrow-icon-next';
var DiscussionWrapper = styled.div.withConfig({
  displayName: "discussion__DiscussionWrapper",
  componentId: "sc-8cr511-0"
})(["display:flex;flex-direction:column;gap:", ";justify-content:space-between;.k-Discussion__list{flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;gap:", ";overflow:scroll;}.k-Discussion__message{display:flex;gap:0 ", ";flex-wrap:wrap;align-items:center;.k-Discussion__message__avatar{flex:0 0 auto;width:", ";height:", ";border-radius:", ";object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-Discussion__message__header{flex:1 0 auto;}.k-Discussion__message__content{box-sizing:border-box;width:100%;flex:1 0 100%;padding-left:", ";}}.k-Discussion__form{flex:0 0 auto;display:flex;align-items:flex-end;gap:", ";.k-Form-TextInput__textareaContainer{flex:1 0 auto;}.k-Discussion__form__button{flex:0 0 auto;}}.k-Discussion__list,.k-Discussion__message{@supports selector(:focus-visible){&:focus{outline-style:auto;}&:focus:not(:focus-visible){outline:transparent;}&:focus-visible{outline-style:auto;}}@supports not (selector(:focus-visible)){&:focus{outline:transparent;}}}"], pxToRem(10), pxToRem(20), pxToRem(10), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(40), pxToRem(10));
export var Discussion = function Discussion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(DiscussionWrapper, _extends({
    className: classNames('k-Discussion', className)
  }, props), children);
};

Discussion.List = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    tabIndex: "0",
    className: classNames('k-Discussion__list', className)
  }, props), children);
};

Discussion.Message = function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Discussion__message', className)
  }, props), children);
};

Discussion.Message.Avatar = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("img", _extends({
    alt: "",
    className: classNames('k-Discussion__message__avatar', className)
  }, props));
};

Discussion.Message.Header = function (_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Discussion__message__header', className)
  }, props), children);
};

Discussion.Message.Content = function (_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement(Text, _extends({
    as: "div",
    weight: "400",
    className: classNames('k-Discussion__message__content', className)
  }, props), children);
};

Discussion.Form = function (_ref7) {
  var className = _ref7.className,
      inputProps = _ref7.inputProps,
      buttonProps = _ref7.buttonProps,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded7);

  return /*#__PURE__*/React.createElement("form", _extends({
    className: classNames('k-Discussion__form', className)
  }, props), /*#__PURE__*/React.createElement(TextInput, _extends({
    tag: "autoresize",
    "aria-label": "Votre message",
    size: "small",
    maxRows: 3
  }, inputProps, {
    className: classNames('k-Discussion__form__input', inputProps == null ? void 0 : inputProps.className)
  })), /*#__PURE__*/React.createElement(Button, _extends({
    fit: "icon",
    "aria-label": "Envoyer",
    modifier: "beryllium",
    size: "small",
    type: "submit"
  }, buttonProps, {
    className: classNames('k-Discussion__form__button', buttonProps == null ? void 0 : buttonProps.className)
  }), /*#__PURE__*/React.createElement(LargeArrowIconNext, {
    "aria-hidden": true,
    direction: "up",
    height: 20,
    width: 20
  })));
};

Discussion.Form.defaultProps = {
  inputProps: {},
  buttonProps: {}
};
Discussion.Form.propTypes = {
  inputProps: PropTypes.object,
  buttonProps: PropTypes.object
};