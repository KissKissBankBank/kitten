import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';

var Circle = function Circle(_ref) {
  var color = _ref.color,
      others = _objectWithoutProperties(_ref, ["color"]);

  var size = 5;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(size * 2, " ").concat(size * 2)
  }, others), /*#__PURE__*/React.createElement("circle", {
    fill: color,
    cx: size,
    cy: size,
    r: size
  }));
};

export var Loader = /*#__PURE__*/function (_Component) {
  _inherits(Loader, _Component);

  var _super = _createSuper(Loader);

  function Loader() {
    _classCallCheck(this, Loader);

    return _super.apply(this, arguments);
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          color = _this$props.color,
          others = _objectWithoutProperties(_this$props, ["tag", "className", "color"]);

      var Tag = tag;
      var loaderClassName = classNames('k-Loader', className);
      var circle = /*#__PURE__*/React.createElement(Circle, {
        className: "k-Loader__circle",
        color: color
      });
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: loaderClassName
      }, others), circle, circle, circle);
    }
  }]);

  return Loader;
}(Component);
Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null
};