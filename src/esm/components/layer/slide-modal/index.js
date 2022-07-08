import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"],
    _excluded2 = ["className", "align", "gradientScroll"],
    _excluded3 = ["className"],
    _excluded4 = ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex", "as"];
import React, { useEffect, createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { CloseButton } from '../../action/close-button';
import { Title } from '../../typography/title';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import { GlobalStyle } from './styles';
import { Button } from '../../action/button';

var ModalTitle = function ModalTitle(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Title, _extends({
    tag: "p",
    noMargin: true,
    className: classNames('k-SlideModal__title', className)
  }, props));
};

var ModalContent = function ModalContent(_ref2) {
  var className = _ref2.className,
      align = _ref2.align,
      gradientScroll = _ref2.gradientScroll,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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

var ModalActions = function ModalActions(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-SlideModal__actions', className)
  }, props));
};

var initialState = {
  show: false
};
var SlideModalContext = /*#__PURE__*/createContext(initialState);

var reducer = function reducer(state, action) {
  if (action.type === 'update') return _extends({}, state, action);
};

export var updateState = function updateState(show) {
  return {
    type: 'update',
    show: show
  };
};

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
      others = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  var _useContext = useContext(SlideModalContext),
      show = _useContext[0].show,
      dispatch = _useContext[1];

  var close = function close() {
    dispatch(updateState(false));
    onClose();
  };

  useEffect(function () {
    if (!trigger) {
      dispatch(updateState(true));
    }
  }, []);
  useEffect(function () {
    dispatch(updateState(isOpen));
  }, [isOpen]);
  var ModalPortal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(ReactModal, _extends({
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
      overlay: _extends({}, modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay, {
        '--modal-zIndex': zIndex
      }),
      content: _extends({}, modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
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
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }) : children)))), document.body);
  return /*#__PURE__*/React.createElement(ModalElement, _extends({
    className: classNames('k-SlideModal', className)
  }, others), trigger && /*#__PURE__*/React.cloneElement(trigger, {
    onClick: function onClick(clickEvent) {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

export var SlideModal = function SlideModal(props) {
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
  onClose: function onClose() {},
  as: 'div'
};
SlideModal.Title = ModalTitle;
SlideModal.Content = ModalContent;
SlideModal.Actions = ModalActions;