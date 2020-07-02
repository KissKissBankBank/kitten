"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("../../../components/buttons/close-button");

var _button = require("../../../components/buttons/button/button");

var _paragraph = require("../../../components/typography/paragraph");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _title = require("../../typography/title");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _gridConfig = require("../../../constants/grid-config");

var _elementHelper = require("../../../helpers/dom/element-helper");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  body.k-ModalNext__body--open {\n    overflow: hidden;\n  }\n  \n  .k-ModalNext__content {\n    position: relative;\n    background-color: ", ";\n    box-sizing: border-box;\n    outline: none;\n    transform: scale(0.94);\n    margin-right: ", ";\n    margin-left: ", ";\n    padding: ", " ", ";\n    width: calc(100vw ", ");\n  \n    @media (min-width: ", ") {\n      margin: auto;\n      padding: ", " ", ";\n      width: calc((100vw - ", ") + (", " * 11))\n    }\n  \n    @media (min-width: ", ") {\n      padding: ", " ", ";\n      ", "\n    }\n    \n    @media (min-width: ", ") {\n    ", "\n    }\n  }\n\n  .k-ModalNext__close {\n    position: absolute;\n    top: 0;\n    right: ", ";\n    @media (min-width: ", ") {\n      right: ", ";\n  }\n\n    button {\n      margin: 0;\n    }\n  }\n  \n  .k-ModalNext__overlay {\n    position: fixed;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: rgba(34, 34, 34, .8);    \n    &::before ,\n    &::after {\n      content:'';\n      flex:1;\n      min-height: ", ";\n\n      @media (min-width: ", ") {\n        min-height: ", ";\n      }\n    }\n    ", "\n  }\n  \n  .k-ModalNext__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-ModalNext--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-ModalNext__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-ModalNext--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var paddingPlusGutters = 2 * _gridConfig.CONTAINER_PADDING + 11 * _gridConfig.GUTTER;
var oneGridCol = "calc((100vw - ".concat((0, _typography.pxToRem)(paddingPlusGutters), ") / 12 + ").concat((0, _typography.pxToRem)(_gridConfig.GUTTER), ")");
var StyledParagraph = (0, _styledComponents.default)(_paragraph.Paragraph).withConfig({
  displayName: "next__StyledParagraph",
  componentId: "sc-6re6vo-0"
})(["font-size:", ";@media (min-width:", "){font-size:", ";}"], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(14));
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), oneGridCol, (0, _typography.pxToRem)(paddingPlusGutters), (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), oneGridCol, function (props) {
  return (0, _styledComponents.css)(["width:calc( ((100vw - ", ") / 12 + ", ") * ", " - ", " );"], (0, _typography.pxToRem)(paddingPlusGutters), (0, _typography.pxToRem)(_gridConfig.GUTTER), props.cols, (0, _typography.pxToRem)(_gridConfig.GUTTER));
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XL.min), function (props) {
  return (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(((_gridConfig.CONTAINER_MAX_WIDTH - paddingPlusGutters) / 12 + _gridConfig.GUTTER) * props.cols - _gridConfig.GUTTER));
}, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100), function (props) {
  return (0, _styledComponents.css)(["z-index:", ";"], props.zIndex);
});

var ModalTitle = function ModalTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_title.Title, {
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
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, {
    modifier: "quaternary",
    style: {
      textAlign: align
    },
    margin: false,
    tag: "p",
    className: (0, _classnames.default)('k-Modal__paragraph', className, {
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

var Actions = _styledComponents.default.div.withConfig({
  displayName: "next__Actions",
  componentId: "sc-6re6vo-1"
})(["display:flex;flex-direction:column;@media (min-width:", "){flex-direction:row;}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min));

var ModalButton = (0, _styledComponents.default)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    big: true,
    fluid: true
  }, props));
}).withConfig({
  displayName: "next__ModalButton",
  componentId: "sc-6re6vo-2"
})(["@media (max-width:", "){:not(:last-child){margin-bottom:", ";}}@media (min-width:", "){:not(:first-child){margin-left:", ";}}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.GUTTER));
var initialState = {
  show: false
};
var ModalContext = (0, _react.createContext)(initialState);

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return (0, _extends2.default)((0, _extends2.default)({}, state), action);
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
      big = _ref5.big,
      huge = _ref5.huge,
      isOpen = _ref5.isOpen,
      zIndex = _ref5.zIndex,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "big", "huge", "isOpen", "zIndex"]);

  var _useContext3 = (0, _react.useContext)(ModalContext),
      _useContext4 = (0, _slicedToArray2.default)(_useContext3, 2),
      show = _useContext4[0].show,
      dispatch = _useContext4[1];

  var colsOnDesktop = huge ? 10 : big ? 8 : 6;

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
    cols: colsOnDesktop,
    zIndex: zIndex
  }), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
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
  }, modalProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }), hasCloseButton && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-ModalNext__close"
  }, /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@s-up",
    modifier: "beryllium",
    onClick: close,
    size: "tiny",
    closeButtonLabel: closeButtonLabel
  }), /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    style: {
      position: 'fixed'
    },
    className: "k-u-hidden@xs-down",
    modifier: "beryllium",
    onClick: close,
    closeButtonLabel: closeButtonLabel
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
  modalProps: _propTypes.default.object,
  hasCloseButton: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool,
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  modalProps: {},
  hasCloseButton: true,
  big: false,
  huge: false,
  isOpen: false,
  zIndex: 110
};
Modal.Title = ModalTitle;
Modal.Paragraph = ModalParagraph;
Modal.Actions = Actions;
Modal.Button = ModalButton;
Modal.CloseButton = CloseActionButton;