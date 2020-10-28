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
import { Title } from '../../../components/typography/title';
import { Marger } from '../../../components/layout/marger';
export var InformationBox = /*#__PURE__*/function (_Component) {
  _inherits(InformationBox, _Component);

  var _super = _createSuper(InformationBox);

  function InformationBox() {
    _classCallCheck(this, InformationBox);

    return _super.apply(this, arguments);
  }

  _createClass(InformationBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["title", "children"]);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: "k-InformationBox"
      }, other), /*#__PURE__*/React.createElement("div", {
        className: "k-InformationBox__container"
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: "1"
      }, /*#__PURE__*/React.createElement(Title, {
        tag: "p",
        margin: false,
        modifier: "quaternary"
      }, title)), /*#__PURE__*/React.createElement(Marger, {
        top: "1"
      }, children)));
    }
  }]);

  return InformationBox;
}(Component);
InformationBox.defaultProps = {
  title: null,
  children: null
};