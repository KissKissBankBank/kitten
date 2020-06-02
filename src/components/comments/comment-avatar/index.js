"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAvatar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonImage = require("../../../components/buttons/button-image");

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledAvatar = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledAvatar",
  componentId: "sc-10x87zp-0"
})(["display:flex;flex-direction:column;align-items:center;"]);

var StyledPosition = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledPosition",
  componentId: "sc-10x87zp-1"
})(["position:relative;margin-bottom:", ";"], (0, _typography.pxToRem)(10));

var buttonImgHuge = (0, _typography.pxToRem)(80);
var buttonImgBig = (0, _typography.pxToRem)(50);
var StyledButtonImage = (0, _styledComponents.default)(_buttonImage.ButtonImage).withConfig({
  displayName: "comment-avatar__StyledButtonImage",
  componentId: "sc-10x87zp-2"
})(["border-radius:50%;height:", ";width:", ";@media (min-width:", "px){height:", ";width:", ";}"], buttonImgBig, buttonImgBig, _screenConfig.ScreenConfig.S.min, buttonImgHuge, buttonImgHuge);

var StyledAvatarBadge = _styledComponents.default.div.withConfig({
  displayName: "comment-avatar__StyledAvatarBadge",
  componentId: "sc-10x87zp-3"
})(["position:absolute;right:0;top:0;"]);

var CommentAvatar = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(CommentAvatar, _PureComponent);

  var _super = _createSuper(CommentAvatar);

  function CommentAvatar() {
    (0, _classCallCheck2.default)(this, CommentAvatar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CommentAvatar, [{
    key: "render",
    value: function render() {
      var avatarImgProps = this.props.avatarImgProps;
      return /*#__PURE__*/_react.default.createElement(StyledAvatar, null, /*#__PURE__*/_react.default.createElement(StyledPosition, null, this.renderBadge(), /*#__PURE__*/_react.default.createElement(StyledButtonImage, {
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
      return /*#__PURE__*/_react.default.createElement(StyledAvatarBadge, null, avatarBadge);
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      var commentDate = this.props.commentDate;
      if (!commentDate) return;
      return /*#__PURE__*/_react.default.createElement(_text.Text, {
        size: "micro",
        weight: "light",
        color: "font1"
      }, commentDate);
    }
  }]);
  return CommentAvatar;
}(_react.PureComponent);

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