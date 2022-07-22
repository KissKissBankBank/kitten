import _extends from "@babel/runtime/helpers/extends";
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
import { ICON_SMALL } from '../../action/button/standalone-styles';
import { Paragraph } from '../../typography/paragraph/next';
import { Text } from '../../typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig, mq } from '../../../constants/screen-config';
import { Title } from '../../typography/title';
import COLORS from '../../../constants/colors-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN, GUTTER, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { domElementHelper } from '../../../helpers/dom/element-helper';
const paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER;
const oneGridCol = "calc((100vw - " + pxToRem(paddingPlusGutters) + ") / 12 + " + pxToRem(GUTTER) + ")";
const oneGridColXl = "calc((" + pxToRem(CONTAINER_MAX_WIDTH) + " - " + pxToRem(paddingPlusGutters) + ") / 12 + " + pxToRem(GUTTER) + ")";
const StyledParagraph = styled(Paragraph).withConfig({
  displayName: "modal-next__StyledParagraph",
  componentId: "sc-1q1u5xz-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], pxToRem(12), pxToRem(ScreenConfig.S.min), pxToRem(14));
const GlobalStyle = createGlobalStyle(["body.k-ModalNext__body--open{overflow:hidden;}.k-ModalNext__content{--Modal-colNumber:6;--Modal-wrapperMaxWidth:100vw;--Modal-contentCols:4;--Modal-contentMargin:1;--Modal-headerHeight:0px;flex:1 0 auto;position:relative;background-color:", ";box-sizing:border-box;transform:scale(0.94);display:flex;flex-direction:column;margin:auto;width:calc(100vw - ", ");padding-top:0;padding-left:0;padding-right:0;@media (min-width:", "){width:calc(100vw - ", ")}@media (min-width:", "){--Modal-contentMargin:calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);width:calc( ((var(--Modal-wrapperMaxWidth) - ", ") / 12 + ", ") * var(--Modal-colNumber) - ", " );}@media (min-width:", "){--Modal-wrapperMaxWidth:", ";}&.k-ModalNext__content--large{--Modal-colNumber:8;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--huge{--Modal-colNumber:10;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--giant{--Modal-colNumber:12;@media (min-width:", "){--Modal-contentCols:8;}@media (min-width:", "){--Modal-contentCols:6;}@media ", "{margin-left:0;margin-right:0;width:100vw;border-bottom-left-radius:0;border-bottom-right-radius:0;}@media ", "{overflow:auto;min-height:calc(100% - ", ");margin:0;min-height:100%;border-radius:0;}}&.k-ModalNext__content--fullSize{min-width:100vw;height:100%;margin:0;}&:not(.k-ModalNext__content--fullSize){border-radius:var(--border-radius-l);.k-ModalNext__closeButton .k-Button{border-radius:0;border-top-right-radius:var(--border-radius-l);border-top:0;border-right:0;}}@media (max-width:", "){&.k-ModalNext__content--fullSizeOnMobile{border-radius:0 !important;min-width:100vw;height:100%;margin:0;}}&.k-ModalNext__content--customContentCols{@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--s,var(--Modal-contentCols--default,4));}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--m);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--l);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--xl);}}&.k-ModalNext__content--hasHeader{--Modal-headerHeight:", ";@media (min-width:", "){--Modal-headerHeight:", ";}}.k-ModalNext__header{flex:0 0 auto;position:sticky;z-index:var(--Modal-headerZIndex);top:0;height:var(--Modal-headerHeight);display:grid;gap:", ";grid-template-columns:1fr auto 1fr;align-items:center;padding-left:", ";padding-right:", ";background-color:", ";border-top-left-radius:var(--border-radius-l);border-top-right-radius:var(--border-radius-l);@media (min-width:", "){padding-left:", ";padding-right:", ";}.k-ModalNext__header__closeButton{min-width:", ";text-align:left;}.k-ModalNext__header__title{min-width:", ";text-align:center;}.k-ModalNext__header__actions{min-width:", ";text-align:right;}.k-ModalNext__header__message{position:absolute;top:0;height:100%;display:flex;align-items:center;left:", ";&:empty{display:none;}@media (min-width:", "){left:", ";}}.k-Button{@media (max-width:", "){", "}}}.k-ModalNext__closeButton{position:absolute;top:0;right:", ";@media (min-width:", "){right:", ";}}.k-ModalNext__actions{display:flex;flex-direction:column;background-color:", ";@media (min-width:", "){gap:", ";flex-direction:row;}.k-Button{margin-top:", ";}&.k-ModalNext__actions--sticky{position:sticky;bottom:0;}@media (max-width:", "){&.k-ModalNext__actions--stickyOnMobile{position:sticky;bottom:0;}}}.k-ModalNext__main{flex:1 0 auto;display:flex;flex-direction:column;box-sizing:border-box;padding:0 ", ";@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}& > *:not(.k-ModalNext__block):first-child{margin-top:", ";@media (min-width:", "){margin-top:", ";}}& > *{flex:0 0 auto;}& > :nth-last-child(2){flex-grow:1;}& > *:last-child{margin-bottom:", ";@media (min-width:", "){margin-bottom:", ";}}}.k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child{margin-top:0;}.k-ModalNext__block{margin-left:-", ";margin-right:-", ";padding-left:", ";padding-right:", ";@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}}.k-ModalNext__actions.k-ModalNext__actions--fullSize{margin-left:-", ";margin-right:-", ";margin-bottom:0;@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}.k-Button:first-child:last-child{border-radius:0;}}@media (max-width:", "){.k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile{margin-left:-", ";margin-right:-", ";margin-bottom:0;.k-Button:first-child:last-child{border-radius:0;}}}.k-ModalNext__main__title{margin-bottom:}}.k-ModalNext__overlay{position:fixed;overflow:scroll;display:flex;flex-direction:column;top:0;left:0;right:0;bottom:0;opacity:0;background-color:rgba(34,34,34,.8);&:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize){&::before,&::after{content:'';flex:1 1 33%;min-height:", ";@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--giant{&::before,&::after{@media (min-width:", "){content:'';flex:1 1 33%;min-height:", ";}@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--fullSize{background:white;}@media (max-width:", "){&.k-ModalNext__overlay--fullSizeOnMobile{background:white;.k-ModalNext__content{flex:1;}&::before,&::after{min-height:0 !important;flex:0 !important;}}}", "}.k-ModalNext__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-ModalNext--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-ModalNext__overlay--beforeClose{opacity:0;}.k-ModalNext--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"], COLORS.background1, pxToRem(2 * CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(2 * CONTAINER_PADDING), pxToRem(ScreenConfig.L.min), pxToRem(paddingPlusGutters), pxToRem(GUTTER), pxToRem(GUTTER), pxToRem(ScreenConfig.XL.min), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), mq.mobileAndTablet, mq.mobile, pxToRem(50 * 2), pxToRem(ScreenConfig.XS.max), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.XL.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100), pxToRem(GUTTER), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(40), pxToRem(40), pxToRem(40), pxToRem(CONTAINER_PADDING_THIN + 40 + 35), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING + 40 + 35), pxToRem(ScreenConfig.XS.max), () => ICON_SMALL, pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(50), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(GUTTER), pxToRem(20), pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), oneGridCol, oneGridCol, pxToRem(ScreenConfig.XL.min), oneGridColXl, oneGridColXl, pxToRem(ScreenConfig.XS.max), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(ScreenConfig.XS.max), props => css(["z-index:", ";"], props.zIndex));

