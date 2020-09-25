import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../../components/buttons/button-icon';
import { CrossIcon } from '../../components/icons/cross-icon';
export var CloseButton = /*#__PURE__*/function (_Component) {
  _inherits(CloseButton, _Component);

  var _super = _createSuper(CloseButton);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _super.apply(this, arguments);
  }

  _createClass(CloseButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          closeButtonLabel = _this$props.closeButtonLabel,
          size = _this$props.size,
          buttonModifier = _this$props.buttonModifier,
          others = _objectWithoutProperties(_this$props, ["className", "closeButtonLabel", "size", "buttonModifier"]);

      var buttonClassName = classNames('k-ButtonIcon--cross', _defineProperty({}, "k-ButtonIcon--cross--".concat(size), size), className);
      return /*#__PURE__*/React.createElement(ButtonIcon, _extends({
        type: "button",
        className: buttonClassName,
        title: closeButtonLabel,
        "aria-label": closeButtonLabel,
        modifier: buttonModifier
      }, others), /*#__PURE__*/React.createElement(CrossIcon, {
        className: classNames('k-ButtonIcon__svg', 'k-ButtonIcon__svgRotate')
      }));
    }
  }]);

  return CloseButton;
}(Component);
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  size: null
};