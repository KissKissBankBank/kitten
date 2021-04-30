import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

import React, { useEffect, createContext, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import styled, { createGlobalStyle, css } from 'styled-components';
import { CloseButton } from '../../../components/buttons/close-button';
import { Button, ICON_TINY } from '../../../components/buttons/button';
import { Paragraph } from '../../../components/typography/paragraph/next';
import { Text } from '../../../components/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { Title } from '../../typography/title';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN, GUTTER, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/react-elements';
var paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER;
var oneGridCol = "calc((100vw - ".concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), ")");
var oneGridColXl = "calc((".concat(pxToRem(CONTAINER_MAX_WIDTH), " - ").concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), ")");
var StyledParagraph = styled(Paragraph).withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-6re6vo-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], pxToRem(12), pxToRem(ScreenConfig.S.min), pxToRem(14));
var GlobalStyle = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n\n  .k-ModalNext__content {\n    --Modal-colNumber: 6;\n    --Modal-wrapperMaxWidth: 100vw;\n    --Modal-contentCols: 4;\n    --Modal-contentMargin: 1;\n\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    transform: scale(0.94);\n    margin: auto;\n    width: calc(100vw - ", ");\n\n    @media (min-width: ", ") {\n      width: calc(100vw - ", ")\n    }\n\n    @media (min-width: ", ") {\n      --Modal-contentMargin: calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);\n\n      width: calc(\n        ((var(--Modal-wrapperMaxWidth) - ", ") / 12\n        + ", ") * var(--Modal-colNumber) - ", "\n      );\n    }\n\n    @media (min-width: ", ") {\n      --Modal-wrapperMaxWidth: ", ";\n    }\n\n    &.k-ModalNext__content--big {\n      --Modal-colNumber: 8;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--huge {\n      --Modal-colNumber: 10;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--giant {\n      --Modal-colNumber: 12;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 8;\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--fullSize {\n      min-width: 100vw !important;\n      margin: 0 !important;\n    }\n\n    &.k-ModalNext__content--customContentCols {\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--s, var(--Modal-contentCols--default, 4));\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--m);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--l);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--xl);\n      }\n    }\n\n    .k-ModalNext__header {\n      position: sticky;\n      top: 0;\n      display: grid;\n      gap: ", ";\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding-left: ", ";\n      padding-right: ", ";\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        height: ", ";\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n\n      .k-ModalNext__header__closeButton {\n        text-align: left;\n      }\n\n      .k-ModalNext__header__title {\n        text-align: center;\n      }\n\n      .k-ModalNext__header__actions {\n        text-align: right;\n      }\n    }\n\n    .k-ModalNext__closeButton {\n      position: absolute;\n      top: 0;\n      right: ", ";\n      @media (min-width: ", ") {\n        right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions {\n      display: flex;\n      flex-direction: column;\n\n      @media (min-width: ", ") {\n        gap: ", ";\n        flex-direction: row;\n      }\n\n      .k-Button {\n        margin-top: ", ";\n      }\n    }\n\n    .k-ModalNext__main {\n      padding: 0 ", " ", ";\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ") ", ";\n      }\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ") ", ";\n      }\n\n      & > *:not(.k-ModalNext__block):first-child {\n        margin-top: ", ";\n\n        @media (min-width: ", ") {\n          margin-top: ", ";\n        }\n      }\n    }\n\n    .k-ModalNext__block {\n      margin-left: -", ";\n      margin-right: -", ";\n      padding-left: ", ";\n      padding-right: ", ";\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n  }\n\n  /* ANDROMEDA STYLES */\n\n  .k-ModalNext__content--andromeda {\n    .k-ModalNext__header {\n      height: ", ";\n      border-bottom: ", " solid ", ";\n      margin-bottom: ", "\n    }\n  }\n\n\n  /* ORION STYLES */\n\n  .k-ModalNext__content--orion {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    border-radius: ", ";\n\n    .k-ModalNext__header {\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      height: ", ";\n\n      @media (min-width: ", ") {\n        height: ", ";\n      }\n\n      .k-Button {\n        @media (max-width: ", ") {\n          ", "\n        }\n      }\n    }\n\n    &.k-ModalNext__content--giant {\n      @media (max-width: ", ") {\n        margin-left: 0;\n        margin-right: 0;\n        width: 100vw;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n\n      @media (max-width: ", ") {\n        overflow: auto;\n        min-height: calc(100% - ", ");\n        margin: 0;\n        min-height: 100%;\n        border-radius: 0;\n      }\n    }\n  }\n\n\n  /* OVERLAY STYLES */\n\n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);\n\n    &.k-ModalNext__overlay--andromeda {\n      &:not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--orion {\n      &:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content:'';\n          flex:1;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n      &.k-ModalNext__overlay--giant {\n        &::before,\n        &::after {\n          @media (min-width: ", ") {\n            content:'';\n            flex:1;\n            min-height: ", ";\n          }\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    ", "\n  }\n\n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n\n"])), COLORS.background1, pxToRem(2 * CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(2 * CONTAINER_PADDING), pxToRem(ScreenConfig.L.min), pxToRem(paddingPlusGutters), pxToRem(GUTTER), pxToRem(GUTTER), pxToRem(ScreenConfig.XL.min), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), GUTTER, pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(40), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(GUTTER), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(ScreenConfig.S.min), oneGridCol, pxToRem(80), pxToRem(ScreenConfig.XL.min), oneGridColXl, pxToRem(80), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(60), pxToRem(2), COLORS.line1, pxToRem(50), pxToRem(12), pxToRem(12), pxToRem(12), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(ScreenConfig.XS.max), function () {
  return ICON_TINY;
}, pxToRem(ScreenConfig.M.max), pxToRem(ScreenConfig.XS.max), pxToRem(50 * 2), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), function (props) {
  return css(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Title, {
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
  return /*#__PURE__*/React.createElement(StyledParagraph, {
    modifier: "tertiary",
    style: {
      textAlign: align
    },
    noMargin: true,
    tag: "p",
    className: classNames('k-ModalNext__paragraph', className, {
      'k-u-margin-bottom-triple': !withoutMargin,
      'k-u-margin-bottom-quadruple@s-up': !withoutMargin
    })
  }, children);
};

ModalParagraph.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify'])
};
ModalParagraph.defaultProps = {
  align: 'center'
};

var Actions = function Actions(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-ModalNext__actions', props.className)
  }));
};

