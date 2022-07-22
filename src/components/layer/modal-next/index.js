"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateState = exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _closeButton = require("../../action/close-button");

var _button = require("../../action/button");

var _standaloneStyles = require("../../action/button/standalone-styles");

var _next = require("../../typography/paragraph/next");

var _text = require("../../typography/text");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _title = require("../../typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _gridConfig = require("../../../constants/grid-config");

var _elementHelper = require("../../../helpers/dom/element-helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const paddingPlusGutters = 2 * _gridConfig.CONTAINER_PADDING + 11 * _gridConfig.GUTTER;
const oneGridCol = "calc((100vw - " + (0, _typography.pxToRem)(paddingPlusGutters) + ") / 12 + " + (0, _typography.pxToRem)(_gridConfig.GUTTER) + ")";
const oneGridColXl = "calc((" + (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH) + " - " + (0, _typography.pxToRem)(paddingPlusGutters) + ") / 12 + " + (0, _typography.pxToRem)(_gridConfig.GUTTER) + ")";
const StyledParagraph = (0, _styledComponents.default)(_next.Paragraph).withConfig({
  displayName: "modal-next__StyledParagraph",
  componentId: "sc-1q1u5xz-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(14));
const GlobalStyle = (0, _styledComponents.createGlobalStyle)(["body.k-ModalNext__body--open{overflow:hidden;}.k-ModalNext__content{--Modal-colNumber:6;--Modal-wrapperMaxWidth:100vw;--Modal-contentCols:4;--Modal-contentMargin:1;--Modal-headerHeight:0px;flex:1 0 auto;position:relative;background-color:", ";box-sizing:border-box;transform:scale(0.94);display:flex;flex-direction:column;margin:auto;width:calc(100vw - ", ");padding-top:0;padding-left:0;padding-right:0;@media (min-width:", "){width:calc(100vw - ", ")}@media (min-width:", "){--Modal-contentMargin:calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);width:calc( ((var(--Modal-wrapperMaxWidth) - ", ") / 12 + ", ") * var(--Modal-colNumber) - ", " );}@media (min-width:", "){--Modal-wrapperMaxWidth:", ";}&.k-ModalNext__content--large{--Modal-colNumber:8;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--huge{--Modal-colNumber:10;@media (min-width:", "){--Modal-contentCols:6;}}&.k-ModalNext__content--giant{--Modal-colNumber:12;@media (min-width:", "){--Modal-contentCols:8;}@media (min-width:", "){--Modal-contentCols:6;}@media ", "{margin-left:0;margin-right:0;width:100vw;border-bottom-left-radius:0;border-bottom-right-radius:0;}@media ", "{overflow:auto;min-height:calc(100% - ", ");margin:0;min-height:100%;border-radius:0;}}&.k-ModalNext__content--fullSize{min-width:100vw;height:100%;margin:0;}&:not(.k-ModalNext__content--fullSize){border-radius:var(--border-radius-l);.k-ModalNext__closeButton .k-Button{border-radius:0;border-top-right-radius:var(--border-radius-l);border-top:0;border-right:0;}}@media (max-width:", "){&.k-ModalNext__content--fullSizeOnMobile{border-radius:0 !important;min-width:100vw;height:100%;margin:0;}}&.k-ModalNext__content--customContentCols{@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--s,var(--Modal-contentCols--default,4));}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--m);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--l);}@media (min-width:", "){--Modal-contentCols:var(--Modal-contentCols--xl);}}&.k-ModalNext__content--hasHeader{--Modal-headerHeight:", ";@media (min-width:", "){--Modal-headerHeight:", ";}}.k-ModalNext__header{flex:0 0 auto;position:sticky;z-index:var(--Modal-headerZIndex);top:0;height:var(--Modal-headerHeight);display:grid;gap:", ";grid-template-columns:1fr auto 1fr;align-items:center;padding-left:", ";padding-right:", ";background-color:", ";border-top-left-radius:var(--border-radius-l);border-top-right-radius:var(--border-radius-l);@media (min-width:", "){padding-left:", ";padding-right:", ";}.k-ModalNext__header__closeButton{min-width:", ";text-align:left;}.k-ModalNext__header__title{min-width:", ";text-align:center;}.k-ModalNext__header__actions{min-width:", ";text-align:right;}.k-ModalNext__header__message{position:absolute;top:0;height:100%;display:flex;align-items:center;left:", ";&:empty{display:none;}@media (min-width:", "){left:", ";}}.k-Button{@media (max-width:", "){", "}}}.k-ModalNext__closeButton{position:absolute;top:0;right:", ";@media (min-width:", "){right:", ";}}.k-ModalNext__actions{display:flex;flex-direction:column;background-color:", ";@media (min-width:", "){gap:", ";flex-direction:row;}.k-Button{margin-top:", ";}&.k-ModalNext__actions--sticky{position:sticky;bottom:0;}@media (max-width:", "){&.k-ModalNext__actions--stickyOnMobile{position:sticky;bottom:0;}}}.k-ModalNext__main{flex:1 0 auto;display:flex;flex-direction:column;box-sizing:border-box;padding:0 ", ";@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}@media (min-width:", "){padding:0 calc(var(--Modal-contentMargin) * ", ");}& > *:not(.k-ModalNext__block):first-child{margin-top:", ";@media (min-width:", "){margin-top:", ";}}& > *{flex:0 0 auto;}& > :nth-last-child(2){flex-grow:1;}& > *:last-child{margin-bottom:", ";@media (min-width:", "){margin-bottom:", ";}}}.k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child{margin-top:0;}.k-ModalNext__block{margin-left:-", ";margin-right:-", ";padding-left:", ";padding-right:", ";@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");padding-left:", ";padding-right:", ";}}.k-ModalNext__actions.k-ModalNext__actions--fullSize{margin-left:-", ";margin-right:-", ";margin-bottom:0;@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}@media (min-width:", "){margin-left:calc(-1 * var(--Modal-contentMargin) * ", ");margin-right:calc(-1 * var(--Modal-contentMargin) * ", ");}.k-Button:first-child:last-child{border-radius:0;}}@media (max-width:", "){.k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile{margin-left:-", ";margin-right:-", ";margin-bottom:0;.k-Button:first-child:last-child{border-radius:0;}}}.k-ModalNext__main__title{margin-bottom:}}.k-ModalNext__overlay{position:fixed;overflow:scroll;display:flex;flex-direction:column;top:0;left:0;right:0;bottom:0;opacity:0;background-color:rgba(34,34,34,.8);&:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize){&::before,&::after{content:'';flex:1 1 33%;min-height:", ";@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--giant{&::before,&::after{@media (min-width:", "){content:'';flex:1 1 33%;min-height:", ";}@media (min-width:", "){min-height:", ";}}}&.k-ModalNext__overlay--fullSize{background:white;}@media (max-width:", "){&.k-ModalNext__overlay--fullSizeOnMobile{background:white;.k-ModalNext__content{flex:1;}&::before,&::after{min-height:0 !important;flex:0 !important;}}}", "}.k-ModalNext__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-ModalNext--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-ModalNext__overlay--beforeClose{opacity:0;}.k-ModalNext--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"], _colorsConfig.default.background1, (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(2 * _gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(paddingPlusGutters), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), _screenConfig.mq.mobileAndTablet, _screenConfig.mq.mobile, (0, _typography.pxToRem)(50 * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN + 40 + 35), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING + 40 + 35), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), () => _standaloneStyles.ICON_SMALL, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, oneGridCol, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, oneGridColXl, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), oneGridCol, oneGridCol, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), oneGridColXl, oneGridColXl, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), props => (0, _styledComponents.css)(["z-index:", ";"], props.zIndex));

const ModalTitle = _ref => {
  let {
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    modifier: "quaternary",
    noMargin: true,
    tag: "p",
    className: (0, _classnames.default)('k-ModalNext__main__title', className, 'k-u-align-center')
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
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, (0, _extends2.default)({
    modifier: "tertiary",
    noMargin: true,
    tag: tag || 'p',
    className: (0, _classnames.default)('k-ModalNext__main__paragraph', className, "k-u-align-" + align, {
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

const Actions = _ref3 => {
  let {
    className,
    sticky,
    stickyOnMobile,
    fullSize,
    fullSizeOnMobile,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ModalNext__actions', className, {
      'k-ModalNext__actions--sticky': sticky,
      'k-ModalNext__actions--stickyOnMobile': stickyOnMobile,
      'k-ModalNext__actions--fullSize': fullSize,
      'k-ModalNext__actions--fullSizeOnMobile': fullSizeOnMobile
    })
  }, props));
};

const ModalButton = props => /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
  size: "large",
  fit: "fluid"
}, props, {
  className: (0, _classnames.default)('k-ModalNext__buttons', props.className)
}));

const Block = props => /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
  className: (0, _classnames.default)(props.className, 'k-ModalNext__block')
}));

