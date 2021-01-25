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
import styled from 'styled-components';
import { card } from '../../../hoc/card';
import { Image } from './components/image';
import { TitleComponent } from './components/title';
import { Subtitle } from './components/subtitle';
import { Paragraph } from './components/paragraph';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
var ContainerStyle = styled.a.withConfig({
  displayName: "simple-card__ContainerStyle",
  componentId: "sc-1g5bppt-0"
})(["line-height:1;position:relative;&[href]:focus{outline:", " solid ", ";outline-offset:", ";}"], COLORS.primary4, pxToRem(2), pxToRem(2));

var SimpleCardComponent = /*#__PURE__*/function (_Component) {
  _inherits(SimpleCardComponent, _Component);

  var _super = _createSuper(SimpleCardComponent);

  function SimpleCardComponent() {
    _classCallCheck(this, SimpleCardComponent);

    return _super.apply(this, arguments);
  }

  _createClass(SimpleCardComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          withPlayerButtonOnImage = _this$props.withPlayerButtonOnImage,
          arrowColor = _this$props.arrowColor,
          ariaLabel = _this$props.ariaLabel,
          href = _this$props.href,
          title = _this$props.title,
          titleProps = _this$props.titleProps,
          subtitle = _this$props.subtitle,
          paragraph = _this$props.paragraph,
          imageContainerRatio = _this$props.imageContainerRatio,
          imageContainerBackground = _this$props.imageContainerBackground,
          others = _objectWithoutProperties(_this$props, ["imageProps", "withPlayerButtonOnImage", "arrowColor", "ariaLabel", "href", "title", "titleProps", "subtitle", "paragraph", "imageContainerRatio", "imageContainerBackground"]);

      return /*#__PURE__*/React.createElement(ContainerStyle, _extends({}, others, {
        as: href ? 'a' : 'div',
        href: href
      }), /*#__PURE__*/React.createElement(Image, {
        imageContainerRatio: imageContainerRatio,
        imageContainerBackground: imageContainerBackground,
        imageProps: imageProps,
        withPlayerButtonOnImage: withPlayerButtonOnImage,
        arrowColor: arrowColor,
        ariaLabel: ariaLabel
      }), title && /*#__PURE__*/React.createElement(TitleComponent, {
        title: title,
        titleProps: titleProps
      }), subtitle && /*#__PURE__*/React.createElement(Subtitle, {
        subtitle: subtitle
      }), paragraph && /*#__PURE__*/React.createElement(Paragraph, {
        paragraph: paragraph
      }));
    }
  }]);

  return SimpleCardComponent;
}(Component);

export var SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true
});