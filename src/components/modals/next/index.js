"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.updateState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

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

var _reactElements = require("../../../helpers/react/react-elements");

var _templateObject;

var paddingPlusGutters = 2 * _gridConfig.CONTAINER_PADDING + 11 * _gridConfig.GUTTER;
var oneGridCol = "calc((100vw - ".concat((0, _typography.pxToRem)(paddingPlusGutters), ") / 12 + ").concat((0, _typography.pxToRem)(_gridConfig.GUTTER), ")");
var StyledParagraph = (0, _styledComponents.default)(_next.Paragraph).withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-6re6vo-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(14));
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n\n  .k-ModalNext__content {\n    --Modal-colNumber: 6;\n    --Modal-wrapperMaxWidth: 100vw;\n    --Modal-contentCols: 4;\n    --Modal-contentMargin: 1;\n\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    transform: scale(0.94);\n    margin: auto;\n    width: calc(100vw - ", ");\n\n    @media (min-width: ", ") {\n      width: calc(100vw - ", ")\n    }\n\n    @media (min-width: ", ") {\n      --Modal-contentMargin: calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);\n\n      width: calc(\n        ((var(--Modal-wrapperMaxWidth) - ", ") / 12\n        + ", ") * var(--Modal-colNumber) - ", "\n      );\n    }\n\n    @media (min-width: ", ") {\n      --Modal-wrapperMaxWidth: ", ";\n    }\n\n    &.k-ModalNext__content--big {\n      --Modal-colNumber: 8;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--huge {\n      --Modal-colNumber: 10;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--giant {\n      --Modal-colNumber: 12;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 8;\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--fullSize {\n      min-width: 100vw !important;\n      margin: 0 !important;\n    }\n\n    .k-ModalNext__header {\n      position: sticky;\n      top: 0;\n      display: grid;\n      gap: ", ";\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding-left: ", ";\n      padding-right: ", ";\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        height: ", ";\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n\n      .k-ModalNext__header__closeButton {\n        text-align: left;\n      }\n\n      .k-ModalNext__header__title {\n        text-align: center;\n      }\n\n      .k-ModalNext__header__actions {\n        text-align: right;\n      }\n    }\n\n    .k-ModalNext__closeButton {\n      position: absolute;\n      top: 0;\n      right: ", ";\n      @media (min-width: ", ") {\n        right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions {\n      display: flex;\n      flex-direction: column;\n\n      @media (min-width: ", ") {\n        gap: ", ";\n        flex-direction: row;\n      }\n\n      .k-Button {\n        margin-top: ", ";\n      }\n    }\n\n    .k-ModalNext__main {\n      padding: 0 ", " ", ";\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ") ", ";\n      }\n\n      & > *:not(.k-ModalNext__block):first-child {\n        margin-top: ", ";\n\n        @media (min-width: ", ") {\n          margin-top: ", ";\n        }\n      }\n    }\n\n    .k-ModalNext__block {\n      margin-left: -", ";\n      margin-right: -", ";\n      padding-left: ", ";\n      padding-right: ", ";\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n  }\n\n  /* ANDROMEDA STYLES */\n\n  .k-ModalNext__content--andromeda {\n    .k-ModalNext__header {\n      height: ", ";\n      border-bottom: ", " solid ", ";\n      margin-bottom: ", "\n    }\n  }\n\n\n  /* ORION STYLES */\n\n  .k-ModalNext__content--orion {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    border-radius: ", ";\n\n    .k-ModalNext__header {\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      height: ", ";\n\n      @media (min-width: ", ") {\n        height: ", ";\n      }\n\n      .k-Button {\n        @media (max-width: ", ") {\n          ", "\n        }\n      }\n    }\n\n    &.k-ModalNext__content--giant {\n      @media (max-width: ", ") {\n        margin-left: 0;\n        margin-right: 0;\n        width: 100vw;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n\n      @media (max-width: ", ") {\n        overflow: auto;\n        min-height: calc(100% - ", ");\n        margin: 0;\n        min-height: 100%;\n        border-radius: 0;\n      }\n    }\n\n\n  }\n\n\n  /* OVERLAY STYLES */\n\n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);\n\n    &.k-ModalNext__overlay--andromeda {\n      &:not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--orion {\n      &:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n      &.k-ModalNext__overlay--giant {\n        &::before,\n        &::after {\n          @media (min-width: ", ") {\n            content:'';\n            flex:1;\n            min-height: ", ";\n          }\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    ", "\n  }\n\n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n\n"])), _colorsConfig.default.background1, (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(paddingPlusGutters), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), _gridConfig.GUTTER, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, oneGridCol, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), function () {
  return _button.ICON_TINY;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(50 * 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), function (props) {
  return (0, _styledComponents.css)(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: "quaternary",
    noMargin: true,
    tag: "p",
    className: "k-u-margin-bottom-singleHalf--important k-u-align-center"
  }, children);
};

var ModalParagraph = function ModalParagraph(_ref2) {
  var children = _ref2.children,
      withoutMargin = _ref2.withoutMargin,
      className = _ref2.className,
      align = _ref2.align;
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, {
    modifier: "tertiary",
    style: {
      textAlign: align
    },
    noMargin: true,
    tag: "p",
    className: (0, _classnames.default)('k-ModalNext__paragraph', className, {
      'k-u-margin-bottom-triple': !withoutMargin,
      'k-u-margin-bottom-quadruple@s-up': !withoutMargin
    })
  }, children);
};

ModalParagraph.propTypes = {
  align: _propTypes.default.oneOf(['center', 'left', 'right', 'justify'])
};
ModalParagraph.defaultProps = {
  align: 'center'
};

var Actions = function Actions(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ModalNext__actions', props.className)
  }));
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

