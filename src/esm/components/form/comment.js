import React from 'react';
import { Comment as DefaultComment } from '../../components/comments/comment';
import { Deprecated } from '../../helpers/utils/deprecated';
export var Comment = function Comment(props) {
  var message = "You can use the Comment instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/comments/comment.js";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(DefaultComment, props));
};