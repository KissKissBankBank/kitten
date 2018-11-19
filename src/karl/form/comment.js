"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlComment = exports.KarlCommentForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _comment = require("kitten/components/form/comment");

var _commentForm = require("kitten/components/form/comment-form");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/karl/examples/title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlCommentForm = function KarlCommentForm() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.KarlExampleTitle, null, "Comment form"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_commentForm.CommentForm, {
    avatarImgProps: {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    },
    placeholder: "Leave a comment on the project",
    commentButton: "Comment"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Comment form error"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_commentForm.CommentForm, {
    avatarImgProps: {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    },
    placeholder: "Leave a comment on the project",
    commentButton: "Comment",
    errorMessage: "Cum sociis natoque penatibus et magnis",
    error: true
  }))));
};

exports.KarlCommentForm = KarlCommentForm;

var KarlComment = function KarlComment() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.KarlExampleTitle, null, "Comment"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_comment.Comment, {
    avatarImgProps: {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    },
    commentDate: "2 min",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    ownerName: "Lorem ipsum"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Comment with bottom notes"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_comment.Comment, {
    avatarImgProps: {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    },
    commentDate: "2 min",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    ownerName: "Lorem ipsum",
    bottomNotes: "incididunt ut labore et dolore magna aliqua"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Comment small text"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_comment.Comment, {
    avatarImgProps: {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    },
    commentDate: "2 min",
    text: "Foo Bar",
    ownerName: "Lorem ipsum"
  }))));
};

exports.KarlComment = KarlComment;