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
import { Marger } from '../../components/layout/marger';
import { Title } from '../../components/typography/title';
import { Paragraph } from '../../components/typography/paragraph';
import { Popover } from '../../components/popovers/popover';
import { Button } from '../../components/buttons/button';
export var CallToActionPopover = /*#__PURE__*/function (_Component) {
  _inherits(CallToActionPopover, _Component);

  var _super = _createSuper(CallToActionPopover);

  function CallToActionPopover(props) {
    var _this;

    _classCallCheck(this, CallToActionPopover);

    _this = _super.call(this, props);
    _this.renderButton = _this.renderButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CallToActionPopover, [{
    key: "getButtonClickHandler",
    value: function getButtonClickHandler(clickOptions) {
      if (!clickOptions) return;

      if (clickOptions.closeOnClick) {
        return this.props.onCloseClick;
      }
    }
  }, {
    key: "renderIllustration",
    value: function renderIllustration() {
      if (!this.props.illustration) return;
      var Illustration = this.props.illustration;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-Popover__illustration"
      }, /*#__PURE__*/React.createElement(Illustration, null));
    }
  }, {
    key: "renderButton",
    value: function renderButton(options, i) {
      var label = options.label,
          clickOptions = options.clickOptions,
          others = _objectWithoutProperties(options, ["label", "clickOptions"]);

      var clickHandler = this.getButtonClickHandler(clickOptions);
      return /*#__PURE__*/React.createElement(Button, _extends({
        onClick: clickHandler,
        key: i,
        children: label
      }, others));
    }
  }, {
    key: "renderButtonsList",
    value: function renderButtonsList() {
      return this.props.buttons.map(this.renderButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          text = _this$props.text,
          titleAriaLabelId = _this$props.titleAriaLabelId,
          buttons = _this$props.buttons,
          illustration = _this$props.illustration,
          popoverProps = _objectWithoutProperties(_this$props, ["title", "text", "titleAriaLabelId", "buttons", "illustration"]);

      return /*#__PURE__*/React.createElement(Popover, _extends({
        titleAriaLabelId: titleAriaLabelId
      }, popoverProps), this.renderIllustration(), /*#__PURE__*/React.createElement(Marger, {
        top: "4",
        bottom: "4",
        className: "k-Popover__content"
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: "1"
      }, /*#__PURE__*/React.createElement(Title, {
        id: titleAriaLabelId,
        modifier: "senary",
        margin: false
      }, title)), /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "3"
      }, /*#__PURE__*/React.createElement(Paragraph, {
        modifier: "tertiary",
        margin: false
      }, text)), /*#__PURE__*/React.createElement(Marger, {
        top: "3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Popover__navigation"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Popover__buttons"
      }, this.renderButtonsList())))));
    }
  }]);

  return CallToActionPopover;
}(Component);
CallToActionPopover.defaultProps = {
  title: '',
  text: '',
  illustration: null,
  buttons: [{
    label: 'Ok',
    modifier: 'helium',
    size: 'big'
  }],
  onCloseClick: null
};