import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "align"],
    _excluded2 = ["className", "align"],
    _excluded3 = ["className", "twoColumns"],
    _excluded4 = ["className"],
    _excluded5 = ["onClick"],
    _excluded6 = ["trigger", "children", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "hasCloseButton", "maxWidth", "size", "isOpen", "zIndex"];
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
      align = _ref.align,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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

var ModalContent = function ModalContent(_ref2) {
  var className = _ref2.className,
      align = _ref2.align,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__content', className, "k-u-align-" + align)
  }, props));
};

ModalContent.propTypes = {
  align: PropTypes.oneOf(['center', 'left'])
};
ModalContent.defaultProps = {
  align: 'center'
};

var ModalForm = function ModalForm(_ref3) {
  var className = _ref3.className,
      twoColumns = _ref3.twoColumns,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__form', className, {
      'k-Modal__form--twoColumns': twoColumns
    })
  }, props));
};

var ModalActions = function ModalActions(_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal__actions', className)
  }, props));
};

var ModalCloseActionButton = function ModalCloseActionButton(_ref5) {
  var _onClick = _ref5.onClick,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  var _useContext = useContext(ModalContext),
      dispatch = _useContext[1];

  console.warn('Please use a normal `Button` instead.');
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    onClick: function onClick(e) {
      _onClick(e);

      dispatch(updateState(false));
    }
  }));
};

ModalCloseActionButton.propTypes = {
  onClick: PropTypes.func
};
ModalCloseActionButton.defaultProps = {
  onClick: function onClick() {
    return null;
  }
};
var initialState = {
  show: false
};
var ModalContext = /*#__PURE__*/createContext(initialState);

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return _extends({}, state, action);
  }
};

export var updateState = function updateState(show) {
  return {
    type: 'update',
    show: show
  };
};

var ModalProvider = function ModalProvider(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: useReducer(reducer, initialState)
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
      others = _objectWithoutPropertiesLoose(_ref7, _excluded6);

  var _useContext2 = useContext(ModalContext),
      show = _useContext2[0].show,
      dispatch = _useContext2[1];

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
      overlay: _extends({}, modalProps == null ? void 0 : (_modalProps$style = modalProps.style) == null ? void 0 : _modalProps$style.overlay, {
        '--modal-zIndex': zIndex
      }),
      content: _extends({}, modalProps == null ? void 0 : (_modalProps$style2 = modalProps.style) == null ? void 0 : _modalProps$style2.content)
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
    open: function open() {
      return dispatch(updateState(true));
    },
    close: function close() {
      return dispatch(updateState(false));
    }
  }) : children)))), document.body);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Modal', className)
  }, others), trigger && /*#__PURE__*/React.cloneElement(trigger, {
    onClick: function onClick(clickEvent) {
      dispatch(updateState(true));

      if ('onClick' in trigger.props && typeof trigger.props.onClick === 'function') {
        trigger.props.onClick(clickEvent);
      }
    }
  }), ModalPortal);
};

export var Modal = function Modal(props) {
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
  onClose: PropTypes.func
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
  onClose: function onClose() {}
};
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Form = ModalForm;
Modal.Actions = ModalActions;
Modal.CloseButton = ModalCloseActionButton;