import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text } from '../../../../../components/atoms/typography/text';
export var Title = function Title(_ref) {
  var largeTitle = _ref.largeTitle,
      props = _objectWithoutProperties(_ref, ["largeTitle"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "bold"
  }, props, {
    className: classNames('k-ContributionCard__title', props.className, {
      'k-ContributionCard__title--large': largeTitle
    })
  }));
};
Title.defaultProps = {
  largeTitle: false
};
Title.propTypes = {
  largeTitle: PropTypes.bool
};