import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["trigger", "content", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "disableOutsideScroll", "modalClassNames", "hasCloseButton", "isAnimated"];
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.object.assign.js";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Via "https://github.com/reactjs/react-modal"

import ReactModal from 'react-modal';
import { CloseButton } from '../../../components/molecules/buttons/close-button';
import { createGlobalStyle } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
var GlobalStyle = createGlobalStyle(["body.k-Modal__body--open{overflow:hidden;}.k-Modal__content{position:relative;max-height:calc(100% - ", " * 2);max-width:calc(100vw - ", " * 2);background-color:", ";text-align:center;padding-left:", ";padding-right:", ";box-sizing:border-box;overflow:scroll;@media (min-width:", "){max-width:", ";padding-left:", ";padding-right:", ";}}.k-Modal__close{position:absolute;top:0;right:", ";button{margin:0;}}.k-Modal__close--fixed{position:fixed;}.k-Modal__overlay{position:fixed;z-index:10;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:rgba(34,34,34,.9);}"], pxToRem(20), pxToRem(20), COLORS.background1, pxToRem(60), pxToRem(60), pxToRem(ScreenConfig.M.min), pxToRem(690), pxToRem(110), pxToRem(110), pxToRem(30));
var AnimatedGlobalStyle = createGlobalStyle([".k-Modal__overlay{opacity:0;}.k-Modal__content{opacity:0;transform:scale(.94);}.k-Modal__overlay--afterOpen{transition:opacity .3s ease;opacity:1;}.k-Modal--afterOpen{transition:opacity .3s ease,transform .3s ease;transform:scale(1);opacity:1;}.k-Modal__overlay--beforeClose{opacity:0;}.k-Modal--beforeClose{transition:opacity .3s ease,transform .5s ease;transform:scale(1.06);opacity:0;}"]);
export var Modal = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Modal, _Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      showModal: false
    };

    _this.open = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.close = function () {
      _this.setState({
        showModal: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    console.warn('The Modal component on `modals/modal` will be deprecated in favor of `ModalNext`.');
  };

  _proto.renderCloseModal = function renderCloseModal() {
    var closeButtonLabel = this.props.closeButtonLabel;
    return /*#__PURE__*/React.createElement("div", {
      className: "k-Modal__close"
    }, /*#__PURE__*/React.createElement(CloseButton, {
      className: "k-Modal__close--fixed",
      modifier: "hydrogen",
      onClick: this.close,
      size: "micro",
      closeButtonLabel: closeButtonLabel
    }));
  };

  _proto.renderTriggerAction = function renderTriggerAction() {
    if (!this.props.trigger) return;
    return /*#__PURE__*/React.createElement("span", {
      onClick: this.open
    }, this.props.trigger);
  };

  _proto.renderGlobalStyle = function renderGlobalStyle() {
    var modalClassNames = this.props.modalClassNames;
    if (modalClassNames.className.base !== 'k-Modal__content' && modalClassNames.overlayClassName.base !== 'k-Modal__overlay') return;
    return /*#__PURE__*/React.createElement(GlobalStyle, null);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        content = _this$props.content,
        label = _this$props.label,
        labelledby = _this$props.labelledby,
        describedby = _this$props.describedby,
        className = _this$props.className,
        closeButtonLabel = _this$props.closeButtonLabel,
        onClose = _this$props.onClose,
        modalProps = _this$props.modalProps,
        disableOutsideScroll = _this$props.disableOutsideScroll,
        modalClassNames = _this$props.modalClassNames,
        hasCloseButton = _this$props.hasCloseButton,
        isAnimated = _this$props.isAnimated,
        others = _objectWithoutPropertiesLoose(_this$props, _excluded);

    var triggerClassNames = classNames('k-Modal', className);
    return /*#__PURE__*/React.createElement("div", _extends({
      className: triggerClassNames
    }, others), this.renderTriggerAction(), this.renderGlobalStyle(), isAnimated && /*#__PURE__*/React.createElement(AnimatedGlobalStyle, null), /*#__PURE__*/React.createElement(ReactModal, _extends({
      closeTimeoutMS: isAnimated ? 500 : 0,
      role: "dialog",
      className: Object.assign({}, modalClassNames.className),
      overlayClassName: Object.assign({}, modalClassNames.overlayClassName),
      isOpen: this.state.showModal,
      aria: {
        labelledby: labelledby,
        describedby: describedby
      },
      ariaHideApp: false,
      onRequestClose: this.close,
      contentLabel: label,
      bodyOpenClassName: disableOutsideScroll ? 'k-Modal__body--open' : null
    }, modalProps), content, hasCloseButton && this.renderCloseModal()));
  };

  return Modal;
}(Component);
Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  modalProps: PropTypes.object,
  disableOutsideScroll: PropTypes.bool,
  modalClassNames: PropTypes.shape({
    className: PropTypes.shape({
      base: PropTypes.string,
      afterOpen: PropTypes.string,
      beforeClose: PropTypes.string
    }),
    overlayClassName: PropTypes.shape({
      base: PropTypes.string,
      afterOpen: PropTypes.string,
      beforeClose: PropTypes.string
    }),
    closeContainerClassName: PropTypes.string
  }),
  hasCloseButton: PropTypes.bool,
  isAnimated: PropTypes.bool
};
Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: '',
  modalProps: {},
  disableOutsideScroll: false,
  modalClassNames: {
    className: {
      base: 'k-Modal__content',
      afterOpen: 'k-Modal--afterOpen',
      beforeClose: 'k-Modal--beforeClose'
    },
    overlayClassName: {
      base: 'k-Modal__overlay',
      afterOpen: 'k-Modal__overlay--afterOpen',
      beforeClose: 'k-Modal__overlay--beforeClose'
    },
    closeContainerClassName: 'k-Modal__close'
  },
  hasCloseButton: true,
  isAnimated: true
};