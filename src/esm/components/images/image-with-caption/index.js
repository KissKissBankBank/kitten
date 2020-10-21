import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
export var ImageWithCaption = /*#__PURE__*/function (_Component) {
  _inherits(ImageWithCaption, _Component);

  var _super = _createSuper(ImageWithCaption);

  function ImageWithCaption() {
    _classCallCheck(this, ImageWithCaption);

    return _super.apply(this, arguments);
  }

  _createClass(ImageWithCaption, [{
    key: "renderCaption",
    value: function renderCaption() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          captionProps = _this$props.captionProps;
      var figcaptionClassName = classNames('k-ImageWithCaption__caption', className);
      return /*#__PURE__*/React.createElement("figcaption", _extends({
        className: figcaptionClassName
      }, captionProps), children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          imageSrc = _this$props2.imageSrc,
          imageAlt = _this$props2.imageAlt,
          imageWidth = _this$props2.imageWidth,
          imageHeight = _this$props2.imageHeight,
          captionProps = _this$props2.captionProps,
          others = _objectWithoutProperties(_this$props2, ["imageSrc", "imageAlt", "imageWidth", "imageHeight", "captionProps"]);

      return /*#__PURE__*/React.createElement("figure", _extends({
        className: "k-ImageWithCaption"
      }, others), /*#__PURE__*/React.createElement("img", {
        src: imageSrc,
        alt: imageAlt,
        width: imageWidth,
        height: imageHeight,
        className: "k-ImageWithCaption__img"
      }), this.renderCaption());
    }
  }]);

  return ImageWithCaption;
}(Component);
ImageWithCaption.defaultProps = {
  children: 'Lorem ipsum dolor',
  imageSrc: 'https://placehold.it/300x400/caf4fe/caf4fe',
  imageAlt: '',
  imageWidth: null,
  imageHeight: null,
  captionProps: null
};