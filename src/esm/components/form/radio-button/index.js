import _extends from "@babel/runtime/helpers/esm/extends";
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
export var RadioButton = /*#__PURE__*/function (_Component) {
  _inherits(RadioButton, _Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _super.apply(this, arguments);
  }

  _createClass(RadioButton, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          children = _this$props.children,
          largeContent = _this$props.largeContent;
      if (!children) return;
      var labelContentsClassNames = classNames('k-RadioButton__labelContents', {
        'k-RadioButton__labelContents--large': largeContent
      });
      return /*#__PURE__*/React.createElement("div", {
        className: labelContentsClassNames
      }, children);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          id = _this$props2.id,
          large = _this$props2.large,
          text = _this$props2.text;
      var radioButtonLabelClassNames = classNames('k-RadioButton__label', {
        'k-RadioButton__label--large': large
      }, {
        'k-RadioButton__label--withContents': !!children
      });
      return /*#__PURE__*/React.createElement("label", {
        htmlFor: id,
        className: radioButtonLabelClassNames
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          id = _this$props3.id,
          children = _this$props3.children,
          inputClassName = _this$props3.inputClassName,
          large = _this$props3.large,
          largeContent = _this$props3.largeContent,
          text = _this$props3.text,
          error = _this$props3.error,
          style = _this$props3.style,
          inputProps = _objectWithoutProperties(_this$props3, ["className", "id", "children", "inputClassName", "large", "largeContent", "text", "error", "style"]);

      var radioButtonInputClassNames = classNames('k-RadioButton__input', inputClassName, {
        'is-error': error
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-RadioButton', className),
        style: style
      }, /*#__PURE__*/React.createElement("input", _extends({
        id: id,
        type: "radio",
        className: radioButtonInputClassNames
      }, inputProps)), this.renderLabel(), this.renderContent());
    }
  }]);

  return RadioButton;
}(Component);
RadioButton.defaultProps = {
  text: null,
  large: false,
  largeContent: false
};