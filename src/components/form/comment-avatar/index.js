"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAvatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _commentAvatar = require("../../../components/comments/comment-avatar");

var _deprecated = require("../../../helpers/utils/deprecated");

var CommentAvatar = function CommentAvatar(props) {
  var message = "You can use the CommentAvatar instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-avatar.js";
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/_react.default.createElement(_commentAvatar.CommentAvatar, props));
};

exports.CommentAvatar = CommentAvatar;