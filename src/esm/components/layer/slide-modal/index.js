import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { CloseButton } from '../../action/close-button';
import { Title } from '../../typography/title';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { GlobalStyle } from './styles';

const ModalTitle = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Title, _extends({
    tag: "p",
    noMargin: true,
    className: classNames('k-SlideModal__title', className)
  }, props));
};

const ModalContent = _ref2 => {
  let {
    className,
    align,
    gradientScroll,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-SlideModal__content', className, {
      'k-SlideModal__content--gradientScroll': gradientScroll
    })
  }, props));
};

ModalContent.propTypes = {
  gradientScroll: PropTypes.bool
};
ModalContent.defaultProps = {
  gradientScroll: true
};

const ModalActions = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-SlideModal__actions', className)
  }, props));
};

const initialState = {
  show: false
};
const SlideModalContext = /*#__PURE__*/createContext(initialState);

const reducer = (state, action) => {
  if (action.type === 'update') return { ...state,
    ...action
  };
};

export const updateState = show => ({
  type: 'update',
  show
});

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
  }, dispatch] = useContext(SlideModalContext);

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
      base: classNames('k-SlideModal__wrapper', "k-SlideModal__wrapper--" + size),
      afterOpen: 'k-SlideModal__wrapper--afterOpen',
      beforeClose: 'k-SlideModal__wrapper--beforeClose'
    },
    overlayClassName: {
      base: classNames('k-SlideModal__overlay'),
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
  }), /*#__PURE__*/React.createElement(React.Fragment, null, hasCloseButton && /*#__PURE__*/React.createElement(CloseButton, {
    className: "k-SlideModal__closeButton",
    size: "small",
    modifier: "hydrogen",
    closeButtonLabel: closeButtonLabel,
    onClick: close
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-SlideModal__main"
  }, typeof children === 'function' ? children({
    open: () => dispatch(updateState(true)),
    close: () => dispatch(updateState(false))
  }) : children)))), document.body);
  return /*#__PURE__*/React.createElement(ModalElement, _extends({
    className: classNames('k-SlideModal', className)
  }, others), trigger && /*#__PURE__*/React.cloneElement(trigger, {
    onClick: clickEvent => {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

export const SlideModal = props => {
  if (!domElementHelper.canUseDom()) return null;
  return /*#__PURE__*/React.createElement(SlideModalContext.Provider, {
    value: useReducer(reducer, initialState)
  }, /*#__PURE__*/React.createElement(InnerModal, props));
};
SlideModal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  hasCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
  as: PropTypes.string
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