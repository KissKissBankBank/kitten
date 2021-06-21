"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.updateState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _closeButton = require("../../../components/buttons/close-button");

var _button = require("../../../components/buttons/button");

var _next = require("../../../components/typography/paragraph/next");

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _title = require("../../typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _gridConfig = require("../../../constants/grid-config");

var _elementHelper = require("../../../helpers/dom/element-helper");

var _templateObject;

var paddingPlusGutters = 2 * _gridConfig.CONTAINER_PADDING + 11 * _gridConfig.GUTTER;
var oneGridCol = "calc((100vw - ".concat((0, _typography.pxToRem)(paddingPlusGutters), ") / 12 + ").concat((0, _typography.pxToRem)(_gridConfig.GUTTER), ")");
var oneGridColXl = "calc((".concat((0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), " - ").concat((0, _typography.pxToRem)(paddingPlusGutters), ") / 12 + ").concat((0, _typography.pxToRem)(_gridConfig.GUTTER), ")");
var StyledParagraph = (0, _styledComponents.default)(_next.Paragraph).withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-6re6vo-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(14));
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n\n  .k-ModalNext__content {\n    --Modal-colNumber: 6;\n    --Modal-wrapperMaxWidth: 100vw;\n    --Modal-contentCols: 4;\n    --Modal-contentMargin: 1;\n    --Modal-headerHeight: 0px;\n\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    transform: scale(0.94);\n    margin: auto;\n    width: calc(100vw - ", ");\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: ", ") {\n      width: calc(100vw - ", ")\n    }\n\n    @media (min-width: ", ") {\n      --Modal-contentMargin: calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);\n\n      width: calc(\n        ((var(--Modal-wrapperMaxWidth) - ", ") / 12\n        + ", ") * var(--Modal-colNumber) - ", "\n      );\n    }\n\n    @media (min-width: ", ") {\n      --Modal-wrapperMaxWidth: ", ";\n    }\n\n    &.k-ModalNext__content--big {\n      --Modal-colNumber: 8;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--huge {\n      --Modal-colNumber: 10;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--giant {\n      --Modal-colNumber: 12;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 8;\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--fullSize {\n      min-width: 100vw;\n      height: 100%;\n      margin: 0;\n    }\n\n    @media (max-width: ", ") {\n      &.k-ModalNext__content--fullSizeOnMobile {\n        min-width: 100vw;\n        height: 100%;\n        margin: 0;\n      }\n    }\n\n    &.k-ModalNext__content--customContentCols {\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--s, var(--Modal-contentCols--default, 4));\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--m);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--l);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--xl);\n      }\n    }\n\n    .k-ModalNext__header {\n      flex: 0 0 auto;\n      position: sticky;\n      z-index: var(--Modal-headerZIndex);\n      top: 0;\n      height: var(--Modal-headerHeight);\n      display: grid;\n      gap: ", ";\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding-left: ", ";\n      padding-right: ", ";\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n\n      .k-ModalNext__header__closeButton {\n        min-width: ", ";\n        text-align: left;\n      }\n\n      .k-ModalNext__header__title {\n        min-width: ", ";\n        text-align: center;\n      }\n\n      .k-ModalNext__header__actions {\n        min-width: ", ";\n        text-align: right;\n      }\n    }\n\n    .k-ModalNext__closeButton {\n      position: absolute;\n      top: 0;\n      right: ", ";\n\n      @media (min-width: ", ") {\n        right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions {\n      display: flex;\n      flex-direction: column;\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        gap: ", ";\n        flex-direction: row;\n      }\n\n      .k-Button {\n        margin-top: ", ";\n      }\n\n      &.k-ModalNext__actions--sticky {\n        position: sticky;\n        bottom: 0;\n      }\n      @media (max-width: ", ") {\n        &.k-ModalNext__actions--stickyOnMobile {\n          position: sticky;\n          bottom: 0;\n        }\n      }\n    }\n\n    .k-ModalNext__main {\n      flex: 1 0 auto;\n      display: flex;\n      flex-direction: column;\n      box-sizing: border-box;\n      padding: 0 ", ";\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ");\n      }\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ");\n      }\n\n      & > *:not(.k-ModalNext__block):first-child {\n        margin-top: ", ";\n\n        @media (min-width: ", ") {\n          margin-top: ", ";\n        }\n      }\n\n      & > * {\n        flex: 0 0 auto;\n      }\n\n      & > :nth-last-child(2) {\n        flex-grow: 1;\n      }\n\n      & > *:last-child {\n        margin-bottom: ", ";\n\n        @media (min-width: ", ") {\n          margin-bottom: ", ";\n        }\n      }\n    }\n\n    .k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child {\n      margin-top: 0;\n    }\n\n    .k-ModalNext__block {\n      margin-left: -", ";\n      margin-right: -", ";\n      padding-left: ", ";\n      padding-right: ", ";\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions.k-ModalNext__actions--fullSize {\n      margin-left: -", ";\n      margin-right: -", ";\n      margin-bottom: 0;\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n      }\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n      }\n\n      .k-Button--orion:first-child:last-child {\n        border-radius: 0;\n      }\n    }\n    @media (max-width: ", ") {\n      .k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile {\n        margin-left: -", ";\n        margin-right: -", ";\n        margin-bottom: 0;\n\n        .k-Button--orion:first-child:last-child {\n          border-radius: 0;\n        }\n      }\n    }\n\n    .k-ModalNext__main__title {\n      margin-bottom:\n    }\n  }\n\n  /* ANDROMEDA STYLES */\n\n  .k-ModalNext__content--andromeda {\n    .k-ModalNext__header {\n      border-bottom: ", " solid ", ";\n      margin-bottom: ", ";\n\n      @media (min-width: ", ") {\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n\n    &.k-ModalNext__content--hasHeader {\n      --Modal-headerHeight: ", ";\n    }\n  }\n\n\n  /* ORION STYLES */\n\n  .k-ModalNext__content--orion {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n\n    &:not(.k-ModalNext__content--fullSize) {\n      border-radius: ", ";\n\n      .k-ModalNext__closeButton .k-Button {\n        border-top-right-radius: ", ";\n      }\n    }\n    @media (max-width: ", ") {\n      &.k-ModalNext__content--fullSizeOnMobile {\n        border-radius: 0 !important;\n      }\n    }\n\n    &.k-ModalNext__content--hasHeader {\n      --Modal-headerHeight: ", ";\n\n      @media (min-width: ", ") {\n        --Modal-headerHeight: ", ";\n      }\n    }\n\n    .k-ModalNext__header {\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n\n      .k-Button {\n        @media (max-width: ", ") {\n          ", "\n        }\n      }\n    }\n\n    &.k-ModalNext__content--giant {\n      @media (max-width: ", ") {\n        margin-left: 0;\n        margin-right: 0;\n        width: 100vw;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n\n      @media (max-width: ", ") {\n        overflow: auto;\n        min-height: calc(100% - ", ");\n        margin: 0;\n        min-height: 100%;\n        border-radius: 0;\n      }\n    }\n  }\n\n\n  /* OVERLAY STYLES */\n\n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);\n\n    &.k-ModalNext__overlay--andromeda {\n      &:not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--orion {\n      &:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n      &.k-ModalNext__overlay--giant {\n        &::before,\n        &::after {\n          @media (min-width: ", ") {\n            content:'';\n            flex:1;\n            min-height: ", ";\n          }\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--fullSize {\n      background: white;\n    }\n\n    @media (max-width: ", ") {\n      &.k-ModalNext__overlay--fullSizeOnMobile {\n        background: white;\n\n        .k-ModalNext__content {\n          flex: 1;\n        }\n\n        &::before, &::after {\n          min-height: 0 !important;\n          flex: 0 !important;\n        }\n      }\n    }\n\n    ", "\n  }\n\n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n\n"])), _colorsConfig.default.background1, (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(paddingPlusGutters), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, oneGridCol, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, oneGridColXl, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, oneGridCol, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, oneGridColXl, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), function () {
  return _button.ICON_TINY;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(50 * 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), function (props) {
  return (0, _styledComponents.css)(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "quaternary",
    noMargin: true,
    tag: "p",
    className: (0, _classnames.default)('k-ModalNext__main__title', className, 'k-u-align-center')
  }, props), children);
};

var ModalParagraph = function ModalParagraph(_ref2) {
  var children = _ref2.children,
      withoutMargin = _ref2.withoutMargin,
      className = _ref2.className,
      align = _ref2.align,
      tag = _ref2.tag,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "withoutMargin", "className", "align", "tag"]);
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, (0, _extends2.default)({
    modifier: "tertiary",
    noMargin: true,
    tag: tag || 'p',
    className: (0, _classnames.default)('k-ModalNext__main__paragraph', className, "k-u-align-".concat(align), {
      'k-u-margin-bottom-triple': !withoutMargin || !noMargin,
      'k-u-margin-bottom-quadruple@s-up': !withoutMargin || !noMargin
    })
  }, props), children);
};

