import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
export const Title = _ref => {
  let {
    largeTitle,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "700"
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