var ModalButton = function ModalButton(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true,
    fluid: true
  }, props, {
    className: classNames('k-ModalNext__buttons', props.className)
  }));
};

var Block = function Block(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames(props.className, 'k-ModalNext__block')
  }));
};

var initialState = {
  show: false
};
var ModalContext = createContext(initialState);

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return _extends({}, state, action);
  }
};

export var updateState = function updateState(show) {
  return {
    type: 'update',
    show: show
  };
};

var CloseActionButton = function CloseActionButton(_ref3) {
  var _onClick = _ref3.onClick,
      props = _objectWithoutProperties(_ref3, ["onClick"]);

  var _useContext = useContext(ModalContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      dispatch = _useContext2[1];

  return /*#__PURE__*/React.createElement(ModalButton, _extends({}, props, {
    onClick: function onClick(e) {
      _onClick(e);

      dispatch(updateState(false));
    }
  }));
};

CloseActionButton.propTypes = {
  onClick: PropTypes.func
};
CloseActionButton.defaultProps = {
  onClick: function onClick() {
    return null;
  }
};

var ModalProvider = function ModalProvider(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: useReducer(reducer, initialState)
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
      contentCols = _ref5.contentCols,
      others = _objectWithoutProperties(_ref5, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "fullSize", "fullSizeTitle", "variant", "headerTitle", "headerActions", "contentCols"]);

  var _useContext3 = useContext(ModalContext),
      _useContext4 = _slicedToArray(_useContext3, 2),
      show = _useContext4[0].show,
      dispatch = _useContext4[1];

  var close = function close() {
    dispatch(updateState(false));

    if (onClose) {
      onClose();
    }
  };

  useEffect(function () {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  useEffect(function () {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  var customStyle = {};

  if (contentCols.length !== {}) {
    for (var _i = 0, _Object$entries = Object.entries(contentCols); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      customStyle["--Modal-contentCols--".concat(key)] = value;
    }
  }

  var ModalPortal = ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/React.createElement(ReactModal, _extends({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: classNames('k-ModalNext__content', "k-ModalNext__content--".concat(size), "k-ModalNext__content--".concat(variant), {
        'k-ModalNext__content--fullSize': fullSize,
        'k-ModalNext__content--customContentCols': contentCols.length !== {}
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: classNames('k-ModalNext__overlay', "k-ModalNext__overlay--".concat(size), "k-ModalNext__overlay--".concat(variant), {
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
    bodyOpenClassName: "k-ModalNext__body--open",
    style: {
      content: customStyle
    }
  }, modalProps), /*#__PURE__*/React.createElement(React.Fragment, null, headerTitle || fullSizeTitle ? /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__closeButton"
  }, hasCloseButton && /*#__PURE__*/React.createElement(CloseButton, {
    modifier: "hydrogen",
    onClick: close,
    variant: variant,
    size: variant === 'orion' ? 'regular' : 'micro',
    closeButtonLabel: closeButtonLabel
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__title"
  }, headerTitle ? headerTitle : /*#__PURE__*/React.createElement(Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, fullSizeTitle)), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__actions"
  }, headerActions({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }))) : hasCloseButton && /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__closeButton"
  }, /*#__PURE__*/React.createElement(CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@s-up k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    size: "micro",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/React.createElement(CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@xs-down k-u-margin-none",
    modifier: "hydrogen",
    onClick: close,
    closeButtonLabel: closeButtonLabel
  })), /*#__PURE__*/React.createElement("div", {
    class: "k-ModalNext__main"
  }, children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }))))), document.body);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ModalNext', className)
  }, others), trigger && /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return dispatch(updateState(true));
    }
  }, trigger), ModalPortal);
};

export var Modal = function Modal(props) {
  if (!domElementHelper.canUseDom()) return null;
  return /*#__PURE__*/React.createElement(ModalProvider, null, /*#__PURE__*/React.createElement(InnerModal, props));
};
Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  fullSize: PropTypes.bool,
  modalProps: PropTypes.object,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'big', 'huge', 'giant']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  fullSizeTitle: deprecated(PropTypes.string, 'Please use `headerTitle`.'),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  headerTitle: PropTypes.node,
  headerActions: PropTypes.func,
  contentCols: PropTypes.object
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
  headerActions: function headerActions() {},
  contentCols: {}
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;
Modal.Block = Block;