ModalParagraph.propTypes = {
  withoutMargin: (0, _deprecated.default)(_propTypes.default.bool, 'Please use `noMargin` instead'),
  noMargin: _propTypes.default.bool,
  align: _propTypes.default.oneOf(['center', 'left', 'right', 'justify'])
};
ModalParagraph.defaultProps = {
  noMargin: false,
  align: 'center'
};

var Actions = function Actions(_ref3) {
  var className = _ref3.className,
      sticky = _ref3.sticky,
      stickyOnMobile = _ref3.stickyOnMobile,
      fullSize = _ref3.fullSize,
      fullSizeOnMobile = _ref3.fullSizeOnMobile,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className", "sticky", "stickyOnMobile", "fullSize", "fullSizeOnMobile"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ModalNext__actions', className, {
      'k-ModalNext__actions--sticky': sticky,
      'k-ModalNext__actions--stickyOnMobile': stickyOnMobile,
      'k-ModalNext__actions--fullSize': fullSize,
      'k-ModalNext__actions--fullSizeOnMobile': fullSizeOnMobile
    })
  }, props));
};

var ModalButton = function ModalButton(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    big: true,
    fluid: true
  }, props, {
    className: (0, _classnames.default)('k-ModalNext__buttons', props.className)
  }));
};

var Block = function Block(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)(props.className, 'k-ModalNext__block')
  }));
};