const ModalTitle = _ref => {
  let {
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Title, _extends({
    modifier: "quaternary",
    noMargin: true,
    tag: "p",
    className: classNames('k-ModalNext__main__title', className, 'k-u-align-center')
  }, props), children);
};

const ModalParagraph = _ref2 => {
  let {
    children,
    withoutMargin,
    className,
    align,
    tag,
    ...props
  } = _ref2;
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

const Actions = _ref3 => {
  let {
    className,
    sticky,
    stickyOnMobile,
    fullSize,
    fullSizeOnMobile,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ModalNext__actions', className, {
      'k-ModalNext__actions--sticky': sticky,
      'k-ModalNext__actions--stickyOnMobile': stickyOnMobile,
      'k-ModalNext__actions--fullSize': fullSize,
      'k-ModalNext__actions--fullSizeOnMobile': fullSizeOnMobile
    })
  }, props));
};

const ModalButton = props => /*#__PURE__*/React.createElement(Button, _extends({
  size: "large",
  fit: "fluid"
}, props, {
  className: classNames('k-ModalNext__buttons', props.className)
}));

const Block = props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
  className: classNames(props.className, 'k-ModalNext__block')
}));

const initialState = {
  show: false
};
const ModalContext = /*#__PURE__*/createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state,
        ...action
      };
  }
};

export const updateState = show => ({
  type: 'update',
  show
});

const CloseActionButton = _ref4 => {
  let {
    onClick,
    ...props
  } = _ref4;
  const [, dispatch] = useContext(ModalContext);
  return /*#__PURE__*/React.createElement(ModalButton, _extends({}, props, {
    onClick: e => {
      onClick(e);
      dispatch(updateState(false));
    }
  }));
};

CloseActionButton.propTypes = {
  onClick: PropTypes.func
};
CloseActionButton.defaultProps = {
  onClick: () => null
};

const ModalProvider = _ref5 => {
  let {
    children
  } = _ref5;
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: useReducer(reducer, initialState)
  }, children);
};

const InnerModal = _ref6 => {
  let {
    trigger,
    children,
    label,
    labelledby,
    describedby,
    className,
    closeButtonLabel,
    onClose,
    modalProps,
    hasCloseButton,
    maxWidth,
    size,
    isOpen,
    zIndex,
    fullSize,
    fullSizeOnMobile,
    fullSizeTitle,
    headerTitle,
    headerActions,
    headerMessage,
    contentCols,
    headerZIndex,
    ...others
  } = _ref6;
  const [{
    show
  }, dispatch] = useContext(ModalContext);

  const close = () => {
    dispatch(updateState(false));

    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  useEffect(() => {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  let customStyle = {
    '--Modal-headerZIndex': headerZIndex
  };

  if (!isEmpty(contentCols)) {
    for (const [key, value] of Object.entries(contentCols)) {
      customStyle["--Modal-contentCols--" + key] = value;
    }
  }

  const shouldDisplayHeader = !!headerTitle || !!fullSizeTitle || !!headerActions;
  const ModalPortal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, {
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
    onAfterOpen: _ref7 => {
      let {
        overlayEl
      } = _ref7;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby,
      describedby
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
    weight: "500"
  }, fullSizeTitle)), !!headerMessage && /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__message",
    id: "ModalHeaderMessage"
  }, headerMessage), /*#__PURE__*/React.createElement("div", {
    className: "k-ModalNext__header__actions"
  }, headerActions && headerActions({
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
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
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }))))), document.body);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ModalNext', className)
  }, others), trigger && /*#__PURE__*/React.cloneElement(trigger, {
    onClick: clickEvent => {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

export const Modal = props => {
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