import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { HeartIcon } from '../../../../components/icons/heart-icon';
import COLORS from '../../../../constants/colors-config';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
var StyledButton = styled.button.withConfig({
  displayName: "like-button__StyledButton",
  componentId: "wk7ovs-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;height:", ";padding:0 ", ";border:", " solid ", ";background-color:", ";", ";font-size:", ";color:", ";text-decoration:none;appareance:none;box-sizing:border-box;&:focus{outline:", " solid ", ";outline-offset:", ";}&[aria-pressed='true']{svg{fill:", ";}}", ""], pxToRem(40), pxToRem(15), pxToRem(2), COLORS.line1, COLORS.background1, TYPOGRAPHY.fontStyles.regular, pxToRem(12), COLORS.font1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.error, function (_ref) {
  var as = _ref.as,
      onClick = _ref.onClick;
  return (as === 'a' || onClick) && css(["cursor:pointer;:hover{svg{fill:", ";}}:focus,:active{border-color:", ";}"], COLORS.error, COLORS.line2);
});
var StyledHeartIcon = styled(HeartIcon).withConfig({
  displayName: "like-button__StyledHeartIcon",
  componentId: "wk7ovs-1"
})(["width:", ";height:", ";margin-right:", ";overflow:hidden;transition:fill 0.2s;"], pxToRem(14), pxToRem(12), pxToRem(10));
export var LikeButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(LikeButton, _PureComponent);

  var _super = _createSuper(LikeButton);

  function LikeButton() {
    _classCallCheck(this, LikeButton);

    return _super.apply(this, arguments);
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          accessibilityLabel = _this$props.accessibilityLabel,
          hasLiked = _this$props.hasLiked,
          props = _objectWithoutProperties(_this$props, ["children", "accessibilityLabel", "hasLiked"]);

      return /*#__PURE__*/React.createElement(StyledButton, _extends({
        role: "button",
        "aria-pressed": "".concat(hasLiked)
      }, props), accessibilityLabel && /*#__PURE__*/React.createElement(VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/React.createElement(StyledHeartIcon, {
        "aria-hidden": "true",
        focusable: "false"
      }), children);
    }
  }]);

  return LikeButton;
}(PureComponent);
LikeButton.propTypes = {
  children: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string,
  hasLiked: PropTypes.bool
};
LikeButton.defaultProps = {
  accessibilityLabel: '',
  hasLiked: false
};