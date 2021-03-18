import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { parseHtml } from '../../../../helpers/utils/parser';
export var Subtitle = function Subtitle(_ref) {
  var subtitle = _ref.subtitle;
  return /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "regular",
    tag: "div",
    className: "k-SimpleCard__subtitle k-u-margin-bottom-singleHalf"
  }, parseHtml(subtitle));
};
Subtitle.propTypes = {
  subtitle: PropTypes.string
};
Subtitle.defaultProps = {
  subtitle: null
};