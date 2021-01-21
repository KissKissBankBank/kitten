import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .k-Modal__overlay {\n    opacity: 0;\n  }\n  .k-Modal__content {\n    opacity: 0;\n    transform: scale(.94);\n  }\n\n  .k-Modal__overlay--afterOpen {\n    transition: opacity .3s ease;\n    opacity: 1;\n  }\n  .k-Modal--afterOpen {\n    transition: opacity .3s ease, transform .3s ease;\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  .k-Modal__overlay--beforeClose {\n    opacity: 0;\n  }\n  .k-Modal--beforeClose {\n    transition: opacity .3s ease, transform .5s ease;\n    transform: scale(1.06);\n    opacity: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body.k-Modal__body--open {\n    overflow: hidden;\n  }\n\n  .k-Modal__content {\n    position: relative;\n    max-height: calc(100% - ", " * 2);\n    max-width: calc(100vw - ", " * 2);\n\n    background-color: ", ";\n    text-align: center;\n    padding-left: ", ";\n    padding-right: ", ";\n\n    box-sizing: border-box;\n    overflow: scroll;\n\n    @media (min-width: ", ") {\n      max-width: ", ";\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-Modal__close {\n    position: absolute;\n    top: 0;\n    right: ", ";\n\n    button {\n      margin: 0;\n    }\n  }\n\n  .k-Modal__close--fixed {\n    position: fixed;\n  }\n\n  .k-Modal__overlay {\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: rgba(34, 34, 34, .9);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Via "https://github.com/reactjs/react-modal"

import ReactModal from 'react-modal';
import { CloseButton } from '../../../components/buttons/close-button';
import { createGlobalStyle } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
var GlobalStyle = createGlobalStyle(_templateObject(), pxToRem(20), pxToRem(20), COLORS.background1, pxToRem(60), pxToRem(60), pxToRem(ScreenConfig.M.min), pxToRem(690), pxToRem(110), pxToRem(110), pxToRem(30));
var AnimatedGlobalStyle = createGlobalStyle(_templateObject2());
export var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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

  _createClass(Modal, [{
    key: "renderCloseModal",
    value: function renderCloseModal() {
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
    }
  }, {
    key: "renderTriggerAction",
    value: function renderTriggerAction() {
      if (!this.props.trigger) return;
      return /*#__PURE__*/React.createElement("span", {
        onClick: this.open
      }, this.props.trigger);
    }
  }, {
    key: "renderGlobalStyle",
    value: function renderGlobalStyle() {
      var modalClassNames = this.props.modalClassNames;
      if (modalClassNames.className.base !== 'k-Modal__content' && modalClassNames.overlayClassName.base !== 'k-Modal__overlay') return;
      return /*#__PURE__*/React.createElement(GlobalStyle, null);
    }
  }, {
    key: "render",
    value: function render() {
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
          others = _objectWithoutProperties(_this$props, ["trigger", "content", "label", "labelledby", "describedby", "className", "closeButtonLabel", "onClose", "modalProps", "disableOutsideScroll", "modalClassNames", "hasCloseButton", "isAnimated"]);

      var triggerClassNames = classNames('k-Modal', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: triggerClassNames
      }, others), this.renderTriggerAction(), this.renderGlobalStyle(), isAnimated && /*#__PURE__*/React.createElement(AnimatedGlobalStyle, null), /*#__PURE__*/React.createElement(ReactModal, _extends({
        closeTimeoutMS: isAnimated ? 500 : 0,
        role: "dialog",
        className: _extends({}, modalClassNames.className),
        overlayClassName: _extends({}, modalClassNames.overlayClassName),
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
    }
  }]);

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