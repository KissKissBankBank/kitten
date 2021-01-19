import React from 'react';
export var MarkdownLink = function MarkdownLink(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: props.href,
    className: "k-Paragraph__link"
  }, props.children);
};