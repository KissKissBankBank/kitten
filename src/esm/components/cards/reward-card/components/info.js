import React from 'react';
import { Text } from '../../../../components/typography/text';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var RewardCardInfo = function RewardCardInfo(_ref) {
  var label = _ref.label,
      value = _ref.value,
      withMarginBottom = _ref.withMarginBottom,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    color: "font1",
    weight: "regular",
    className: classNames('k-RewardCard__infos', {
      'k-RewardCard__infos--hasBottomMargin': withMarginBottom,
      'k-RewardCard__infos--disabled': disabled
    })
  }, "".concat(label, " "), /*#__PURE__*/React.createElement(Text, {
    weight: "light"
  }, value));
};
RewardCardInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  withMarginBottom: PropTypes.bool,
  disabled: PropTypes.bool
};
RewardCardInfo.defaultProps = {
  value: null,
  withMarginBottom: true,
  disabled: false
};