var initialState = {
  show: false
};
var ModalContext = (0, _react.createContext)(initialState);

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return (0, _extends2.default)({}, state, action);
  }
};

var updateState = function updateState(show) {
  return {
    type: 'update',
    show: show
  };
};

exports.updateState = updateState;

var CloseActionButton = function CloseActionButton(_ref4) {
  var _onClick = _ref4.onClick,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["onClick"]);

  var _useContext = (0, _react.useContext)(ModalContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 2),
      dispatch = _useContext2[1];

  return /*#__PURE__*/_react.default.createElement(ModalButton, (0, _extends2.default)({}, props, {
    onClick: function onClick(e) {
      _onClick(e);

      dispatch(updateState(false));
    }
  }));
};

CloseActionButton.propTypes = {
  onClick: _propTypes.default.func
};
CloseActionButton.defaultProps = {
  onClick: function onClick() {
    return null;
  }
};

var ModalProvider = function ModalProvider(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

var InnerModal = function InnerModal(_ref6) {
  var trigger = _ref6.trigger,
      children = _ref6.children,
      label = _ref6.label,
      labelledby = _ref6.labelledby,
      describedby = _ref6.describedby,
      className = _ref6.className,
      closeButtonLabel = _ref6.closeButtonLabel,
      onClose = _ref6.onClose,
      modalProps = _ref6.modalProps,
      hasCloseButton = _ref6.hasCloseButton,
      maxWidth = _ref6.maxWidth,
      size = _ref6.size,
      isOpen = _ref6.isOpen,
      zIndex = _ref6.zIndex,
      fullSize = _ref6.fullSize,
      fullSizeOnMobile = _ref6.fullSizeOnMobile,
      fullSizeTitle = _ref6.fullSizeTitle,
      variant = _ref6.variant,
      headerTitle = _ref6.headerTitle,
      headerActions = _ref6.headerActions,
      contentCols = _ref6.contentCols,
      headerZIndex = _ref6.headerZIndex,
      others = (0, _objectWithoutProperties2.default)(_ref6, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "fullSize", "fullSizeOnMobile", "fullSizeTitle", "variant", "headerTitle", "headerActions", "contentCols", "headerZIndex"]);

  var _useContext3 = (0, _react.useContext)(ModalContext),
      _useContext4 = (0, _slicedToArray2.default)(_useContext3, 2),
      show = _useContext4[0].show,
      dispatch = _useContext4[1];

  var close = function close() {
    dispatch(updateState(false));

    if (onClose) {
      onClose();
    }
  };

  (0, _react.useEffect)(function () {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  (0, _react.useEffect)(function () {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  var customStyle = {
    '--Modal-headerZIndex': headerZIndex
  };

  if (!(0, _isEmpty.default)(contentCols)) {
    for (var _i = 0, _Object$entries = Object.entries(contentCols); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      customStyle["--Modal-contentCols--".concat(key)] = value;
    }
  }

  var shouldDisplayHeader = !!headerTitle || !!fullSizeTitle || !!headerActions;

  var ModalPortal = _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: (0, _classnames.default)('k-ModalNext__content', "k-ModalNext__content--".concat(size), "k-ModalNext__content--".concat(variant), {
        'k-ModalNext__content--hasHeader': shouldDisplayHeader,
        'k-ModalNext__content--fullSize': fullSize,
        'k-ModalNext__content--fullSizeOnMobile': fullSizeOnMobile,
        'k-ModalNext__content--customContentCols': !(0, _isEmpty.default)(contentCols)
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: (0, _classnames.default)('k-ModalNext__overlay', "k-ModalNext__overlay--".concat(size), "k-ModalNext__overlay--".concat(variant), {
        'k-ModalNext__overlay--fullSize': fullSize,
        'k-ModalNext__overlay--fullSizeOnMobile': fullSizeOnMobile
      }),
      afterOpen: 'k-ModalNext__overlay--afterOpen',
      beforeClose: 'k-ModalNext__overlay--beforeClose'
    },
    isOpen: show,
    onAfterOpen: function onAfterOpen(_ref7) {
      var overlayEl = _ref7.overlayEl;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby: labelledby,
      describedby: describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-ModalNext__body--open",
    style: {
      content: customStyle
    }
  }, modalProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shouldDisplayHeader ? /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__closeButton"
  }, hasCloseButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    modifier: "hydrogen",
    onClick: close,
    variant: variant,
    size: variant === 'orion' ? 'regular' : 'micro',
    closeButtonLabel: closeButtonLabel
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__title"
  }, headerTitle ? headerTitle : /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, fullSizeTitle)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__actions"
  }, headerActions && headerActions({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }))) : hasCloseButton && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__closeButton"
  }, /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@s-up--important k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    size: "micro",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@xs-down--important k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    closeButtonLabel: closeButtonLabel
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__main"
  }, children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }))))), document.body);

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ModalNext', className)
  }, others), trigger && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return dispatch(updateState(true));
    }
  }, trigger), ModalPortal);
};

