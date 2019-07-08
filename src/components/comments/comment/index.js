"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _commentAvatar = require("../../../components/comments/comment-avatar");

var _text = require("../../../components/typography/text");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledContentText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "comment__StyledContentText",
  componentId: "sc-8s8e85-0"
})(["font-size:", ";@media (min-width:", "px){font-size:", ";}"], (0, _typography.stepToRem)(-1), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(0));

var StyledCommentArrow = _styledComponents.default.span.withConfig({
  displayName: "comment__StyledCommentArrow",
  componentId: "sc-8s8e85-1"
})(["position:absolute;top:", ";display:block;width:0;height:0;border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:-", ";@media (min-width:", "px){top:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.background3, (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35));

var StyledGrid = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledGrid",
  componentId: "sc-8s8e85-2"
})(["display:flex;"]);

var StyledCommentContainer = _styledComponents.default.span.withConfig({
  displayName: "comment__StyledCommentContainer",
  componentId: "sc-8s8e85-3"
})(["position:relative;margin-left:", ";@media (min-width:", "px){margin-left:", ",},"], (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(35));

var StyledCommentContent = _styledComponents.default.div.withConfig({
  displayName: "comment__StyledCommentContent",
  componentId: "sc-8s8e85-4"
})(["border-width:", ";background-color:", ";border-color:", ";color:", ";padding:", ";font-size:", ";"], (0, _typography.pxToRem)(2), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.stepToRem)(0));

var StyledBottomNotes = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "comment__StyledBottomNotes",
  componentId: "sc-8s8e85-5"
})(["padding-left:", ";margin-top:0;"], (0, _typography.pxToRem)(30));

var Comment =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Comment, _PureComponent);

  function Comment() {
    (0, _classCallCheck2.default)(this, Comment);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Comment).apply(this, arguments));
  }

  (0, _createClass2.default)(Comment, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          ownerName = _this$props.ownerName,
          avatarImgProps = _this$props.avatarImgProps,
          commentDate = _this$props.commentDate,
          bottomNotes = _this$props.bottomNotes,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["text", "ownerName", "avatarImgProps", "commentDate", "bottomNotes"]);
      return _react.default.createElement(StyledGrid, null, _react.default.createElement(_commentAvatar.CommentAvatar, {
        avatarImgProps: avatarImgProps,
        commentDate: commentDate
      }), _react.default.createElement(StyledCommentContainer, null, _react.default.createElement(StyledCommentContent, null, ownerName && _react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, _react.default.createElement(_text.Text, {
        color: "font1",
        size: "tiny",
        weight: "regular"
      }, ownerName)), _react.default.createElement(_marger.Marger, {
        top: ownerName ? 1 : null
      }, _react.default.createElement(StyledContentText, {
        color: "font1",
        weight: "light"
      }, text)), _react.default.createElement(StyledCommentArrow, null)), bottomNotes && _react.default.createElement(_marger.Marger, {
        top: ".5"
      }, _react.default.createElement(StyledBottomNotes, {
        tag: "p",
        color: "font1",
        size: "micro",
        weight: "bold"
      }, bottomNotes))));
    }
  }]);
  return Comment;
}(_react.PureComponent);

exports.Comment = Comment;
Comment.propTypes = {
  text: _propTypes.default.node.isRequired,
  ownerName: _propTypes.default.string,
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string.isRequired,
  bottomNotes: _propTypes.default.node
};
Comment.defaultProps = {
  bottomNotes: '',
  ownerName: ''
};