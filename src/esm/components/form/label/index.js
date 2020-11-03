import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import domElementHelper from '../../../helpers/dom/element-helper';
export var Label = /*#__PURE__*/function (_Component) {
  _inherits(Label, _Component);

  var _super = _createSuper(Label);

  function Label(props) {
    var _this;

    _classCallCheck(this, Label);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Label, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (domElementHelper.canUseDom() && this.props.focusId) {
        e.preventDefault();
        document.getElementById(this.props.focusId).focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          children = _this$props.children,
          focusId = _this$props.focusId,
          size = _this$props.size,
          withoutPointerEvents = _this$props.withoutPointerEvents,
          other = _objectWithoutProperties(_this$props, ["tag", "className", "children", "focusId", "size", "withoutPointerEvents"]);

      var Tag = tag;
      var labelClassName = classNames('k-Label', className, (_classNames = {}, _defineProperty(_classNames, "k-Label--".concat(size), size), _defineProperty(_classNames, 'k-Label--withoutPointerEvents', withoutPointerEvents), _classNames));
      var htmlFor = tag == 'label' && focusId ? focusId : null;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: labelClassName,
        htmlFor: htmlFor,
        onClick: this.handleClick
      }, other), children);
    }
  }]);

  return Label;
}(Component);
Label.defaultProps = {
  tag: 'label',
  className: null,
  children: 'Label',
  focusId: null,
  size: null,
  // `tiny`
  withoutPointerEvents: false
};