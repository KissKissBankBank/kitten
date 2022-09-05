import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, createContext, useReducer, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { CloseButton } from '../../action/close-button';
import { Title } from '../../typography/title';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { GlobalStyle } from './styles';
import { Button } from '../../action/button';

const ModalHeader = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__header', className)
  }, props));
};

const ModalHeaderLeft = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__header_left', className)
  }, props));
};

const ModalHeaderRight = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__header_right', className)
  }, props));
};

const ModalTitle = _ref4 => {
  let {
    className,
    align,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(Title, _extends({
    tag: "p",
    noMargin: true,
    className: classNames('k-Modal__title', className, "k-u-align-" + align)
  }, props));
};

ModalTitle.propTypes = {
  align: PropTypes.oneOf(['center', 'left'])
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__content', className, "k-u-align-" + align, {
      'k-Modal__content--noMargin': noMargin
    })
  }, props));
};

ModalContent.propTypes = {
  align: PropTypes.oneOf(['center', 'left']),
  noMargin: PropTypes.bool
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__form', className, {
      'k-Modal__form--twoColumns': twoColumns
    })
  }, props));
};

const ModalActions = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__actions', className)
  }, props));
};

const ModalCloseActionButton = _ref8 => {
  let {
    onClick,
    ...props
  } = _ref8;
  const [, dispatch] = useContext(ModalContext);
  console.warn('Please use a normal `Button` instead.');
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    onClick: e => {
      onClick(e);
      dispatch(updateState(false));
    }
  }));
};

ModalCloseActionButton.propTypes = {
  onClick: PropTypes.func
};
ModalCloseActionButton.defaultProps = {
  onClick: () => null
};
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

const ModalProvider = _ref9 => {
  let {
    children
  } = _ref9;
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: useReducer(reducer, initialState)
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
  }, dispatch] = useContext(ModalContext);

  const close = () => {
    dispatch(updateState(false));
    onClose();
  };

  useEffect(() => {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  useEffect(() => {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  const ModalPortal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(ReactModal, _extends({
    closeTimeoutMS: 500,
    role: "dialog",
    className: {
      base: classNames('k-Modal__wrapper', "k-Modal__wrapper--" + size),
      afterOpen: 'k-Modal--afterOpen',
      beforeClose: 'k-Modal--beforeClose'
    },
    overlayClassName: {
      base: classNames('k-Modal__overlay'),
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
  }), /*#__PURE__*/React.createElement(React.Fragment, null, hasCloseButton && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-Modal__closeButton",
    size: "micro",
    modifier: "hydrogen",
    closeButtonLabel: closeButtonLabel,
    onClick: close
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-Modal__main"
  }, typeof children === 'function' ? children({
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }) : children)))), document.body);
  const modalElementProps = ModalElement === Fragment ? {
    key: others.key
  } : { ...others,
    className: classNames('k-Modal', className)
  };
  return /*#__PURE__*/React.createElement(ModalElement, modalElementProps, trigger && /*#__PURE__*/React.cloneElement(trigger, {
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  hasCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([Fragment])])
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