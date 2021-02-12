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
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
var StyledText = styled.span.withConfig({
  displayName: "text__StyledText",
  componentId: "sc-1jqe2sw-0"
})(["", ""], function (_ref) {
  var cssColor = _ref.cssColor;
  return cssColor && css(["color:", ";"], cssColor);
});
export var Text = /*#__PURE__*/function (_Component) {
  _inherits(Text, _Component);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          cssColor = _this$props.cssColor,
          decoration = _this$props.decoration,
          lineHeight = _this$props.lineHeight,
          setting = _this$props.setting,
          size = _this$props.size,
          fontStyle = _this$props.fontStyle,
          tag = _this$props.tag,
          transform = _this$props.transform,
          weight = _this$props.weight,
          others = _objectWithoutProperties(_this$props, ["className", "color", "cssColor", "decoration", "lineHeight", "setting", "size", "fontStyle", "tag", "transform", "weight"]);

      var textClassName = classNames({
        // Color.
        'k-u-color-font1': color == 'font1',
        'k-u-color-font2': color == 'font2',
        'k-u-color-primary1': color == 'primary1',
        'k-u-color-background1': color == 'background1',
        'k-u-color-error': color == 'error',
        'k-u-color-valid': color == 'valid',
        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',
        'k-u-decoration-none': decoration == 'none',
        // Line height.
        'k-u-line-height-normal': lineHeight == 'normal',
        'k-u-line-height-1': lineHeight == '1',
        'k-u-line-height-1-3': lineHeight == '1.3',
        // Font Feature Settings.
        'k-u-font-setting-tnum': setting == 'tnum',
        // Monospaced numbers.
        // Size.
        'k-u-size-giant': size == 'giant',
        'k-u-size-huge': size == 'huge',
        'k-u-size-big': size == 'big',
        'k-u-size-default': size == 'default',
        'k-u-size-tiny': size == 'tiny',
        'k-u-size-micro': size == 'micro',
        'k-u-size-nano': size == 'nano',
        // Style.
        'k-u-style-normal': fontStyle == 'normal',
        'k-u-style-italic': fontStyle == 'italic',
        // Transform.
        'k-u-transform-uppercase': transform == 'uppercase',
        // Weight.
        'k-u-weight-light': weight == 'light',
        'k-u-weight-regular': weight == 'regular',
        'k-u-weight-bold': weight == 'bold'
      }, className);
      return /*#__PURE__*/React.createElement(StyledText, _extends({
        as: tag
      }, others, {
        className: textClassName
      }));
    }
  }]);

  return Text;
}(Component);
Text.propTypes = {
  /**
    Available colors:
  */
  color: PropTypes.oneOf(['font1', 'font2', 'primary1', 'background1', 'error', 'valid']),

  /**
    Specify a custom color (as a CSS color string).
  */
  cssColor: PropTypes.string,

  /**
    If `tag="a"`, show underline.
  */
  decoration: PropTypes.oneOf(['underline', 'none']),

  /**
    `font-feature-settings: 'tnum'` enables tabular (monospace) numerals.
  **/
  setting: PropTypes.oneOf(['tnum']),

  /**
    `line-height: normal` correspond approximately to 1.2.
  */
  lineHeight: PropTypes.oneOf(['normal', '1', '1.3']),

  /**
    Available sizes:
  */
  size: PropTypes.oneOf(['giant', 'huge', 'big', 'default', 'tiny', 'micro', 'nano']),

  /**
    Available font styles (`normal` or `italic`):
  */
  fontStyle: PropTypes.oneOf(['normal', 'italic']),

  /**
    `text-transform: uppercase`
  */
  transform: PropTypes.oneOf(['uppercase']),

  /**
    Available font weights (`light`, `regular` or `italic`):
  */
  weight: PropTypes.oneOf(['light', 'regular', 'bold'])
};
Text.defaultProps = {
  className: null,
  color: null,
  cssColor: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: null
};