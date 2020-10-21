import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// DEPRECATED: Prefer use <Paragraph /> with '@kisskissbankbank/kitten/src/components/typography/paragraph/next' import.
import React, { Component } from 'react';
import classNames from 'classnames';
export var Paragraph = /*#__PURE__*/function (_Component) {
  _inherits(Paragraph, _Component);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _super.apply(this, arguments);
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          margin = _this$props.margin,
          normalLineHeight = _this$props.normalLineHeight,
          italic = _this$props.italic,
          other = _objectWithoutProperties(_this$props, ["className", "tag", "modifier", "margin", "normalLineHeight", "italic"]);

      var paragraphClassNames = classNames('k-Paragraph', className, "k-Paragraph--".concat(modifier), {
        'k-Paragraph--withoutMargin': !margin,
        'k-Paragraph--normalLineHeight': normalLineHeight,
        'k-Paragraph--italic': italic
      });
      var Tag = tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: paragraphClassNames
      }, other));
    }
  }]);

  return Paragraph;
}(Component);
Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  margin: true,
  normalLineHeight: false,
  italic: false
};