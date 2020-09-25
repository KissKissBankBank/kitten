import React from 'react';
import { CommentForm as DefaultCommentForm } from '../../components/comments/comment-form';
import { Deprecated } from '../../helpers/utils/deprecated';
export var CommentForm = function CommentForm(props) {
  var message = "You can use the CommentForm instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment-form.js";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(DefaultCommentForm, props));
};