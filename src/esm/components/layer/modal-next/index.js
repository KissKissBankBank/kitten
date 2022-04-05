import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"],
    _excluded2 = ["children", "withoutMargin", "className", "align", "tag"],
    _excluded3 = ["className", "sticky", "stickyOnMobile", "fullSize", "fullSizeOnMobile"],
    _excluded4 = ["onClick"],
    _excluded5 = ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "fullSize", "fullSizeOnMobile", "fullSizeTitle", "headerTitle", "headerActions", "headerMessage", "contentCols", "headerZIndex"];
import React, { useEffect, createContext, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import isEmpty from 'lodash/fp/isEmpty';
import styled, { createGlobalStyle, css } from 'styled-components';
import { CloseButton } from '../../action/close-button';
import { Button } from '../../action/button';
import { ICON_TINY } from '../../action/button/standalone-styles';
import { Paragraph } from '../../typography/paragraph/next';
import { Text } from '../../typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig, mq } from '../../../constants/screen-config';
import { Title } from '../../typography/title';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN, GUTTER, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
var paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER;
var oneGridCol = "calc((100vw - " + pxToRem(paddingPlusGutters) + ") / 12 + " + pxToRem(GUTTER) + ")";
var oneGridColXl = "calc((" + pxToRem(CONTAINER_MAX_WIDTH) + " - " + pxToRem(paddingPlusGutters) + ") / 12 + " + pxToRem(GUTTER) + ")";
var StyledParagraph = styled(Paragraph).withConfig({
  displayName: "modal-next__StyledParagraph",
  componentId: "sc-1q1u5xz-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], pxToRem(12), pxToRem(ScreenConfig.S.min), pxToRem(14));
var GlobalStyle = createGlobalStyle(["body.k-ModalNext__body--open{overflow:hidden;}.k-ModalNext__content{--Modal-colNumber:6;--Modal-wrapperMaxWidth:100vw;--Modal-contentCols:4;--Modal-contentMargin:1;--Modal-headerHeight:0px;flex:1 0 auto;position:relative;background-color:", ";box-sizing:border-box;transform:scale(0.94);display:flex;flex-direction:column;margin:auto;width:calc(100vw - ", ");padding-top:0;padding-left:0;padding-right:0;@media (min-width:", "){width:calc(100vw - ", ")}@media (min-width:", "){--Modal-contentMargin:calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);width:calc( ((var(--Modal-wrapperMaxWidth) - ", ") / 12 + ", ") * var(--Modal-colNumber) - ", " );}@media (min-width:", "){--Modal-wrapperMaxWidth:", ";}&.k-ModalNext__content--big,&.k-ModalNext__content--large{--Modal-colNumber:8;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--huge{--Modal-colNumber:10;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--giant{--Modal-colNumber:12;@media (min-width:", "){--Modal-contentCols:8;}@media (min-width:", "){--Modal-contentCols:6;}@media ", "{margin-left:0;margin-right:0;width:100vw;border-bottom-left-radius:0;border-bottom-right-radius:0;}@media ", "{overflow:auto;min-height:calc(100% - ", ");margin:0;min-height:100%;border-radius:0;}}&.k-ModalNext__content--fullSize{min-width:100vw;height:100%;margin:0;}&:not(.k-ModalNext__content--fullSize){border-radius:var(--border-radius-l);.k-ModalNext__closeButton .k-Button{border-radius:0;border-top-right-radius:var(--border-radius-l);border-top:0;border-right:0;}}@media (max-width:", "){&.k-ModalNext__content--fullSizeOnMobile{border-radius:0 !important;min-width:100vw;height:100%;margin:0;}}&.k-ModalNext__content--customContentCols{@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--s,var(--Modal-contentCols--default,4));}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--m);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--l);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--xl);}}&.k-ModalNext__content--hasHeader{--Modal-headerHeight:", ";@media (min-width:", "){--Modal-headerHeight:", ";}}.k-ModalNext__header{flex:0 0 auto;position:sticky;z-index:var(--Modal-headerZIndex);top:0;height:var(--Modal-headerHeight);display:grid;gap:", ";grid-template-columns:1fr auto 1fr;align-items:center;padding-left:", ";padding-right:", ";background-color:", ";border-top-left-radius:var(--border-radius-l);border-top-right-radius:var(--border-radius-l);@media (min-width:", "){padding-left:", ";padding-right:", ";}.k-ModalNext__header__closeButton{min-width:", ";text-align:left;}.k-ModalNext__header__title{min-width:", ";text-align:center;}.k-ModalNext__header__actions{min-width:", ";text-align:right;}.k-ModalNext__header__message{position:absolute;top:0;height:100%;display:flex;align-items:center;left:", ";&:empty{display:none;}@media (min-width:", "){left:", ";}}.k-Button{@media (max-width:", "){", "}}}.k-ModalNext__closeButton{position:absolute;top:0;right:", ";@media (min-width:", "){right:", ";}}.k-ModalNext__actions{display:flex;flex-direction:column;background-color:", ";@media (min-width:", "){gap:", ";flex-direction:row;}.k-Button{margin-top:", ";}&.k-ModalNext__actions--sticky{position:sticky;bottom:0;}@media (max-width:", "){&.k-ModalNext__actions--stickyOnMobile{position:sticky;bottom:0;}}}.k-ModalNext__main{flex:1 0 auto;display:flex;flex-direction:column;box-sizing:border-box;padding:0 ", ";@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}& > *:not(.k-ModalNext__block):first-child{margin-top:", ";@media (min-width:", "){margin-top:", ";}}& > *{flex:0 0 auto;}& >:nth-last-child(2){flex-grow:1;}& > *:last-child{margin-bottom:", ";@media (min-width:", "){margin-bottom:", ";}}}.k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child{margin-top:0;}.k-ModalNext__block{margin-left:-", ";margin-right:-", ";padding-left:", ";padding-right:", ";@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}}.k-ModalNext__actions.k-ModalNext__actions--fullSize{margin-left:-", ";margin-right:-", ";margin-bottom:0;@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}.k-Button:first-child:last-child{border-radius:0;}}@media (max-width:", "){.k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile{margin-left:-", ";margin-right:-", ";margin-bottom:0;.k-Button:first-child:last-child{border-radius:0;}}}.k-ModalNext__main__title{margin-bottom:}}.k-ModalNext__overlay{position:fixed;overflow:scroll;display:flex;flex-direction:column;top:0;left:0;right:0;bottom:0;opacity:0;background-color:rgba(34,34,34,.8);&:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize){&::before,&::after{content:'';flex:1 1 33%;min-height:", ";@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--giant{&::before,&::after{@media (min-width:", "){content:'';flex:1 1 33%;min-height:", ";}@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--fullSize{background:white;}@media (max-width:", "){&.k-ModalNext__overlay--fullSizeOnMobile{background:white;.k-ModalNext__content{flex:1;}&::before,&::after{min-height:0 !important;flex:0 !important;}}}", "}.k-ModalNext__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-ModalNext--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-ModalNext__overlay--beforeClose{opacity:0;}.k-ModalNext--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"], COLORS.background1, pxToRem(2 * CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(2 * CONTAINER_PADDING), pxToRem(ScreenConfig.L.min), pxToRem(paddingPlusGutters), pxToRem(GUTTER), pxToRem(GUTTER), pxToRem(ScreenConfig.XL.min), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), mq.mobileAndTablet, mq.mobile, pxToRem(50 * 2), pxToRem(ScreenConfig.XS.max), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(GUTTER), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(40), pxToRem(40), pxToRem(40), pxToRem(CONTAINER_PADDING_THIN + 40 + 35), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING + 40 + 35), pxToRem(ScreenConfig.XS.max), function () {
  return ICON_TINY;
}, pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(50), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(GUTTER), pxToRem(20), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.XS.max), function (props) {
  return css(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    modifier: "tertiary",
    noMargin: true,
    tag: tag || 'p',
    className: classNames('k-ModalNext__main__paragraph', className, "k-u-align-" + align, {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

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
    size: "large",
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
var ModalContext = /*#__PURE__*/createContext(initialState);

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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  var _useContext = useContext(ModalContext),
      dispatch = _useContext[1];

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
      headerTitle = _ref6.headerTitle,
      headerActions = _ref6.headerActions,
      headerMessage = _ref6.headerMessage,
      contentCols = _ref6.contentCols,
      headerZIndex = _ref6.headerZIndex,
      others = _objectWithoutPropertiesLoose(_ref6, _excluded5);

  checkDeprecatedSizes(size);

  var _useContext2 = useContext(ModalContext),
      show = _useContext2[0].show,
      dispatch = _useContext2[1];

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
      var _Object$entries$_i = _Object$entries[_i],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
      customStyle["--Modal-contentCols--" + key] = value;
    }
  }

  var shouldDisplayHeader = !!headerTitle || !!fullSizeTitle || !!headerActions;
  var ModalPortal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/React.createElement(ReactModal, _extends({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: classNames('k-ModalNext__content', "k-ModalNext__content--" + size, {
        'k-ModalNext__content--hasHeader': shouldDisplayHeader,
        'k-ModalNext__content--fullSize': fullSize,
        'k-ModalNext__content--fullSizeOnMobile': fullSizeOnMobile,
        'k-ModalNext__content--customContentCols': !isEmpty(contentCols)
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: classNames('k-ModalNext__overlay', "k-ModalNext__overlay--" + size, {
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
    size: "medium",
    closeButtonLabel: closeButtonLabel,
    "aria-labelledby": !!headerMessage ? 'ModalHeaderMessage' : null
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__title"
  }, headerTitle ? headerTitle : /*#__PURE__*/React.createElement(Text, {
    size: "small",
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
  }, others), trigger && /*#__PURE__*/React.cloneElement(trigger, {
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
  size: PropTypes.oneOf(['medium', 'large', 'huge', 'giant']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  fullSizeTitle: deprecated(PropTypes.string, 'Please use `headerTitle`.'),
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
  size: 'medium',
  isOpen: false,
  zIndex: 110,
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