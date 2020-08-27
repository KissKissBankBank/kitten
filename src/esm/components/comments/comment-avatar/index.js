import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonImage } from '../../../components/buttons/button-image';
import { Text } from '../../../components/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledAvatar = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatar",
  componentId: "sc-10x87zp-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
var StyledPosition = styled.div.withConfig({
  displayName: "comment-avatar__StyledPosition",
  componentId: "sc-10x87zp-1"
})(["position:relative;margin-bottom:", ";"], pxToRem(10));
var buttonImgHuge = pxToRem(80);
var buttonImgBig = pxToRem(50);
var StyledButtonImage = styled(ButtonImage).withConfig({
  displayName: "comment-avatar__StyledButtonImage",
  componentId: "sc-10x87zp-2"
})(["border-radius:50%;height:", ";width:", ";@media (min-width:", "px){height:", ";width:", ";}"], buttonImgBig, buttonImgBig, ScreenConfig.S.min, buttonImgHuge, buttonImgHuge);
var StyledAvatarBadge = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatarBadge",
  componentId: "sc-10x87zp-3"
})(["position:absolute;right:0;top:0;"]);
export var CommentAvatar = /*#__PURE__*/function (_PureComponent) {
  _inherits(CommentAvatar, _PureComponent);

  var _super = _createSuper(CommentAvatar);

  function CommentAvatar() {
    _classCallCheck(this, CommentAvatar);

    return _super.apply(this, arguments);
  }

  _createClass(CommentAvatar, [{
    key: "render",
    value: function render() {
      var avatarImgProps = this.props.avatarImgProps;
      return /*#__PURE__*/React.createElement(StyledAvatar, null, /*#__PURE__*/React.createElement(StyledPosition, null, this.renderBadge(), /*#__PURE__*/React.createElement(StyledButtonImage, {
        tag: "span",
        withoutPointerEvents: true,
        img: avatarImgProps
      })), this.renderDate());
    }
  }, {
    key: "renderBadge",
    value: function renderBadge() {
      var avatarBadge = this.props.avatarBadge;
      if (!avatarBadge) return;
      return /*#__PURE__*/React.createElement(StyledAvatarBadge, null, avatarBadge);
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      var commentDate = this.props.commentDate;
      if (!commentDate) return;
      return /*#__PURE__*/React.createElement(Text, {
        size: "micro",
        weight: "light",
        color: "font1"
      }, commentDate);
    }
  }]);

  return CommentAvatar;
}(PureComponent);
CommentAvatar.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string,
  avatarBadge: PropTypes.node
};
CommentAvatar.defaultProps = {
  commentDate: '',
  avatarBadge: ''
};