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
import { Marger } from '../../../layout/marger';
import { Text } from '../../../typography/text';
export var FieldError = /*#__PURE__*/function (_Component) {
  _inherits(FieldError, _Component);

  var _super = _createSuper(FieldError);

  function FieldError() {
    _classCallCheck(this, FieldError);

    return _super.apply(this, arguments);
  }

  _createClass(FieldError, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          others = _objectWithoutProperties(_this$props, ["children"]);

      return /*#__PURE__*/React.createElement(Marger, {
        top: "1"
      }, /*#__PURE__*/React.createElement(Text, _extends({
        tag: "p",
        color: "error",
        size: "micro",
        weight: "regular",
        lineHeight: "normal",
        style: {
          margin: 0
        }
      }, others), children));
    }
  }]);

  return FieldError;
}(Component);