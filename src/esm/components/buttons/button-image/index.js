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
export var ButtonImage = /*#__PURE__*/function (_Component) {
  _inherits(ButtonImage, _Component);

  var _super = _createSuper(ButtonImage);

  function ButtonImage() {
    _classCallCheck(this, ButtonImage);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonImage, [{
    key: "renderImage",
    value: function renderImage(props) {
      if (!props) return null;

      var className = props.className,
          alt = props.alt,
          others = _objectWithoutProperties(props, ["className", "alt"]);

      var imgClassName = classNames('k-ButtonImage__img', className);
      return /*#__PURE__*/React.createElement("img", _extends({
        className: imgClassName,
        alt: alt || ''
      }, others));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          tiny = _this$props.tiny,
          big = _this$props.big,
          huge = _this$props.huge,
          withoutPointerEvents = _this$props.withoutPointerEvents,
          withBorder = _this$props.withBorder,
          img = _this$props.img,
          others = _objectWithoutProperties(_this$props, ["tag", "className", "tiny", "big", "huge", "withoutPointerEvents", "withBorder", "img"]);

      var buttonClassName = classNames('k-ButtonImage', {
        'k-ButtonImage--tiny': tiny,
        'k-ButtonImage--big': big,
        'k-ButtonImage--huge': huge,
        'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
        'k-ButtonImage--withBorder': withBorder
      }, className); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: buttonClassName,
        tabIndex: tabindex
      }, others), this.renderImage(img));
    }
  }]);

  return ButtonImage;
}(Component);
ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  tiny: false,
  big: false,
  huge: false,
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null
  }
};