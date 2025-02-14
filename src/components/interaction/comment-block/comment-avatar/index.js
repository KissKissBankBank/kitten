"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CommentAvatar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonImage = require("../../../action/button-image");

var _text = require("../../../typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledAvatar = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledAvatar",
  componentId: "sc-j9ccmz-0"
})(["display:flex;flex-direction:column;align-items:center;"]);

const StyledPosition = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledPosition",
  componentId: "sc-j9ccmz-1"
})(["position:relative;"]);

const buttonImgHuge = (0, _typography.pxToRem)(80);
const buttonImgBig = (0, _typography.pxToRem)(50);
const StyledButtonImage = (0, _styledComponents.default)(_buttonImage.ButtonImage).withConfig({
  displayName: "comment-avatar__StyledButtonImage",
  componentId: "sc-j9ccmz-2"
})(["border-radius:var(--border-radius-rounded);height:", ";width:", ";@media (min-width:", "px){height:", ";width:", ";}"], buttonImgBig, buttonImgBig, _screenConfig.ScreenConfig.S.min, buttonImgHuge, buttonImgHuge);

const StyledAvatarBadge = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledAvatarBadge",
  componentId: "sc-j9ccmz-3"
})(["position:absolute;right:0;top:0;"]);

class CommentAvatar extends _react.PureComponent {
  render() {
    const {
      avatarImgProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(StyledAvatar, null, /*#__PURE__*/_react.default.createElement(StyledPosition, null, this.renderBadge(), /*#__PURE__*/_react.default.createElement(StyledButtonImage, {
      tag: "span",
      withoutPointerEvents: true,
      img: avatarImgProps
    })), this.renderDate());
  }

  renderBadge() {
    const {
      avatarBadge
    } = this.props;
    if (!avatarBadge) return;
    return /*#__PURE__*/_react.default.createElement(StyledAvatarBadge, null, avatarBadge);
  }

  renderDate() {
    const {
      commentDate
    } = this.props;
    if (!commentDate) return;
    return /*#__PURE__*/_react.default.createElement(_text.Text, {
      size: "micro",
      weight: "400",
      color: "font1"
    }, commentDate);
  }

}

exports.CommentAvatar = CommentAvatar;
CommentAvatar.propTypes = {
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string,
  avatarBadge: _propTypes.default.node
};
CommentAvatar.defaultProps = {
  commentDate: '',
  avatarBadge: ''
};