import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

import React, { useEffect, createContext, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import isEmpty from 'lodash/fp/isEmpty';
import styled, { createGlobalStyle, css } from 'styled-components';
import { CloseButton } from '../../../components/molecules/buttons/close-button';
import { Button } from '../../../components/molecules/buttons/button';
import { ICON_TINY } from '../../../components/molecules/buttons/button/standalone-styles';
import { Paragraph } from '../../../components/atoms/typography/paragraph/next';
import { Text } from '../../../components/atoms/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { Title } from '../../atoms/typography/title';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN, GUTTER, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
var paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER;
var oneGridCol = "calc((100vw - ".concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), ")");
var oneGridColXl = "calc((".concat(pxToRem(CONTAINER_MAX_WIDTH), " - ").concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), ")");
var StyledParagraph = styled(Paragraph).withConfig({
  displayName: "modal-next__StyledParagraph",
  componentId: "sc-19t1c9d-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], pxToRem(12), pxToRem(ScreenConfig.S.min), pxToRem(14));
var GlobalStyle = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n\n  .k-ModalNext__content {\n    --Modal-colNumber: 6;\n    --Modal-wrapperMaxWidth: 100vw;\n    --Modal-contentCols: 4;\n    --Modal-contentMargin: 1;\n    --Modal-headerHeight: 0px;\n\n    flex: 1 0 auto;\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    transform: scale(0.94);\n    margin: auto;\n    width: calc(100vw - ", ");\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: ", ") {\n      width: calc(100vw - ", ")\n    }\n\n    @media (min-width: ", ") {\n      --Modal-contentMargin: calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);\n\n      width: calc(\n        ((var(--Modal-wrapperMaxWidth) - ", ") / 12\n        + ", ") * var(--Modal-colNumber) - ", "\n      );\n    }\n\n    @media (min-width: ", ") {\n      --Modal-wrapperMaxWidth: ", ";\n    }\n\n    &.k-ModalNext__content--big {\n      --Modal-colNumber: 8;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--huge {\n      --Modal-colNumber: 10;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--giant {\n      --Modal-colNumber: 12;\n\n      @media (min-width: ", ") {\n        --Modal-contentCols: 8;\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: 6;\n      }\n    }\n    &.k-ModalNext__content--fullSize {\n      min-width: 100vw;\n      height: 100%;\n      margin: 0;\n    }\n\n    @media (max-width: ", ") {\n      &.k-ModalNext__content--fullSizeOnMobile {\n        min-width: 100vw;\n        height: 100%;\n        margin: 0;\n      }\n    }\n\n    &.k-ModalNext__content--customContentCols {\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--s, var(--Modal-contentCols--default, 4));\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--m);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--l);\n      }\n      @media (min-width: ", ") {\n        --Modal-contentCols: var(--Modal-contentCols--xl);\n      }\n    }\n\n    .k-ModalNext__header {\n      flex: 0 0 auto;\n      position: sticky;\n      z-index: var(--Modal-headerZIndex);\n      top: 0;\n      height: var(--Modal-headerHeight);\n      display: grid;\n      gap: ", ";\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding-left: ", ";\n      padding-right: ", ";\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n\n      .k-ModalNext__header__closeButton {\n        min-width: ", ";\n        text-align: left;\n      }\n\n      .k-ModalNext__header__title {\n        min-width: ", ";\n        text-align: center;\n      }\n\n      .k-ModalNext__header__actions {\n        min-width: ", ";\n        text-align: right;\n      }\n\n      .k-ModalNext__header__message {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        left: ", ";\n\n        &:empty {\n          display: none;\n        }\n\n        @media (min-width: ", ") {\n          left: ", ";\n        }\n      }\n    }\n\n    .k-ModalNext__closeButton {\n      position: absolute;\n      top: 0;\n      right: ", ";\n\n      @media (min-width: ", ") {\n        right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions {\n      display: flex;\n      flex-direction: column;\n      background-color: ", ";\n\n      @media (min-width: ", ") {\n        gap: ", ";\n        flex-direction: row;\n      }\n\n      .k-Button {\n        margin-top: ", ";\n      }\n\n      &.k-ModalNext__actions--sticky {\n        position: sticky;\n        bottom: 0;\n      }\n      @media (max-width: ", ") {\n        &.k-ModalNext__actions--stickyOnMobile {\n          position: sticky;\n          bottom: 0;\n        }\n      }\n    }\n\n    .k-ModalNext__main {\n      flex: 1 0 auto;\n      display: flex;\n      flex-direction: column;\n      box-sizing: border-box;\n      padding: 0 ", ";\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ");\n      }\n\n      @media (min-width: ", ") {\n        padding: 0 calc(var(--Modal-contentMargin) * ", ");\n      }\n\n      & > *:not(.k-ModalNext__block):first-child {\n        margin-top: ", ";\n\n        @media (min-width: ", ") {\n          margin-top: ", ";\n        }\n      }\n\n      & > * {\n        flex: 0 0 auto;\n      }\n\n      & > :nth-last-child(2) {\n        flex-grow: 1;\n      }\n\n      & > *:last-child {\n        margin-bottom: ", ";\n\n        @media (min-width: ", ") {\n          margin-bottom: ", ";\n        }\n      }\n    }\n\n    .k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child {\n      margin-top: 0;\n    }\n\n    .k-ModalNext__block {\n      margin-left: -", ";\n      margin-right: -", ";\n      padding-left: ", ";\n      padding-right: ", ";\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n\n    .k-ModalNext__actions.k-ModalNext__actions--fullSize {\n      margin-left: -", ";\n      margin-right: -", ";\n      margin-bottom: 0;\n\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n      }\n      @media (min-width: ", ") {\n        margin-left: calc(-1 * var(--Modal-contentMargin) * ", ");\n        margin-right: calc(-1 * var(--Modal-contentMargin) * ", ");\n      }\n\n      .k-Button--orion:first-child:last-child {\n        border-radius: 0;\n      }\n    }\n    @media (max-width: ", ") {\n      .k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile {\n        margin-left: -", ";\n        margin-right: -", ";\n        margin-bottom: 0;\n\n        .k-Button--orion:first-child:last-child {\n          border-radius: 0;\n        }\n      }\n    }\n\n    .k-ModalNext__main__title {\n      margin-bottom:\n    }\n  }\n\n  /* ANDROMEDA STYLES */\n\n  .k-ModalNext__content--andromeda {\n    .k-ModalNext__header {\n      border-bottom: ", " solid ", ";\n      margin-bottom: ", ";\n\n      @media (min-width: ", ") {\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n    }\n\n    &.k-ModalNext__content--hasHeader {\n      --Modal-headerHeight: ", ";\n    }\n  }\n\n\n  /* ORION STYLES */\n\n  .k-ModalNext__content--orion {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n\n    &:not(.k-ModalNext__content--fullSize) {\n      border-radius: ", ";\n\n      .k-ModalNext__closeButton .k-Button {\n        border-top-right-radius: ", ";\n      }\n    }\n    @media (max-width: ", ") {\n      &.k-ModalNext__content--fullSizeOnMobile {\n        border-radius: 0 !important;\n      }\n    }\n\n    &.k-ModalNext__content--hasHeader {\n      --Modal-headerHeight: ", ";\n\n      @media (min-width: ", ") {\n        --Modal-headerHeight: ", ";\n      }\n    }\n\n    .k-ModalNext__header {\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n\n      .k-Button {\n        @media (max-width: ", ") {\n          ", "\n        }\n      }\n    }\n\n    &.k-ModalNext__content--giant {\n      @media (max-width: ", ") {\n        margin-left: 0;\n        margin-right: 0;\n        width: 100vw;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n\n      @media (max-width: ", ") {\n        overflow: auto;\n        min-height: calc(100% - ", ");\n        margin: 0;\n        min-height: 100%;\n        border-radius: 0;\n      }\n    }\n  }\n\n\n  /* OVERLAY STYLES */\n\n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);\n\n    &.k-ModalNext__overlay--andromeda {\n      &:not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content: '';\n          flex: 1 1 33%;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--orion {\n      &:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize) {\n        &::before,\n        &::after {\n          content: '';\n          flex: 1 1 33%;\n          min-height: ", ";\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n      &.k-ModalNext__overlay--giant {\n        &::before,\n        &::after {\n          @media (min-width: ", ") {\n            content: '';\n            flex: 1 1 33%;\n            min-height: ", ";\n          }\n\n          @media (min-width: ", ") {\n            min-height: ", ";\n          }\n        }\n      }\n    }\n\n    &.k-ModalNext__overlay--fullSize {\n      background: white;\n    }\n\n    @media (max-width: ", ") {\n      &.k-ModalNext__overlay--fullSizeOnMobile {\n        background: white;\n\n        .k-ModalNext__content {\n          flex: 1;\n        }\n\n        &::before, &::after {\n          min-height: 0 !important;\n          flex: 0 !important;\n        }\n      }\n    }\n\n    ", "\n  }\n\n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n\n"])), COLORS.background1, pxToRem(2 * CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(2 * CONTAINER_PADDING), pxToRem(ScreenConfig.L.min), pxToRem(paddingPlusGutters), pxToRem(GUTTER), pxToRem(GUTTER), pxToRem(ScreenConfig.XL.min), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), pxToRem(ScreenConfig.XS.max), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), pxToRem(GUTTER), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(40), pxToRem(40), pxToRem(40), pxToRem(CONTAINER_PADDING_THIN + 40 + 35), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING + 40 + 35), pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(50), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(GUTTER), pxToRem(20), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(2), COLORS.line1, pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(60), pxToRem(12), pxToRem(12), pxToRem(ScreenConfig.XS.max), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(12), pxToRem(12), pxToRem(ScreenConfig.XS.max), function () {
  return ICON_TINY;
}, pxToRem(ScreenConfig.M.max), pxToRem(ScreenConfig.XS.max), pxToRem(50 * 2), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.XS.max), function (props) {
  return css(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement(Title, _extends({
    modifier: "quaternary",
    noMargin: true,
    tag: "p",
    className: classNames('k-ModalNext__main__title', className, 'k-u-align-center')
  }, props), children);
};

var ModalParagraph = function ModalParagraph(_ref2) {
  var children = _ref2.children,
      withoutMargin = _ref2.withoutMargin,
      className = _ref2.className,
      align = _ref2.align,
      tag = _ref2.tag,
      props = _objectWithoutProperties(_ref2, ["children", "withoutMargin", "className", "align", "tag"]);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    modifier: "tertiary",
    noMargin: true,
    tag: tag || 'p',
    className: classNames('k-ModalNext__main__paragraph', className, "k-u-align-".concat(align), {
      'k-u-margin-bottom-triple': !withoutMargin || !noMargin,
      'k-u-margin-bottom-quadruple@s-up': !withoutMargin || !noMargin
    })
  }, props), children);
};