var Modal = function Modal(props) {
  if (!_elementHelper.domElementHelper.canUseDom()) return null;
  return /*#__PURE__*/_react.default.createElement(ModalProvider, null, /*#__PURE__*/_react.default.createElement(InnerModal, props));
};

exports.Modal = Modal;
Modal.propTypes = {
  label: _propTypes.default.string,
  labelledby: _propTypes.default.string,
  describedby: _propTypes.default.string,
  closeButtonLabel: _propTypes.default.string,
  fullSize: _propTypes.default.bool,
  fullSizeOnMobile: _propTypes.default.bool,
  modalProps: _propTypes.default.object,
  hasCloseButton: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['regular', 'big', 'huge', 'giant']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  fullSizeTitle: (0, _deprecated.default)(_propTypes.default.string, 'Please use `headerTitle`.'),
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  headerTitle: _propTypes.default.node,
  headerActions: _propTypes.default.func,
  contentCols: _propTypes.default.object,
  headerZIndex: _propTypes.default.number
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  fullSize: false,
  fullSizeOnMobile: false,
  modalProps: {},
  hasCloseButton: true,
  size: 'regular',
  isOpen: false,
  zIndex: 110,
  variant: 'andromeda',
  headerTitle: null,
  headerActions: null,
  contentCols: {},
  headerZIndex: 10
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;
Modal.Block = Block;