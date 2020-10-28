import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { stringUtils } from '../../../helpers/utils/string';
export var SideGrid = /*#__PURE__*/function (_Component) {
  _inherits(SideGrid, _Component);

  var _super = _createSuper(SideGrid);

  function SideGrid() {
    _classCallCheck(this, SideGrid);

    return _super.apply(this, arguments);
  }

  _createClass(SideGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          containerClassName = _this$props.containerClassName,
          rowClassName = _this$props.rowClassName;
      var _this$props2 = this.props,
          asidePosition = _this$props2.asidePosition,
          asideSize = _this$props2.asideSize;
      asidePosition = stringUtils.upcaseFirst(asidePosition);
      asideSize = stringUtils.upcaseFirst(asideSize);
      var sideGridClassName = classNames('k-SideGrid', className, "k-SideGrid--aside".concat(asidePosition), "k-SideGrid--aside".concat(asideSize));
      return /*#__PURE__*/React.createElement("div", {
        className: sideGridClassName
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('k-SideGrid__container', containerClassName)
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('k-SideGrid__row', rowClassName)
      }, this.props.children)));
    }
  }]);

  return SideGrid;
}(Component);
export var SideGridContent = /*#__PURE__*/function (_Component2) {
  _inherits(SideGridContent, _Component2);

  var _super2 = _createSuper(SideGridContent);

  function SideGridContent() {
    _classCallCheck(this, SideGridContent);

    return _super2.apply(this, arguments);
  }

  _createClass(SideGridContent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-SideGrid__content', this.props.className)
      }, this.props.children);
    }
  }]);

  return SideGridContent;
}(Component);
export var SideGridAside = /*#__PURE__*/function (_Component3) {
  _inherits(SideGridAside, _Component3);

  var _super3 = _createSuper(SideGridAside);

  function SideGridAside() {
    _classCallCheck(this, SideGridAside);

    return _super3.apply(this, arguments);
  }

  _createClass(SideGridAside, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-SideGrid__aside', this.props.className)
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('k-SideGrid__asideContent', this.props.contentClassName)
      }, this.props.children));
    }
  }]);

  return SideGridAside;
}(Component);
SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end',
  // 'start' or 'end'
  asideSize: 'default' // 'default', 'small' or 'large'

};
SideGridContent.defaultProps = {
  className: null
};
SideGridAside.defaultProps = {
  className: null,
  contentClassName: null
};