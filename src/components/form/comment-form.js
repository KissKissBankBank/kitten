"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _commentForm = require("../../components/comments/comment-form");

var _deprecated = require("../../helpers/utils/deprecated");

var CommentForm = function CommentForm(props) {
  var message = "You can use the CommentForm instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-form.js";
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, _react.default.createElement(_commentForm.CommentForm, props));
};

exports.CommentForm = CommentForm;