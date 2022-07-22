import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
import { Marger } from '../../../../layout/marger';
export const TeamCardTitle = _ref => {
  let {
    children,
    subTitle
  } = _ref;
  return /*#__PURE__*/React.createElement(Marger, {
    top: "2"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "medium",
    weight: "700",
    color: "font1"
  }, children), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    color: "font1",
    weight: "400"
  }, subTitle));
};
TeamCardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};