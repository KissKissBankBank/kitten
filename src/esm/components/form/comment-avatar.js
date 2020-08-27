import React from 'react';
import { CommentAvatar as DefaultCommentAvatar } from '../../components/comments/comment-avatar';
import { Deprecated } from '../../helpers/utils/deprecated';
export var CommentAvatar = function CommentAvatar(props) {
  var message = "You can use the CommentAvatar instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-avatar.js";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(DefaultCommentAvatar, props));
};