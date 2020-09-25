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
import { Loader } from '../../components/loaders/loader';
import { Paragraph } from '../../components/typography/paragraph';
export var LoaderWithParagraph = /*#__PURE__*/function (_Component) {
  _inherits(LoaderWithParagraph, _Component);

  var _super = _createSuper(LoaderWithParagraph);

  function LoaderWithParagraph() {
    _classCallCheck(this, LoaderWithParagraph);

    return _super.apply(this, arguments);
  }

  _createClass(LoaderWithParagraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          loaderPosition = _this$props.loaderPosition,
          loaderProps = _this$props.loaderProps,
          paragraphProps = _this$props.paragraphProps,
          others = _objectWithoutProperties(_this$props, ["className", "loaderPosition", "loaderProps", "paragraphProps"]);

      var containerClassName = classNames('k-LoaderWithParagraph', {
        'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
      }, className);
      var loaderClassName = classNames({
        'k-u-margin-bottom-single': loaderPosition == 'top',
        'k-u-margin-left-single': loaderPosition == 'right',
        'k-u-margin-top-single': loaderPosition == 'bottom',
        'k-u-margin-right-single': loaderPosition == 'left'
      }, loaderProps.className);
      var loader = /*#__PURE__*/React.createElement(Loader, _extends({}, loaderProps, {
        className: loaderClassName
      }));
      var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
      return /*#__PURE__*/React.createElement("div", _extends({
        className: containerClassName
      }, others), loaderBefore ? loader : null, /*#__PURE__*/React.createElement(Paragraph, _extends({
        modifier: "secondary",
        margin: false
      }, paragraphProps), this.props.children), loaderBefore ? null : loader);
    }
  }]);

  return LoaderWithParagraph;
}(Component);
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left',
  // Available options: top, right, bottom, left.
  loaderProps: {},
  // Show Loader component.
  paragraphProps: {} // Show Paragraph component.

};