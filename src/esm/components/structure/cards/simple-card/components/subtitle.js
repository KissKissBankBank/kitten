import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
import { parseHtml } from '../../../../../helpers/utils/parser';
export const Subtitle = _ref => {
  let {
    subtitle
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "500",
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