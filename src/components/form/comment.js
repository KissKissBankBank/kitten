"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _react = _interopRequireDefault(require("react"));

var _comment = require("../../components/comments/comment");

var _deprecated = require("../../helpers/utils/deprecated");

var Comment = function Comment(props) {
  var message = "You can use the Comment instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment.js";
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/_react.default.createElement(_comment.Comment, props));
};

exports.Comment = Comment;