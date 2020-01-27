"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _commentAvatar = require("../../../components/comments/comment-avatar");

var _text = require("../../../components/typography/text");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _likeButton = require("./components/like-button");

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

var desktopPadding = (0, _typography.pxToRem)(30);
var tabletAndMobilePadding = (0, _typography.pxToRem)(20);
var StyledContentText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "comment__StyledContentText",
  componentId: "sc-8s8e85-0"
})(["font-size:", ";@media (min-width:", "px){font-size:", ";}"], (0, _typography.stepToRem)(-1), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(0));

var StyledCommentArrow = _styledComponents.default.span.withConfig({
  displayName: "comment__StyledCommentArrow",
  componentId: "sc-8s8e85-1"
})(["position:absolute;top:", ";display:block;width:0;height:0;border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:", ";@media (min-width:", "px){top:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.background3, (0, _typography.pxToRem)(-20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35));

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledGrid",
  componentId: "sc-8s8e85-2"
})(["display:flex;"]);

var StyledCommentContainer = _styledComponents.default.span.withConfig({
  displayName: "comment__StyledCommentContainer",
  componentId: "sc-8s8e85-3"
})(["position:relative;margin-left:", ";flex:1;@media (min-width:", "px){margin-left:", ";}"], (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35));

var StyledCommentContent = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledCommentContent",
  componentId: "sc-8s8e85-4"
})(["border-width:", ";background-color:", ";border-color:", ";color:", ";font-size:", ";padding:", ";@media (min-width:", "px){padding-top:", ";padding-right:", ";padding-left:", ";}"], (0, _typography.pxToRem)(2), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font1, (0, _typography.stepToRem)(0), tabletAndMobilePadding, _screenConfig.ScreenConfig.M.min, desktopPadding, desktopPadding, desktopPadding);

var StyledMargerText = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledMargerText",
  componentId: "sc-8s8e85-5"
})(["", " ", ""], function (_ref) {
  var hasLikeButton = _ref.hasLikeButton;
  return hasLikeButton && (0, _styledComponents.css)(["margin-bottom:", ";@media (min-width:", "px){margin-bottom:", ";}"], (0, _typography.pxToRem)(15), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(20));
}, function (_ref2) {
  var ownerName = _ref2.ownerName;
  return ownerName && (0, _styledComponents.css)(["margin-top:", ";"], (0, _typography.pxToRem)(10));
});

var StyledBottomNotes = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "comment__StyledBottomNotes",
  componentId: "sc-8s8e85-6"
})(["padding-left:", ";margin-top:0;"], (0, _typography.pxToRem)(30));

var StyledLikeButtonBox = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledLikeButtonBox",
  componentId: "sc-8s8e85-7"
})(["position:absolute;right:0;margin-top:", ";margin-right:", ";@media (min-width:", "px){margin-right:", ";}"], (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(30));

var Comment = function Comment(_ref3) {
  var text = _ref3.text,
      ownerName = _ref3.ownerName,
      avatarImgProps = _ref3.avatarImgProps,
      commentDate = _ref3.commentDate,
      bottomNotes = _ref3.bottomNotes,
      likeButtonProps = _ref3.likeButtonProps,
      avatarBadge = _ref3.avatarBadge,
      id = _ref3.id;
  var likeButtonElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      likeButtonWidth = _useState2[0],
      setLikeButtonWidth = _useState2[1];

  (0, _react.useEffect)(function () {
    var marginLeftAndRight = 40;

    var elementWidth = _elementHelper.default.getComputedWidth(likeButtonElement.current);

    setLikeButtonWidth(elementWidth + marginLeftAndRight);
  }, []);
  return _react.default.createElement(StyledGrid, {
    id: id
  }, _react.default.createElement(_commentAvatar.CommentAvatar, {
    avatarImgProps: avatarImgProps,
    commentDate: commentDate,
    avatarBadge: avatarBadge
  }), _react.default.createElement(StyledCommentContainer, null, _react.default.createElement(StyledCommentContent, null, ownerName && _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(_text.Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, ownerName)), _react.default.createElement(StyledMargerText, {
    hasLikeButton: !!likeButtonProps.children,
    ownerName: ownerName
  }, _react.default.createElement(StyledContentText, {
    color: "font1",
    weight: "light"
  }, text)), _react.default.createElement(StyledCommentArrow, null)), likeButtonProps.children && _react.default.createElement(StyledLikeButtonBox, {
    ref: likeButtonElement
  }, _react.default.createElement(_likeButton.LikeButton, likeButtonProps)), bottomNotes && _react.default.createElement(_marger.Marger, {
    top: ".5",
    style: {
      marginRight: likeButtonWidth
    }
  }, _react.default.createElement(StyledBottomNotes, {
    tag: "div",
    color: "font1",
    size: "micro",
    weight: "bold"
  }, bottomNotes))));
};

exports.Comment = Comment;
Comment.propTypes = {
  text: _propTypes.default.node.isRequired,
  ownerName: _propTypes.default.string,
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string.isRequired,
  bottomNotes: _propTypes.default.node,
  likeButtonProps: _propTypes.default.object,
  avatarBadge: _propTypes.default.node
};
Comment.defaultProps = {
  bottomNotes: '',
  ownerName: '',
  likeButtonProps: {},
  avatarBadge: ''
};