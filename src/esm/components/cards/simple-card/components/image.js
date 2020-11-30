import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Text } from '../../../../components/typography/text';
import { Marger } from '../../../../components/layout/marger';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
var StyledImage = styled.img.withConfig({
  displayName: "image__StyledImage",
  componentId: "sc-8olw7b-0"
})(["width:100%;display:block;"]);
var playerButtonSize = pxToRem(70);
var StyledPlayerButton = styled.div.withConfig({
  displayName: "image__StyledPlayerButton",
  componentId: "sc-8olw7b-1"
})(["width:", ";height:", ";background:", ";position:absolute;top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);display:flex;align-items:center;justify-content:center;z-index:2;"], playerButtonSize, playerButtonSize, COLORS.font1, playerButtonSize, playerButtonSize);
var StyledImageContainer = styled(Marger).withConfig({
  displayName: "image__StyledImageContainer",
  componentId: "sc-8olw7b-2"
})(["position:relative;transition:opacity ease 600ms,z-index ease 600ms;z-index:1;background-color:", ";", ""], function (_ref) {
  var imageContainerBackground = _ref.imageContainerBackground;
  return imageContainerBackground;
}, function (_ref2) {
  var imageContainerRatio = _ref2.imageContainerRatio;
  return imageContainerRatio && css(["overflow:hidden;position:relative;padding-top:calc(100% / calc(", "));& > img{position:absolute;top:0;height:auto;text-align:center;}"], imageContainerRatio);
});
export var Image = /*#__PURE__*/function (_PureComponent) {
  _inherits(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          withPlayerButtonOnImage = _this$props.withPlayerButtonOnImage,
          arrowColor = _this$props.arrowColor,
          ariaLabel = _this$props.ariaLabel,
          imageContainerBackground = _this$props.imageContainerBackground,
          imageContainerRatio = _this$props.imageContainerRatio;

      var PlayerButtonOnImage = function PlayerButtonOnImage(props) {
        return /*#__PURE__*/React.createElement(StyledPlayerButton, null, /*#__PURE__*/React.createElement(Text, {
          size: "default",
          weight: "regular",
          color: props.arrowColor,
          "aria-label": props.ariaLabel
        }, "\u25BA"));
      };

      return /*#__PURE__*/React.createElement(StyledImageContainer, {
        bottom: "2",
        className: "k-Card__imageContainer",
        imageContainerBackground: imageContainerBackground,
        imageContainerRatio: imageContainerRatio
      }, withPlayerButtonOnImage && /*#__PURE__*/React.createElement(PlayerButtonOnImage, {
        arrowColor: arrowColor,
        ariaLabel: ariaLabel
      }), /*#__PURE__*/React.createElement(StyledImage, _extends({}, imageProps, {
        alt: imageProps.alt || '',
        className: "k-Card__image"
      })));
    }
  }]);

  return Image;
}(PureComponent);
Image.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  withPlayerButtonOnImage: PropTypes.bool,
  ariaLabel: PropTypes.string,
  arrowColor: PropTypes.string,
  href: PropTypes.string,
  imageContainerBackground: PropTypes.string,
  imageContainerRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Image.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: COLORS.line1
};