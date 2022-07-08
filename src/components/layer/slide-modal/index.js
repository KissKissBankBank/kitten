"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateState = exports.SlideModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _closeButton = require("../../action/close-button");

var _title = require("../../typography/title");

var _elementHelper = require("../../../helpers/dom/element-helper");

var _styles = require("./styles");

var _button = require("../../action/button");

var _excluded = ["className"],
    _excluded2 = ["className", "align", "gradientScroll"],
    _excluded3 = ["className"],
    _excluded4 = ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "as"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModalTitle = function ModalTitle(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p",
    noMargin: true,
    className: (0, _classnames.default)('k-SlideModal__title', className)
  }, props));
};

var ModalContent = function ModalContent(_ref2) {
  var className = _ref2.className,
      align = _ref2.align,
      gradientScroll = _ref2.gradientScroll,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-SlideModal__content', className, {
      'k-SlideModal__content--gradientScroll': gradientScroll
    })
  }, props));
};

ModalContent.propTypes = {
  gradientScroll: _propTypes.default.bool
};
ModalContent.defaultProps = {
  gradientScroll: true
};

var ModalActions = function ModalActions(_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-SlideModal__actions', className)
  }, props));
};

var initialState = {
  show: false
};
var SlideModalContext = /*#__PURE__*/(0, _react.createContext)(initialState);

var reducer = function reducer(state, action) {
  if (action.type === 'update') return (0, _extends2.default)({}, state, action);
};

var updateState = function updateState(show) {
  return {
    type: 'update',
    show: show
  };
};

exports.updateState = updateState;

var InnerModal = function InnerModal(_ref4) {
  var _modalProps$style, _modalProps$style2;

  var trigger = _ref4.trigger,
      children = _ref4.children,
      label = _ref4.label,
      labelledby = _ref4.labelledby,
      describedby = _ref4.describedby,
      className = _ref4.className,
      closeButtonLabel = _ref4.closeButtonLabel,
      onClose = _ref4.onClose,
      modalProps = _ref4.modalProps,
      hasCloseButton = _ref4.hasCloseButton,
      maxWidth = _ref4.maxWidth,
      size = _ref4.size,
      isOpen = _ref4.isOpen,
      zIndex = _ref4.zIndex,
      ModalElement = _ref4.as,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);

  var _useContext = (0, _react.useContext)(SlideModalContext),
      show = _useContext[0].show,
      dispatch = _useContext[1];

  var close = function close() {
    dispatch(updateState(false));
    onClose();
  };

  (0, _react.useEffect)(function () {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  (0, _react.useEffect)(function () {
    dispatch(updateState(isOpen));
  }, [isOpen]);

  var ModalPortal = /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: (0, _classnames.default)('k-SlideModal__wrapper', "k-SlideModal__wrapper--" + size),
      afterOpen: 'k-SlideModal__wrapper--afterOpen',
      beforeClose: 'k-SlideModal__wrapper--beforeClose'
    },
    overlayClassName: {
      base: (0, _classnames.default)('k-SlideModal__overlay'),
      afterOpen: 'k-SlideModal__overlay--afterOpen',
      beforeClose: 'k-SlideModal__overlay--beforeClose'
    },
    isOpen: show,
    onAfterOpen: function onAfterOpen(_ref5) {
      var overlayEl = _ref5.overlayEl;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby: labelledby,
      describedby: describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-SlideModal__body--open"
  }, modalProps, {
    style: {
      overlay: (0, _extends2.default)({}, modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay, {
        '--modal-zIndex': zIndex
      }),
      content: (0, _extends2.default)({}, modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
    }
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hasCloseButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-SlideModal__closeButton",
    size: "small",
    modifier: "hydrogen",
    closeButtonLabel: closeButtonLabel,
    onClick: close
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SlideModal__main"
  }, typeof children === 'function' ? children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }) : children)))), document.body);

  return /*#__PURE__*/_react.default.createElement(ModalElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SlideModal', className)
  }, others), trigger && /*#__PURE__*/_react.default.cloneElement(trigger, {
    onClick: function onClick(clickEvent) {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

var SlideModal = function SlideModal(props) {
  if (!_elementHelper.domElementHelper.canUseDom()) return null;
  return /*#__PURE__*/_react.default.createElement(SlideModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, /*#__PURE__*/_react.default.createElement(InnerModal, props));
};

exports.SlideModal = SlideModal;
SlideModal.propTypes = {
  label: _propTypes.default.string,
  labelledby: _propTypes.default.string,
  describedby: _propTypes.default.string,
  closeButtonLabel: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  hasCloseButton: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  as: _propTypes.default.string
};
SlideModal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  size: 'medium',
  isOpen: false,
  zIndex: 110,
  hasCloseButton: true,
  onClose: function onClose() {},
  as: 'div'
};
SlideModal.Title = ModalTitle;
SlideModal.Content = ModalContent;
SlideModal.Actions = ModalActions;