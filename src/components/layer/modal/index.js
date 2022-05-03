"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateState = exports.Modal = void 0;

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

var _excluded = ["className", "align"],
    _excluded2 = ["className", "align"],
    _excluded3 = ["className", "twoColumns"],
    _excluded4 = ["className"],
    _excluded5 = ["onClick"],
    _excluded6 = ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "as"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModalTitle = function ModalTitle(_ref) {
  var className = _ref.className,
      align = _ref.align,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p",
    noMargin: true,
    className: (0, _classnames.default)('k-Modal__title', className, "k-u-align-" + align)
  }, props));
};

ModalTitle.propTypes = {
  align: _propTypes.default.oneOf(['center', 'left'])
};
ModalTitle.defaultProps = {
  align: 'center'
};

var ModalContent = function ModalContent(_ref2) {
  var className = _ref2.className,
      align = _ref2.align,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__content', className, "k-u-align-" + align)
  }, props));
};

ModalContent.propTypes = {
  align: _propTypes.default.oneOf(['center', 'left'])
};
ModalContent.defaultProps = {
  align: 'center'
};

var ModalForm = function ModalForm(_ref3) {
  var className = _ref3.className,
      twoColumns = _ref3.twoColumns,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__form', className, {
      'k-Modal__form--twoColumns': twoColumns
    })
  }, props));
};

var ModalActions = function ModalActions(_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__actions', className)
  }, props));
};

var ModalCloseActionButton = function ModalCloseActionButton(_ref5) {
  var _onClick = _ref5.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded5);

  var _useContext = (0, _react.useContext)(ModalContext),
      dispatch = _useContext[1];

  console.warn('Please use a normal `Button` instead.');
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    onClick: function onClick(e) {
      _onClick(e);

      dispatch(updateState(false));
    }
  }));
};

ModalCloseActionButton.propTypes = {
  onClick: _propTypes.default.func
};
ModalCloseActionButton.defaultProps = {
  onClick: function onClick() {
    return null;
  }
};
var initialState = {
  show: false
};
var ModalContext = /*#__PURE__*/(0, _react.createContext)(initialState);

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

var ModalProvider = function ModalProvider(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

var InnerModal = function InnerModal(_ref7) {
  var _modalProps$style, _modalProps$style2;

  var trigger = _ref7.trigger,
      children = _ref7.children,
      label = _ref7.label,
      labelledby = _ref7.labelledby,
      describedby = _ref7.describedby,
      className = _ref7.className,
      closeButtonLabel = _ref7.closeButtonLabel,
      onClose = _ref7.onClose,
      modalProps = _ref7.modalProps,
      hasCloseButton = _ref7.hasCloseButton,
      maxWidth = _ref7.maxWidth,
      size = _ref7.size,
      isOpen = _ref7.isOpen,
      zIndex = _ref7.zIndex,
      ModalElement = _ref7.as,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded6);

  var _useContext2 = (0, _react.useContext)(ModalContext),
      show = _useContext2[0].show,
      dispatch = _useContext2[1];

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
      base: (0, _classnames.default)('k-Modal__wrapper', "k-Modal__wrapper--" + size),
      afterOpen: 'k-Modal--afterOpen',
      beforeClose: 'k-Modal--beforeClose'
    },
    overlayClassName: {
      base: (0, _classnames.default)('k-Modal__overlay'),
      afterOpen: 'k-Modal__overlay--afterOpen',
      beforeClose: 'k-Modal__overlay--beforeClose'
    },
    isOpen: show,
    onAfterOpen: function onAfterOpen(_ref8) {
      var overlayEl = _ref8.overlayEl;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby: labelledby,
      describedby: describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-Modal__body--open"
  }, modalProps, {
    style: {
      overlay: (0, _extends2.default)({}, modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay, {
        '--modal-zIndex': zIndex
      }),
      content: (0, _extends2.default)({}, modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
    }
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hasCloseButton && /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
    className: "k-Modal__closeButton",
    size: "micro",
    modifier: "hydrogen",
    closeButtonLabel: closeButtonLabel,
    onClick: close
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Modal__main"
  }, typeof children === 'function' ? children({
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }) : children)))), document.body);

  return /*#__PURE__*/_react.default.createElement(ModalElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal', className)
  }, others), trigger && /*#__PURE__*/_react.default.cloneElement(trigger, {
    onClick: function onClick(clickEvent) {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
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
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  hasCloseButton: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  as: _propTypes.default.string
};
Modal.defaultProps = {
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
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Form = ModalForm;
Modal.Actions = ModalActions;
Modal.CloseButton = ModalCloseActionButton;