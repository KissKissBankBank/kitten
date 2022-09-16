"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateState = exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ModalHeader = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__header', className)
  }, props));
};

const ModalHeaderLeft = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__header_left', className)
  }, props));
};

const ModalHeaderRight = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__header_right', className)
  }, props));
};

const ModalTitle = _ref4 => {
  let {
    className,
    align,
    ...props
  } = _ref4;
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

const ModalContent = _ref5 => {
  let {
    className,
    align,
    noMargin,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__content', className, "k-u-align-" + align, {
      'k-Modal__content--noMargin': noMargin
    })
  }, props));
};

ModalContent.propTypes = {
  align: _propTypes.default.oneOf(['center', 'left']),
  noMargin: _propTypes.default.bool
};
ModalContent.defaultProps = {
  align: 'center',
  noMargin: false
};

const ModalForm = _ref6 => {
  let {
    className,
    twoColumns,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__form', className, {
      'k-Modal__form--twoColumns': twoColumns
    })
  }, props));
};

const ModalActions = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Modal__actions', className)
  }, props));
};

const ModalCloseActionButton = _ref8 => {
  let {
    onClick,
    ...props
  } = _ref8;
  const [, dispatch] = (0, _react.useContext)(ModalContext);
  console.warn('Please use a normal `Button` instead.');
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({}, props, {
    onClick: e => {
      onClick(e);
      dispatch(updateState(false));
    }
  }));
};

ModalCloseActionButton.propTypes = {
  onClick: _propTypes.default.func
};
ModalCloseActionButton.defaultProps = {
  onClick: () => null
};
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

const ModalProvider = _ref9 => {
  let {
    children
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement(ModalContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

const InnerModal = _ref10 => {
  var _modalProps$style, _modalProps$style2;

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
    as: ModalElement,
    ...others
  } = _ref10;
  const [{
    show
  }, dispatch] = (0, _react.useContext)(ModalContext);

  const close = () => {
    dispatch(updateState(false));
    onClose();
  };

  (0, _react.useEffect)(() => {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  (0, _react.useEffect)(() => {
    dispatch(updateState(isOpen));
  }, [isOpen]);

  const ModalPortal = /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_reactModal.default, (0, _extends2.default)({
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
    onAfterOpen: _ref11 => {
      let {
        overlayEl
      } = _ref11;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby,
      describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-Modal__body--open"
  }, modalProps, {
    style: {
      overlay: { ...(modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay),
        '--modal-zIndex': zIndex
      },
      content: { ...(modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
      }
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
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }) : children)))), document.body);

  const modalElementProps = ModalElement === _react.Fragment ? {
    key: others.key
  } : { ...others,
    className: (0, _classnames.default)('k-Modal', className)
  };
  return /*#__PURE__*/_react.default.createElement(ModalElement, modalElementProps, trigger && /*#__PURE__*/_react.default.cloneElement(trigger, {
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
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge']),
  isOpen: _propTypes.default.bool,
  zIndex: _propTypes.default.number,
  hasCloseButton: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  as: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.oneOf([_react.Fragment])])
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
  onClose: () => {},
  as: 'div'
};
Modal.Header = ModalHeader;
Modal.HeaderLeft = ModalHeaderLeft;
Modal.HeaderRight = ModalHeaderRight;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Form = ModalForm;
Modal.Actions = ModalActions;
Modal.CloseButton = ModalCloseActionButton;