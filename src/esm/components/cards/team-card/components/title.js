import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../typography/text';
import { Marger } from '../../../layout/marger';
export var TeamCardTitle = function TeamCardTitle(_ref) {
  var children = _ref.children,
      subTitle = _ref.subTitle;
  return /*#__PURE__*/React.createElement(Marger, {
    top: "2"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "default",
    weight: "bold",
    color: "font1"
  }, children), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    color: "font1",
    weight: "light"
  }, subTitle));
};
TeamCardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};