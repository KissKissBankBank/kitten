"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = exports.CommentComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _commentAvatar = require("kitten/components/form/comment-avatar");

var _text = require("kitten/components/typography/text");

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = (0, _radium.default)(_text.Text);

var CommentContent = function CommentContent(_ref) {
  var text = _ref.text,
      ownerName = _ref.ownerName,
      viewportIsMobile = _ref.viewportIsMobile,
      style = _ref.style;
  return _react.default.createElement(_radium.StyleRoot, {
    style: style
  }, _react.default.createElement(_marger.Marger, {
    bottom: "1"
  }, _react.default.createElement(Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, ownerName)), _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(Text, {
    color: "font1",
    size: viewportIsMobile ? 'tiny' : 'default',
    weight: "light"
  }, text)), _react.default.createElement("span", {
    style: styles.comment.arrow
  }));
};

var CommentComponent = function CommentComponent(_ref2) {
  var text = _ref2.text,
      ownerName = _ref2.ownerName,
      avatarImgProps = _ref2.avatarImgProps,
      commentDate = _ref2.commentDate,
      viewportIsMobile = _ref2.viewportIsMobile,
      bottomNotes = _ref2.bottomNotes;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
    style: styles.grid
  }, _react.default.createElement(_commentAvatar.CommentAvatar, {
    avatarImgProps: avatarImgProps,
    commentDate: commentDate
  }), _react.default.createElement(_radium.StyleRoot, {
    style: styles.commentContent
  }, _react.default.createElement(CommentContent, {
    style: styles.comment,
    text: text,
    ownerName: ownerName,
    viewportIsMobile: viewportIsMobile
  }), bottomNotes && _react.default.createElement(_marger.Marger, {
    top: ".5"
  }, _react.default.createElement(Text, {
    style: styles.bottomNotes,
    tag: "p",
    color: "font1",
    size: "micro",
    weight: "bold"
  }, bottomNotes)))));
};

exports.CommentComponent = CommentComponent;
CommentComponent.propTypes = {
  text: _propTypes.default.node.isRequired,
  ownerName: _propTypes.default.string.isRequired,
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string.isRequired,
  viewportIsMobile: _propTypes.default.bool.isRequired,
  bottomNotes: _propTypes.default.node
};
CommentComponent.defaultProps = {
  bottomNotes: ''
};
var styles = {
  grid: {
    display: 'flex'
  },
  commentContent: _defineProperty({
    position: 'relative',
    marginLeft: 20
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
    marginLeft: 35
  }),
  bottomNotes: {
    paddingLeft: 30
  },
  comment: {
    borderWidth: 2,
    backgroundColor: _colorsConfig.default.background3,
    borderColor: _colorsConfig.default.background3,
    color: _colorsConfig.default.font1,
    padding: 30,
    fontSize: 16,
    arrow: _defineProperty({
      position: 'absolute',
      top: 20,
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: _colorsConfig.default.background3,
      left: -20
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      top: 35
    })
  }
};
var Comment = (0, _mediaQueries.mediaQueries)((0, _radium.default)(CommentComponent), {
  viewportIsMobile: true
});
exports.Comment = Comment;