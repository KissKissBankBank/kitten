import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var RewardCardRowSide = function RewardCardRowSide(_ref) {
  var withVerticalMargins = _ref.withVerticalMargins,
      props = _objectWithoutProperties(_ref, ["withVerticalMargins"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-RewardCard__rowSide', props.className, {
      'k-RewardCard__rowSide--hasMargins': withVerticalMargins
    })
  }));
};
RewardCardRowSide.propTypes = {
  withVerticalMargins: PropTypes.bool,
  children: PropTypes.node
};
RewardCardRowSide.defaultProps = {
  withVerticalMargins: true,
  children: ''
};