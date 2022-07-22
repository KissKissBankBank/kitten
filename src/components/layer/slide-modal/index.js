"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateState = exports.SlideModal = void 0;

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ModalTitle = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p",
    noMargin: true,
    className: (0, _classnames.default)('k-SlideModal__title', className)
  }, props));
};

const ModalContent = _ref2 => {
  let {
    className,
    align,
    gradientScroll,
    ...props
  } = _ref2;
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

const ModalActions = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-SlideModal__actions', className)
  }, props));
};

const initialState = {
  show: false
};
const SlideModalContext = /*#__PURE__*/(0, _react.createContext)(initialState);

const reducer = (state, action) => {
  if (action.type === 'update') return { ...state,
    ...action
  };
};

const updateState = show => ({
  type: 'update',
  show
});

exports.updateState = updateState;

const InnerModal = _ref4 => {
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
  } = _ref4;
  const [{
    show
  }, dispatch] = (0, _react.useContext)(SlideModalContext);

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
    onAfterOpen: _ref5 => {
      let {
        overlayEl
      } = _ref5;
      overlayEl.scrollTop = 0;
    },
    aria: {
      labelledby,
      describedby
    },
    ariaHideApp: false,
    onRequestClose: close,
    contentLabel: label,
    bodyOpenClassName: "k-SlideModal__body--open"
  }, modalProps, {
    style: {
      overlay: { ...(modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay),
        '--modal-zIndex': zIndex
      },
      content: { ...(modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
      }
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
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }) : children)))), document.body);

  return /*#__PURE__*/_react.default.createElement(ModalElement, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SlideModal', className)
  }, others), trigger && /*#__PURE__*/_react.default.cloneElement(trigger, {
    onClick: clickEvent => {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

const SlideModal = props => {
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
  onClose: () => {},
  as: 'div'
};
SlideModal.Title = ModalTitle;
SlideModal.Content = ModalContent;
SlideModal.Actions = ModalActions;