import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n\n  .k-ModalNext__content {\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    transform: scale(0.94);\n    margin-right: ", ";\n    margin-left: ", ";\n    padding: ", " ", ";\n    width: calc(100vw ", ");\n    ", ";\n\n    @media (min-width: ", ") {\n      margin: auto;\n      padding: ", " ", ";\n      width: calc((100vw - ", ") + (", " * 11))\n    }\n\n    @media (min-width: ", ") {\n      padding: ", " ", ";\n      ", "\n    }\n\n    @media (min-width: ", ") {\n    ", "\n    }\n  }\n\n  .k-ModalNext__close {\n    position: absolute;\n    top: 0;\n    right: ", ";\n    @media (min-width: ", ") {\n      right: ", ";\n  }\n\n    button {\n      margin: 0;\n    }\n  }\n\n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);\n    &::before ,\n    &::after {\n      content:'';\n      flex:1;\n      min-height: ", ";\n\n      @media (min-width: ", ") {\n        min-height: ", ";\n      }\n      ", "\n    }\n    ", "\n  }\n\n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n\n  .k-ModalNext__title--fullSize {\n    position: sticky;\n    top:0;\n    width: 100vw;\n    text-align: center;\n    margin-left: ", ";\n    box-sizing: border-box;\n    background-color: ", ";\n    padding: ", " ", ";\n    border-bottom: ", " solid ", ";\n    margin-bottom: ", ";\n  }\n\n  .k-ModalNext__closeButton--fullSize {\n    position: absolute;\n    left: ", "\n    top: ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useEffect, createContext, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import { CloseButton } from '../../../components/buttons/close-button';
import { Button } from '../../../components/buttons/button/button';
import { Paragraph } from '../../../components/typography/paragraph';
import { Text } from '../../../components/typography/text';
import styled, { createGlobalStyle, css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { Title } from '../../typography/title';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING, GUTTER, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
var paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER;
var oneGridCol = "calc((100vw - ".concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), ")");
var negativeOneGridCol = "calc(0px - ((100vw - ".concat(pxToRem(paddingPlusGutters), ") / 12 + ").concat(pxToRem(GUTTER), "))");
var StyledParagraph = styled(Paragraph).withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-6re6vo-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], pxToRem(12), pxToRem(ScreenConfig.S.min), pxToRem(14));
var GlobalStyle = createGlobalStyle(_templateObject(), COLORS.background1, pxToRem(20), pxToRem(20), pxToRem(50), pxToRem(30), pxToRem(20), function (props) {
  return props.fullSize && css(["padding-top:0 !important;min-width:100vw !important;margin:0 !important;"]);
}, pxToRem(ScreenConfig.S.min), pxToRem(80), oneGridCol, pxToRem(paddingPlusGutters), pxToRem(GUTTER), pxToRem(ScreenConfig.L.min), pxToRem(80), oneGridCol, function (props) {
  return css(["width:calc( ((100vw - ", ") / 12 + ", ") * ", " - ", " );"], pxToRem(paddingPlusGutters), pxToRem(GUTTER), props.cols, pxToRem(GUTTER));
}, pxToRem(ScreenConfig.XL.min), function (props) {
  return css(["width:", ";"], pxToRem(((CONTAINER_MAX_WIDTH - paddingPlusGutters) / 12 + GUTTER) * props.cols - GUTTER));
}, pxToRem(40), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(100), function (props) {
  return props.fullSize && css(["min-height:0 !important;"]);
}, function (props) {
  return css(["z-index:", ";"], props.zIndex);
}, negativeOneGridCol, COLORS.background1, pxToRem(20), oneGridCol, pxToRem(2), COLORS.line1, pxToRem(50), pxToRem(20), pxToRem(12));

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Title, {
    modifier: "quaternary",
    margin: false,
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
    modifier: "quaternary",
    style: {
      textAlign: align
    },
    margin: false,
    tag: "p",
    className: classNames('k-Modal__paragraph', className, {
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
var Actions = styled.div.withConfig({
  displayName: "next__Actions",
  componentId: "sc-6re6vo-1"
})(["display:flex;flex-direction:column;@media (min-width:", "){flex-direction:row;}"], pxToRem(ScreenConfig.S.min));
var ModalButton = styled(function (props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    big: true,
    fluid: true
  }, props));
}).withConfig({
  displayName: "next__ModalButton",
  componentId: "sc-6re6vo-2"
})(["@media (max-width:", "){:not(:last-child){margin-bottom:", ";}}@media (min-width:", "){:not(:first-child){margin-left:", ";}}"], pxToRem(ScreenConfig.XS.max), pxToRem(20), pxToRem(ScreenConfig.S.min), pxToRem(GUTTER));
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
      big = _ref5.big,
      huge = _ref5.huge,
      isOpen = _ref5.isOpen,
      zIndex = _ref5.zIndex,
      fullSize = _ref5.fullSize,
      fullSizeTitle = _ref5.fullSizeTitle,
      others = _objectWithoutProperties(_ref5, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "big", "huge", "isOpen", "zIndex", "fullSize", "fullSizeTitle"]);

  var _useContext3 = useContext(ModalContext),
      _useContext4 = _slicedToArray(_useContext3, 2),
      show = _useContext4[0].show,
      dispatch = _useContext4[1];

  var colsOnDesktop = huge ? 10 : big ? 8 : 6;

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
  var ModalPortal = ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    cols: colsOnDesktop,
    zIndex: zIndex,
    fullSize: fullSize
  }), /*#__PURE__*/React.createElement(ReactModal, _extends({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: 'k-ModalNext__content',
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: 'k-ModalNext__overlay',
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
  }, modalProps), /*#__PURE__*/React.createElement(React.Fragment, null, fullSize && Title && /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__title--fullSize"
  }, /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-ModalNext__closeButton--fullSize",
    modifier: "hydrogen",
    onClick: close,
    size: "micro",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/React.createElement(Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, fullSizeTitle)), children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }), hasCloseButton && !fullSize && /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__close"
  }, /*#__PURE__*/React.createElement(CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@s-up",
    modifier: "hydrogen",
    onClick: close,
    size: "micro",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/React.createElement(CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@xs-down",
    modifier: "hydrogen",
    onClick: close,
    closeButtonLabel: closeButtonLabel
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
  big: PropTypes.bool,
  huge: PropTypes.bool,
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  fullSizeTitle: PropTypes.string
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  fullSize: false,
  modalProps: {},
  hasCloseButton: true,
  big: false,
  huge: false,
  isOpen: false,
  zIndex: 110,
  fullSizeTitle: ''
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;