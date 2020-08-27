import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
var StyledTagButton = styled(function (_ref) {
  var selected = _ref.selected,
      icon = _ref.icon,
      tiny = _ref.tiny,
      big = _ref.big,
      modifier = _ref.modifier,
      others = _objectWithoutProperties(_ref, ["selected", "icon", "tiny", "big", "modifier"]);

  return /*#__PURE__*/React.createElement("button", others);
}).withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1cbu4s-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:", ";border-width:", ";border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;outline:none;cursor:pointer;:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}", " ", " ", " ", " ", " ", ""], pxToRem(40), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(40), pxToRem(60), pxToRem(4), pxToRem(2), TYPOGRAPHY.fontStyles.regular, stepToRem(-2), COLORS.font1, pxToRem(10), function (_ref2) {
  var icon = _ref2.icon;
  return icon && css(["", ""], hydrogen);
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && css(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}"], pxToRem(30), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(40), pxToRem(60));
}, function (_ref4) {
  var big = _ref4.big;
  return big && css(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}"], pxToRem(50), pxToRem(80), pxToRem(30), stepToRem(-1), pxToRem(50), pxToRem(80));
}, function (_ref5) {
  var modifier = _ref5.modifier;
  return (modifier === 'helium' || 'hydrogen') && css(["", ""], hydrogen);
}, function (_ref6) {
  var modifier = _ref6.modifier;
  return modifier === 'carbon' && css(["color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}"], COLORS.font1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1);
}, function (_ref7) {
  var selected = _ref7.selected;
  return selected && css(["color:", ";border-color:", ";background-color:", ";"], COLORS.background1, COLORS.primary1, COLORS.primary1);
});
var hydrogen = css(["color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}"], COLORS.font1, COLORS.line1, COLORS.background1, COLORS.background1, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.background1);
export var TagButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(TagButton, _PureComponent);

  var _super = _createSuper(TagButton);

  function TagButton() {
    _classCallCheck(this, TagButton);

    return _super.apply(this, arguments);
  }

  _createClass(TagButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          modifier = _this$props.modifier,
          selected = _this$props.selected,
          tiny = _this$props.tiny,
          big = _this$props.big,
          icon = _this$props.icon,
          others = _objectWithoutProperties(_this$props, ["children", "modifier", "selected", "tiny", "big", "icon"]);

      return /*#__PURE__*/React.createElement(StyledTagButton, _extends({
        modifier: modifier,
        selected: selected,
        tiny: tiny,
        big: big,
        icon: icon
      }, others), children);
    }
  }]);

  return TagButton;
}(PureComponent);
TagButton.propTypes = {
  modifier: PropTypes.string,
  tiny: PropTypes.bool,
  big: PropTypes.bool,
  icon: PropTypes.bool,
  selected: PropTypes.bool
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  selected: false
};