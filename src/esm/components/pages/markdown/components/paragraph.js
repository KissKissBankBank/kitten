import React from 'react';
import { Paragraph } from '../../../typography/paragraph/next';
import { Marger } from '../../../layout/marger';
import { Context } from './context';
export var MarkdownParagraph = function MarkdownParagraph(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var paragraphModifier = _ref2.paragraphModifier;
    return /*#__PURE__*/React.createElement(Marger, {
      bottom: "2.6"
    }, /*#__PURE__*/React.createElement(Paragraph, {
      modifier: paragraphModifier,
      noMargin: true
    }, children));
  });
};