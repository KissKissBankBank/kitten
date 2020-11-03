import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { Marger } from '../../components/layout/marger';
import { CloseButton } from '../../components/buttons/close-button';
export var Popover = /*#__PURE__*/function (_Component) {
  _inherits(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);
    _this.handleCloseClick = _this.handleCloseClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popover, [{
    key: "handleCloseClick",
    value: function handleCloseClick() {
      if (this.props.onCloseClick) return this.props.onCloseClick();
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      return /*#__PURE__*/React.createElement(CloseButton, {
        modifier: "hydrogen",
        size: "micro",
        closeButtonLabel: this.props.closeButtonLabel,
        onClick: this.handleCloseClick
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      if (typeof this.props.children != 'string') {
        return this.props.children;
      }

      return /*#__PURE__*/React.createElement(Marger, {
        top: "5",
        bottom: "5",
        className: "k-Popover__content"
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          popoverClassName = _this$props.popoverClassName,
          containerClassName = _this$props.containerClassName,
          titleAriaLabelId = _this$props.titleAriaLabelId,
          onCloseClick = _this$props.onCloseClick,
          closeButtonLabel = _this$props.closeButtonLabel,
          popoverAttributes = _objectWithoutProperties(_this$props, ["children", "popoverClassName", "containerClassName", "titleAriaLabelId", "onCloseClick", "closeButtonLabel"]);

      var popoverClassNames = classNames('k-Popover', popoverClassName);
      var containerClassNames = classNames('k-Popover__container', containerClassName);
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: "popover",
        className: popoverClassNames,
        role: "dialog",
        "aria-hidden": "true",
        "aria-labelledby": titleAriaLabelId
      }, popoverAttributes), /*#__PURE__*/React.createElement("div", {
        className: containerClassNames
      }, this.renderContent(), /*#__PURE__*/React.createElement("div", null, this.renderCloseButton())));
    }
  }]);

  return Popover;
}(Component);
Popover.defaultProps = {
  onCloseClick: null,
  closeButtonLabel: 'Close',
  popoverClassName: '',
  containerClassName: ''
};