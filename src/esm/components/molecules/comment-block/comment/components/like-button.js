import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["children", "accessibilityLabel", "hasLiked"];
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../../constants/typography-config';
import { HeartIcon } from '../../../../../components/graphics/icons/heart-icon';
import COLORS from '../../../../../constants/colors-config';
import { VisuallyHidden } from '../../../../accessibility/visually-hidden';
var StyledButton = styled.button.withConfig({
  displayName: "like-button__StyledButton",
  componentId: "sc-1pscjnx-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;height:", ";padding:0 ", ";border:", " solid ", ";background-color:", ";", ";font-size:", ";color:", ";text-decoration:none;appareance:none;box-sizing:border-box;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-pressed='true']{svg{fill:", ";}}", ""], pxToRem(40), pxToRem(15), pxToRem(2), COLORS.line1, COLORS.background1, TYPOGRAPHY.fontStyles.regular, pxToRem(12), COLORS.font1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, COLORS.error, function (_ref) {
  var as = _ref.as,
      onClick = _ref.onClick;
  return (as === 'a' || onClick) && css(["cursor:pointer;:hover{svg{fill:", ";}}:focus,:active{border-color:", ";}"], COLORS.error, COLORS.line2);
});
var StyledHeartIcon = styled(HeartIcon).withConfig({
  displayName: "like-button__StyledHeartIcon",
  componentId: "sc-1pscjnx-1"
})(["width:", ";height:", ";margin-right:", ";overflow:hidden;transition:fill 0.2s;"], pxToRem(14), pxToRem(12), pxToRem(10));
export var LikeButton = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(LikeButton, _PureComponent);

  function LikeButton() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = LikeButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        accessibilityLabel = _this$props.accessibilityLabel,
        hasLiked = _this$props.hasLiked,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React.createElement(StyledButton, _extends({
      role: "button",
      "aria-pressed": "" + hasLiked
    }, props), accessibilityLabel && /*#__PURE__*/React.createElement(VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/React.createElement(StyledHeartIcon, {
      "aria-hidden": "true",
      focusable: "false"
    }), children);
  };

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