ModalParagraph.propTypes = {
  withoutMargin: deprecated(PropTypes.bool, 'Please use `noMargin` instead'),
  noMargin: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify'])
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
      props = _objectWithoutProperties(_ref3, ["className", "sticky", "stickyOnMobile", "fullSize", "fullSizeOnMobile"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ModalNext__actions', className, {
      'k-ModalNext__actions--sticky': sticky,
      'k-ModalNext__actions--stickyOnMobile': stickyOnMobile,
      'k-ModalNext__actions--fullSize': fullSize,
      'k-ModalNext__actions--fullSizeOnMobile': fullSizeOnMobile
    })
  }, props));
};

var ModalButton = function ModalButton(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    size: "big",
    fit: "fluid"
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

var CloseActionButton = function CloseActionButton(_ref4) {
  var _onClick = _ref4.onClick,
      props = _objectWithoutProperties(_ref4, ["onClick"]);

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

var ModalProvider = function ModalProvider(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: useReducer(reducer, initialState)
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
      headerMessage = _ref6.headerMessage,
      contentCols = _ref6.contentCols,
      headerZIndex = _ref6.headerZIndex,
      others = _objectWithoutProperties(_ref6, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "fullSize", "fullSizeOnMobile", "fullSizeTitle", "variant", "headerTitle", "headerActions", "headerMessage", "contentCols", "headerZIndex"]);

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
  var customStyle = {
    '--Modal-headerZIndex': headerZIndex
  };

  if (!isEmpty(contentCols)) {
    for (var _i = 0, _Object$entries = Object.entries(contentCols); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      customStyle["--Modal-contentCols--".concat(key)] = value;
    }
  }

  var shouldDisplayHeader = !!headerTitle || !!fullSizeTitle || !!headerActions;
  var ModalPortal = ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/React.createElement(ReactModal, _extends({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: classNames('k-ModalNext__content', "k-ModalNext__content--".concat(size), "k-ModalNext__content--".concat(variant), {
        'k-ModalNext__content--hasHeader': shouldDisplayHeader,
        'k-ModalNext__content--fullSize': fullSize,
        'k-ModalNext__content--fullSizeOnMobile': fullSizeOnMobile,
        'k-ModalNext__content--customContentCols': !isEmpty(contentCols)
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: classNames('k-ModalNext__overlay', "k-ModalNext__overlay--".concat(size), "k-ModalNext__overlay--".concat(variant), {
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
  }, modalProps), /*#__PURE__*/React.createElement(React.Fragment, null, shouldDisplayHeader ? /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__closeButton"
  }, hasCloseButton && /*#__PURE__*/React.createElement(CloseButton, {
    modifier: "hydrogen",
    onClick: close,
    variant: variant,
    size: variant === 'orion' ? 'regular' : 'micro',
    closeButtonLabel: closeButtonLabel,
    "aria-labelledby": !!headerMessage ? 'ModalHeaderMessage' : null
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__title"
  }, headerTitle ? headerTitle : /*#__PURE__*/React.createElement(Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, fullSizeTitle)), !!headerMessage && /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__message",
    id: "ModalHeaderMessage"
  }, headerMessage), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__actions"
  }, headerActions && headerActions({
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
    className: "k-ModalNext__main"
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
  }, others), trigger && React.cloneElement(trigger, {
    onClick: function onClick(clickEvent) {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
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
  fullSizeOnMobile: PropTypes.bool,
  modalProps: PropTypes.object,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'big', 'huge', 'giant']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  fullSizeTitle: deprecated(PropTypes.string, 'Please use `headerTitle`.'),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  headerTitle: PropTypes.node,
  headerActions: PropTypes.func,
  headerMessage: PropTypes.node,
  contentCols: PropTypes.object,
  headerZIndex: PropTypes.number
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
  variant: 'orion',
  headerTitle: null,
  headerActions: null,
  headerMessage: null,
  contentCols: {},
  headerZIndex: 10
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;
Modal.Block = Block;