"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Discussion = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../../components/typography/text");

var _textInput = require("../../../components/form/input/text-input");

var _button = require("../../../components/action/button");

var _typography = require("../../../helpers/utils/typography");

var _largeArrowIconNext = require("../../../components/graphics/icons-next/large-arrow-icon-next");

var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className", "children"],
    _excluded4 = ["className"],
    _excluded5 = ["className", "children"],
    _excluded6 = ["className", "children"],
    _excluded7 = ["className", "inputProps", "buttonProps"];

var DiscussionWrapper = _styledComponents.default.div.withConfig({
  displayName: "discussion__DiscussionWrapper",
  componentId: "sc-8cr511-0"
})(["display:flex;flex-direction:column;gap:", ";justify-content:space-between;.k-Discussion__list{flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;gap:", ";overflow:scroll;}.k-Discussion__message{display:flex;gap:0 ", ";flex-wrap:wrap;align-items:center;.k-Discussion__message__avatar{flex:0 0 auto;width:", ";height:", ";border-radius:", ";object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-Discussion__message__header{flex:1 0 auto;}.k-Discussion__message__content{box-sizing:border-box;width:100%;flex:1 0 100%;padding-left:", ";}}.k-Discussion__form{flex:0 0 auto;display:flex;align-items:flex-end;gap:", ";.k-Form-TextInput__textareaContainer{flex:1 0 auto;}.k-Discussion__form__button{flex:0 0 auto;}}.k-Discussion__list,.k-Discussion__message{@supports selector(:focus-visible){&:focus{outline-style:auto;}&:focus:not(:focus-visible){outline:transparent;}&:focus-visible{outline-style:auto;}}@supports not (selector(:focus-visible)){&:focus{outline:transparent;}}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(10));

var Discussion = function Discussion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(DiscussionWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Discussion', className)
  }, props), children);
};

exports.Discussion = Discussion;

Discussion.List = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    tabIndex: "0",
    className: (0, _classnames.default)('k-Discussion__list', className)
  }, props), children);
};

Discussion.Message = function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Discussion__message', className)
  }, props), children);
};

Discussion.Message.Avatar = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: "",
    className: (0, _classnames.default)('k-Discussion__message__avatar', className)
  }, props));
};

Discussion.Message.Header = function (_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded5);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Discussion__message__header', className)
  }, props), children);
};

Discussion.Message.Content = function (_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref6, _excluded6);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    as: "div",
    weight: "400",
    className: (0, _classnames.default)('k-Discussion__message__content', className)
  }, props), children);
};

Discussion.Form = function (_ref7) {
  var className = _ref7.className,
      inputProps = _ref7.inputProps,
      buttonProps = _ref7.buttonProps,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded7);
  return /*#__PURE__*/_react.default.createElement("form", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Discussion__form', className)
  }, props), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    tag: "autoresize",
    "aria-label": "Votre message",
    size: "small",
    maxRows: 3
  }, inputProps, {
    className: (0, _classnames.default)('k-Discussion__form__input', inputProps == null ? void 0 : inputProps.className)
  })), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    fit: "icon",
    "aria-label": "Envoyer",
    modifier: "beryllium",
    size: "small",
    type: "submit"
  }, buttonProps, {
    className: (0, _classnames.default)('k-Discussion__form__button', buttonProps == null ? void 0 : buttonProps.className)
  }), /*#__PURE__*/_react.default.createElement(_largeArrowIconNext.LargeArrowIconNext, {
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
  inputProps: _propTypes.default.object,
  buttonProps: _propTypes.default.object
};