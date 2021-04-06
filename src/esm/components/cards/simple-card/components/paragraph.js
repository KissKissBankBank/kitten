import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke';
import { parseHtml } from '../../../../helpers/utils/parser';
export var Paragraph = function Paragraph(_ref) {
  var paragraph = _ref.paragraph;
  return /*#__PURE__*/React.createElement("div", {
    className: "k-SimpleCard__paragraph"
  }, /*#__PURE__*/React.createElement(Text, {
    lineHeight: "normal",
    size: "micro",
    weight: "light",
    tag: "p",
    className: "k-u-margin-bottom-singleHalf"
  }, parseHtml(paragraph)), /*#__PURE__*/React.createElement(HorizontalStroke, {
    size: "tiny",
    className: "k-u-margin-top-singleHalf"
  }));
};
Paragraph.propTypes = {
  paragraph: PropTypes.string
};
Paragraph.defaultProps = {
  paragraph: null
};