var CloseActionButton = function CloseActionButton(_ref3) {
  var _onClick = _ref3.onClick,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["onClick"]);

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

var ModalProvider = function ModalProvider(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

var InnerModal = function InnerModal(_ref5) {
  var trigger = _ref5.trigger,
      children = _ref5.children,
      label = _ref5.label,
      labelledby = _ref5.labelledby,
      describedby = _ref5.describedby,
      className = _ref5.className,
      closeButtonLabel = _ref5.closeButtonLabel,
      onClose = _ref5.onClose,
      modalProps = _ref5.modalProps,
      hasCloseButton = _ref5.hasCloseButton,
      maxWidth = _ref5.maxWidth,
      size = _ref5.size,
      isOpen = _ref5.isOpen,
      zIndex = _ref5.zIndex,
      fullSize = _ref5.fullSize,
      fullSizeTitle = _ref5.fullSizeTitle,
      variant = _ref5.variant,
      headerTitle = _ref5.headerTitle,
      headerActions = _ref5.headerActions,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "fullSize", "fullSizeTitle", "variant", "headerTitle", "headerActions"]);

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

  var ModalPortal = _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: (0, _classnames.default)('k-ModalNext__content', "k-ModalNext__content--".concat(size), "k-ModalNext__content--".concat(variant), {
        'k-ModalNext__content--fullSize': fullSize
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: (0, _classnames.default)('k-ModalNext__overlay', "k-ModalNext__overlay--".concat(size), "k-ModalNext__overlay--".concat(variant), {
        'k-ModalNext__overlay--fullSize': fullSize
      }),
      afterOpen: 'k-ModalNext__overlay--afterOpen',
      beforeClose: 'k-ModalNext__overlay--beforeClose'
    },
    isOpen: show,
    onAfterOpen: function onAfterOpen(_ref6) {
      var overlayEl = _ref6.overlayEl;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby: labelledby,
      describedby: describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-ModalNext__body--open"
  }, modalProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headerTitle || fullSizeTitle ? /*#__PURE__*/_react.default.createElement("div", {
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
  }, headerActions({
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
    className: "k-u-hidden@s-up k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    size: "micro",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@xs-down k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    closeButtonLabel: closeButtonLabel
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "k-ModalNext__main"
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
  modalProps: _propTypes.default.object,
  hasCloseButton: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['regular', 'big', 'huge', 'giant']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  fullSizeTitle: (0, _deprecated.default)(_propTypes.default.string, 'Please use `headerTitle`.'),
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  headerTitle: _propTypes.default.node,
  headerActions: _propTypes.default.func
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  fullSize: false,
  modalProps: {},
  hasCloseButton: true,
  size: 'regular',
  isOpen: false,
  zIndex: 110,
  fullSizeTitle: '',
  variant: 'andromeda',
  headerTitle: null,
  headerActions: function headerActions() {}
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;
Modal.Block = Block;