const initialState = {
  show: false
};
const ModalContext = /*#__PURE__*/(0, _react.createContext)(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state,
        ...action
      };
  }
};

const updateState = show => ({
  type: 'update',
  show
});

exports.updateState = updateState;

const CloseActionButton = _ref4 => {
  let {
    onClick,
    ...props
  } = _ref4;
  const [, dispatch] = (0, _react.useContext)(ModalContext);
  return /*#__PURE__*/_react.default.createElement(ModalButton, (0, _extends2.default)({}, props, {
    onClick: e => {
      onClick(e);
      dispatch(updateState(false));
    }
  }));
};

CloseActionButton.propTypes = {
  onClick: _propTypes.default.func
};
CloseActionButton.defaultProps = {
  onClick: () => null
};

const ModalProvider = _ref5 => {
  let {
    children
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
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
  }, dispatch] = (0, _react.useContext)(ModalContext);

  const close = () => {
    dispatch(updateState(false));

    if (onClose) {
      onClose();
    }
  };

  (0, _react.useEffect)(() => {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  (0, _react.useEffect)(() => {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  let customStyle = {
    '--Modal-headerZIndex': headerZIndex
  };

  if (!(0, _isEmpty.default)(contentCols)) {
    for (const [key, value] of Object.entries(contentCols)) {
      customStyle["--Modal-contentCols--" + key] = value;
    }
  }

  const shouldDisplayHeader = !!headerTitle || !!fullSizeTitle || !!headerActions;

  const ModalPortal = /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, {
    zIndex: zIndex
  }), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: (0, _classnames.default)('k-ModalNext__content', "k-ModalNext__content--" + size, {
        'k-ModalNext__content--hasHeader': shouldDisplayHeader,
        'k-ModalNext__content--fullSize': fullSize,
        'k-ModalNext__content--fullSizeOnMobile': fullSizeOnMobile,
        'k-ModalNext__content--customContentCols': !(0, _isEmpty.default)(contentCols)
      }),
      afterOpen: 'k-ModalNext--afterOpen',
      beforeClose: 'k-ModalNext--beforeClose'
    },
    overlayClassName: {
      base: (0, _classnames.default)('k-ModalNext__overlay', "k-ModalNext__overlay--" + size, {
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
  }, modalProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, shouldDisplayHeader ? /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__closeButton"
  }, hasCloseButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    modifier: "hydrogen",
    onClick: close,
    size: "medium",
    closeButtonLabel: closeButtonLabel,
    "aria-labelledby": !!headerMessage ? 'ModalHeaderMessage' : null
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__title"
  }, headerTitle ? headerTitle : /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "small",
    color: "font1",
    weight: "500"
  }, fullSizeTitle)), !!headerMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__message",
    id: "ModalHeaderMessage"
  }, headerMessage), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__header__actions"
  }, headerActions && headerActions({
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
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
    className: "k-ModalNext__main"
  }, children({
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }))))), document.body);

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ModalNext', className)
  }, others), trigger && /*#__PURE__*/_react.default.cloneElement(trigger, {
    onClick: clickEvent => {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

const Modal = props => {
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
  size: _propTypes.default.oneOf(['medium', 'large', 'huge', 'giant']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  fullSizeTitle: (0, _deprecated.default)(_propTypes.default.string, 'Please use `headerTitle`.'),
  headerTitle: _propTypes.default.node,
  headerActions: _propTypes.default.func,
  headerMessage: _propTypes.default.node,
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